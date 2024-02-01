import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompendiumComponent } from './compendium.component';

describe('CompendiumComponent', () => {
  let component: CompendiumComponent;
  let fixture: ComponentFixture<CompendiumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompendiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompendiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
