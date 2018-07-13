import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRootComponent } from './expense-root.component';

describe('ExpenseRootComponent', () => {
  let component: ExpenseRootComponent;
  let fixture: ComponentFixture<ExpenseRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
