import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import * as SurveyVue from 'survey-vue';

SurveyVue.StylesManager.applyTheme('modern');

let Survey = SurveyVue.Survey;
Survey.cssType = 'bootstrap';

@Component({
  name: 'surveyCard',
  components: {
    Survey,
  },
  data() {
    let json = {
      title: 'Circular Economy Assessment',
      showProgressBar: 'top',
      pages: [
        {
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
        },
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'price to competitors',
              title: 'Compared to our competitors, do you feel the Product is',
              choices: ['Less expensive', 'Priced about the same', 'More expensive', 'Not sure'],
            },
            {
              type: 'radiogroup',
              name: 'price',
              title: 'Do you feel our current price is merited by our product?',
              choices: [
                'correct|Yes, the price is about right',
                'low|No, the price is too low for your product',
                'high|No, the price is too high for your product',
              ],
            },
            {
              type: 'multipletext',
              name: 'pricelimit',
              title: 'What is the... ',
              items: [
                {
                  name: 'mostamount',
                  title: 'Most amount you would every pay for a product like ours',
                },
                {
                  name: 'leastamount',
                  title: 'The least amount you would feel comfortable paying',
                },
              ],
            },
          ],
        },
        {
          questions: [
            {
              type: 'text',
              name: 'email',
              title:
                "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button.",
            },
          ],
        },
      ],
    };
    let model = new SurveyVue.Model(json);
    return {
      survey: model,
    };
  },
})
export default class SurveyCardComponent extends Vue {}
