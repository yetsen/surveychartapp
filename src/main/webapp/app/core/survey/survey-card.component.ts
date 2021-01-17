import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import * as SurveyVue from 'survey-vue';
import LoginService from '@/account/login.service';
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

  get survey() {
    let json = this.$store.getters.survey;
    console.log(json);
    return new SurveyVue.Model(json);
  }
}
