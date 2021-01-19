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
  data() {
    let json = this.$store.getters.survey;
    (window as any).survey = new SurveyVue.Model(json);
    (window as any).survey.onComplete.add(function (result) {
      document.querySelector('#surveyResult').textContent = 'Result JSON:\n' + JSON.stringify(result.data, null, 3);
    });
    return {
      survey: (window as any).survey,
    };
  },
})
export default class SurveyCardComponent extends Vue {
  @Inject('surveyService')
  private surveyService: () => SurveyService;
}
