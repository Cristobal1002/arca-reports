import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiServiceService {
  private apiUrl = 'https://hamwc2wbbg.us-east-1.awsapprunner.com/api/v1/google/register-attendance';
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
