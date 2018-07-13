import { Component, OnInit } from '@angular/core';
import { Record } from '../models/Record';
import { ExpenseService } from '../services/expense.service';


@Component({
  selector: 'app-expense-root',
  templateUrl: './expense-root.component.html',
  styleUrls: ['./expense-root.component.css']
})
export class ExpenseRootComponent implements OnInit {

  constructor(private expenseService: ExpenseService) {
    this.incomes = expenseService.getRecords('Gelir');
    this.expenses = expenseService.getRecords('Gider');
  }


  public records: Record[] = [];
  public incomes: Record[] = [];
  public expenses: Record[] = [];


  ngOnInit() {
    this.expenseService.recordsChanged.subscribe((r)=>{
      this.expenses = this.expenseService.getRecords('Gider');
    });
  }


}
