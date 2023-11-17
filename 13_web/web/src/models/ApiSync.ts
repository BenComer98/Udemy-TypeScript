import axios, { AxiosPromise } from 'axios';
import { Identifiable } from '../types/Identifiable';

export class ApiSync<T extends Identifiable> {
  constructor(public rootUrl: string) {};

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: T): AxiosPromise => {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    }
    else {
      return axios.post(this.rootUrl, data);
    }
  }
};