import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiServiceService {
  private apiUrl = 'http://ec2-18-208-217-202.compute-1.amazonaws.com:3100q/api/v1/google/register-attendance';
  constructor(private http: HttpClient) { }

  sendDataForm (data: any): Observable<any> {
    const info = {
      "spreadsheetId": "1T2JRfzel5TH8jNWf0Y4fLRg3sAP40Z3I7TE_CHx_Ybw",
      "range": "Registro!A1",
      data: [data]
    }
    console.log(info)
    return this.http.post<any>(this.apiUrl, info);
  }
}
