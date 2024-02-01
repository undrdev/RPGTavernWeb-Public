import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CombatListComponent } from './combat-list.component';

describe('CombatListComponent', () => {
  let component: CombatListComponent;
  let fixture: ComponentFixture<CombatListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
