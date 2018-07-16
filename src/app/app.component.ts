import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExpenseService]
})
export class AppComponent implements OnInit  {

  expenseService: ExpenseService;

  constructor (expenseService: ExpenseService) {
    console.log('cons-ngOnInit');
    this.expenseService = expenseService;
  }

  ngOnInit() {
    console.log('app-ngOnInit');
    this.expenseService.getApiRecords();
  }

}
