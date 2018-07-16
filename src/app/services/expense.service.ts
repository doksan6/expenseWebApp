import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Record } from '../models/Record';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENGINE_METHOD_DIGESTS } from 'constants';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ExpenseService {

  recordsChanged = new Subject();

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }


  private records: Record[] = [];


getApiRecords(){
  return this.http.get('http://api.webbilir.com/api/expenses')
    .map((data) => {
      return data.json().map(r =>{
        return { value : r.deger , type : r.tip  }
      });
    })
    .subscribe((response) => {
      this.records = response;
      this.recordsChanged.next();
    })
  )
}

  getRecords(type: string)  {

    return this.records.filter(r => r.type === type);
  }

  setRecord(record: Record) {

    this.http.post('http://api.webbilir.com/api/expenses', record)
    .map(
        (response: Response) => {
            return response.json();
        }
    )
    .subscribe(
      (transformedData: any) => {
          this.records.push(transformedData);
          this.recordsChanged.next();
      }
  );


    this.recordsChanged.next();
  }

}
