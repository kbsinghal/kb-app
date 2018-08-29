import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateformComponent } from './stateform.component';

describe('StateformComponent', () => {
  let component: StateformComponent;
  let fixture: ComponentFixture<StateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
