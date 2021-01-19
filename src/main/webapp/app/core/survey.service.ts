import axios, { AxiosPromise } from 'axios';
import { Store } from 'vuex';

export default class SurveyService {
  constructor(private store: Store<any>) {
    this.init();
  }

  public init(): void {
    this.get().then(res => {
      this.store.commit('setSurvey', res.data);
    });
  }

  public get(): AxiosPromise<any> {
    return axios.get('api/survey');
  }

  public push(survey: any): Promise<any> {
    return axios.post('api/survey', survey);
  }
}
