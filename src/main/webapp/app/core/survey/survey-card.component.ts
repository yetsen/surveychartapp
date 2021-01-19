import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import * as SurveyVue from 'survey-vue';
import SurveyService from '@/core/survey.service';

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

  pushCurrentSurveyData(surveyData: any) {
    let userId = this.$store.getters.account.id;
    this.surveyService()
      .push(surveyData)
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
