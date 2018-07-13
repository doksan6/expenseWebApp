import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Record } from '../models/Record';
import { Subject } from 'rxjs/Subject';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ExpenseService {

  recordsChanged = new Subject();

  private records: Record[] = [{
    value: 200,
    type: 'Gider'
  },{
    value: 300,
    type: 'Gider'
  },{
    value: 300,
    type: 'Gelir'
  }

];


  getRecords(type:string)  {
    return this.records.filter(r => r.type == type);
  }

  setRecord(record: Record){
    this.records.push(record);
    this.recordsChanged.next();
  }

  constructor(private logservice: LogService) {
    logservice.addMessage('Expense service çalışıyor');
  }

}
