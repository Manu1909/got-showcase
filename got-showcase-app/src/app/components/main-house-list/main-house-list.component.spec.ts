import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHouseListComponent } from './main-house-list.component';

describe('MainHouseListComponent', () => {
  let component: MainHouseListComponent;
  let fixture: ComponentFixture<MainHouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
