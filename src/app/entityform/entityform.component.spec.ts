import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityformComponent } from './entityform.component';

describe('EntityformComponent', () => {
  let component: EntityformComponent;
  let fixture: ComponentFixture<EntityformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
