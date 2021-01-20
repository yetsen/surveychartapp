import axios, { AxiosPromise } from 'axios';
import { Store } from 'vuex';
import { Answer } from '@/shared/model/answer.model';

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

  public push(answer: Answer[]): Promise<any> {
    return axios.post('api/survey', answer);
  }
}
