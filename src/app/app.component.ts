import { Component } from '@angular/core';
import { ExpenseService } from './services/expense.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExpenseService, LogService]
})
export class AppComponent {

}
