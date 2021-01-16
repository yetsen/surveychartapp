import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import * as SurveyVue from 'survey-vue';

SurveyVue.StylesManager.applyTheme('modern');

let Survey = SurveyVue.Survey;
Survey['cssType'] = 'bootstrap';

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
          name: 'Introduction',
          elements: [
            {
              type: 'checkbox',
              name: 'ConsentForm',
              title: 'Please click on each statement to confirm that you agree before you proceed to the survey.',
              hideNumber: true,
              isRequired: true,
              choices: [
                {
                  value: 'item1',
                  text:
                    'I understand that my participation is voluntary and that I am free to withdraw at any time, without giving any reason and without my legal rights being affected. ',
                  enableIf: '{ConsentForm} = []',
                },
                {
                  value: 'item2',
                  text:
                    'I understand that if during the study I tell the research team something that causes them to have concerns in relation to my health and/or welfare they may need to breach my confidentiality.',
                  enableIf: '{ConsentForm} = []',
                },
                {
                  value: 'item3',
                  text: 'I agree to my anonymised data being used by research teams for future research.',
                  enableIf: '{ConsentForm} = []',
                },
                {
                  value: 'item4',
                  text: 'I agree to take part in this study.',
                  enableIf: '{ConsentForm} = []',
                },
              ],
              hasSelectAll: true,
            },
          ],
          title: 'Introduction',
          description:
            'Aim of the study is to understand the circular economy practices employed in your organisation. Please answer the following questions based on your views and perspectives about your organisational practices and policies.  The collected data will be used only for the research purposes and will not be shared. Thank you for your time and valuable insights. ',
        },
        {
          name: 'Screening',
          elements: [
            {
              type: 'dropdown',
              name: 'Country',
              title: 'In which country do you currently reside?',
              hideNumber: true,
              isRequired: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Afghanistan',
                },
                {
                  value: 'item2',
                  text: 'United Kingdom',
                },
                {
                  value: 'item3',
                  text: 'Vietnam',
                },
                {
                  value: 'item4',
                  text: 'Zimbabwe ',
                },
              ],
            },
            {
              type: 'radiogroup',
              name: 'EnglishLevel',
              title: 'How would you describe your understanding and fluency in English?',
              hideNumber: true,
              isRequired: true,
              choices: [
                {
                  value: 'item1',
                  text: 'I understand it very well',
                },
                {
                  value: 'item2',
                  text: 'I understand it well',
                },
                {
                  value: 'item3',
                  text: 'I have some understanding ',
                },
                {
                  value: 'item4',
                  text: "I don't really understand it",
                },
              ],
            },
          ],
          title: 'Screening',
        },
        {
          name: 'SmeScreening',
          title: 'SmeScreening',
          elements: [
            {
              type: 'radiogroup',
              name: 'WorkplaceSize',
              title: 'Please indicate if you currently work for a small or medium enterprise (SME)?',
              description: 'Note: a small or medium enterprise is defined as companies employing less than 250 people',
              isRequired: true,
              hideNumber: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Yes',
                },
                {
                  value: 'item2',
                  text: 'No',
                },
              ],
            },
          ],
        },
        {
          name: 'Turnover',
          title: 'Turnover',
          elements: [
            {
              type: 'radiogroup',
              name: 'WorkplaceSector',
              title: 'Please indicate in the sector you work in?',
              isRequired: true,
              hideNumber: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Agriculture Forestry and Fishing',
                },
                {
                  value: 'item2',
                  text: 'Mining and Quarrying',
                },
                {
                  value: 'item3',
                  text: 'Mining and Quarrying',
                },
                {
                  value: 'item4',
                  text: 'Manufacturing',
                },
                {
                  value: 'item5',
                  text: 'Electricity Gas Steam and Air Conditioning',
                },
                {
                  value: 'item6',
                  text: 'Water Supply Sewerage Waste',
                },
              ],
            },
            {
              type: 'radiogroup',
              name: 'VietnameseDong',
              title: 'Please indicate the estimated annual turnover of your company (Vietnamese Dong)',
              isRequired: true,
              hideNumber: true,
              choices: [
                {
                  value: 'item1',
                  text: 'less than 300,000.000',
                },
                {
                  value: 'item2',
                  text: 'between 300,000.001 and 600,000.000',
                },
                {
                  value: 'item3',
                  text: 'between 600,000.001 and 1,200,000,000',
                },
                {
                  value: 'item4',
                  text: 'between 1,200,000,001 and 3,200,000,000',
                },
                {
                  value: 'item5',
                  text: 'between 3,200,000,001 and 6,200,000,000',
                },
                {
                  value: 'item6',
                  text: 'between 6,200,000,001 and 12,200,000,000',
                },
              ],
            },
          ],
        },
        {
          name: 'Employment',
          title: 'Employment',
          elements: [
            {
              type: 'text',
              name: 'EmployedRole',
              title: 'Please indicate your role/ designation in the SME (organisation) you are employed',
              placeHolder: 'Enter Here...',
              isRequired: true,
              hideNumber: true,
            },
            {
              type: 'radiogroup',
              name: 'ManagementRole',
              title: 'Please indicate if your role involve managing other people',
              isRequired: true,
              hideNumber: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Always',
                },
                {
                  value: 'item2',
                  text: 'Most of the time',
                },
                {
                  value: 'item3',
                  text: 'About half the time',
                },
                {
                  value: 'item4',
                  text: 'Sometimes',
                },
                {
                  value: 'item5',
                  text: 'Never',
                },
              ],
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
