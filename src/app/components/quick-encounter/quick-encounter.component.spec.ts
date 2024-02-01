import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickEncounterComponent } from './quick-encounter.component';

describe('QuickEncounterComponent', () => {
  let component: QuickEncounterComponent;
  let fixture: ComponentFixture<QuickEncounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
