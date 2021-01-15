import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import SurveyVue from 'survey-vue';

SurveyVue.StylesManager.applyTheme('modern');

let surveyVue = SurveyVue.Survey;
@Component({
  components: {
    surveyVue: surveyVue,
  },
  data() {
    let json = {
      questions: [
        {
          type: 'matrix',
          name: 'Quality',
          title: 'Please indicate if you agree or disagree with the following statements',
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            },
            {
              value: 2,
              text: 'Disagree',
            },
            {
              value: 3,
              text: 'Neutral',
            },
            {
              value: 4,
              text: 'Agree',
            },
            {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'affordable',
              text: 'Product is affordable',
            },
            {
              value: 'does what it claims',
              text: 'Product does what it claims',
            },
            {
              value: 'better then others',
              text: 'Product is better than other products on the market',
            },
            {
              value: 'easy to use',
              text: 'Product is easy to use',
            },
          ],
        },
      ],
    };
    let model = new SurveyVue.Model(json);
    return {
      surveyData: model,
    };
  },
})
export default class SurveyComponent extends Vue {}
