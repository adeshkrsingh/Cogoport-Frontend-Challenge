import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retryWhen';

@Injectable()
export class ApiconnectionService {
  url: string;
  apiurl = 'http://starlord.hackerearth.com/gamesarena';

  constructor(private http: Http) { }

  postData(requesturl: string, content: any) {
    // tslint:disable-next-line:prefer-const
    let recieveddata: any;
    if (false) {
      // Already logged in
      // //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getAuthAccessToken())
      // const h = 'Bearer ' + this.userdata.getUserToken();
      // this.options = new RequestOptions({
      //   headers: new Headers({
      //     // 'Content-Type': 'multipart/form-data',
      //     'Authorization': h,
      //   })
      // });

      // this.url = this.apiurl + requesturl;
      // return this.http.post(this.url, content, this.options)
      //   .map((res) => res.json())
      //   .retry(5);

    } else {
      //
      this.url = this.apiurl + requesturl;
      return this.http.post(this.url, content)
        .map((res) => res.json())
        .retry(5);
    }
  }

  getData(requesturl: string) {
    // const h = 'Bearer ' + this.userdata.getUserToken();
    // this.options = new RequestOptions({
    //   headers: new Headers({
    //     // 'Content-Type': 'multipart/form-data',
    //     'Authorization': h,
    //   })
    // });

    // this.http.get('../../../assets/mydata.json').map(res => res.json()).retry(10);

    // this.url = this.apiurl + requesturl;
    this.url = '../../../assets/mydata.json';
    return this.http.get(this.url)
      .map((res) => res.json())
      .retry(10);
  }

}
