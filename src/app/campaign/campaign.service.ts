import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor(private http: HttpClient) {}
  getCampaigns(params) {
    return this.http
      .get<any>('assets/data-table-mock.json', { params: params })
      .toPromise();
    // .then((res) => <Campaign[]>res.data)
    // .then((data) => {
    //   return data;
    // });
  }
}
