import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMasterfileComponent } from './employee-masterfile.component';

describe('EmployeeMasterfileComponent', () => {
  let component: EmployeeMasterfileComponent;
  let fixture: ComponentFixture<EmployeeMasterfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMasterfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMasterfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
