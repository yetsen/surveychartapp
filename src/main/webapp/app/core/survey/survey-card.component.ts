import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import * as SurveyVue from 'survey-vue';
import SurveyService from '@/core/survey.service';
import { Answer } from '@/shared/model/answer.model';

SurveyVue.StylesManager.applyTheme('modern');

let Survey = SurveyVue.Survey;
Survey['cssType'] = 'bootstrap';

@Component({
  name: 'surveyCard',
  components: {
    Survey,
  },
})
export default class SurveyCardComponent extends Vue {
  @Inject('surveyService')
  private surveyService: () => SurveyService;

  data() {
    let json = this.$store.getters.survey;
    (window as any).survey = new SurveyVue.Model(json);
    let that = this;
    (window as any).survey.onCurrentPageChanged.add(function (model, options) {
      that.pushCurrentSurveyData(model.data);
    });
    return {
      survey: (window as any).survey,
    };
  }

  userId() {
    return this.$store.getters.account.id;
  }

  pushCurrentSurveyData(surveyData: any) {
    let answers = this.convertSurveyDataToAnswer(surveyData);
    this.surveyService()
      .push(answers)
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  }

  private convertSurveyDataToAnswer(surveyData: any): Answer[] {
    let answers: Answer[] = [];
    let that = this;
    Object.keys(surveyData).forEach(function (key, index) {
      let value = surveyData[key];
      if (typeof value === 'string') {
        let ans = new Answer();
        ans.userId = that.userId();
        ans.questionName = key;
        ans.choiceValue = value;
        answers.push(ans);
      } else if (Array.isArray(value)) {
        value.forEach(v => {
          let ans = new Answer();
          ans.userId = that.userId();
          ans.questionName = key;
          ans.choiceValue = v;
          answers.push(ans);
        });
      } else {
        Object.keys(value).forEach(function (key, index) {
          let ans = new Answer();
          ans.userId = that.userId();
          ans.questionName = key;
          ans.choiceValue = value[key];
          answers.push(ans);
        });
      }
    });
    return answers;
  }
}
