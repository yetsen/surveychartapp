import Vue from 'vue';
import axios, { AxiosPromise } from 'axios';
import { Store } from 'vuex';

export default class SurveyService {
  constructor(private store: Store<any>) {
    this.init();
  }

  public init(): void {
    this.get().then(res => {
      console.log(res);
      this.store.commit('setSurvey', res.data);
    });
  }

  public get(): AxiosPromise<any> {
    return axios.get('api/survey');
  }
}
