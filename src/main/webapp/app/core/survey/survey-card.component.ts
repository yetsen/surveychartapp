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
    console.log(json);
    let model = new SurveyVue.Model(json);
    return {
      survey: model,
    };
  },
})
export default class SurveyCardComponent extends Vue {
  @Inject('surveyService')
  private surveyService: () => SurveyService;
}
