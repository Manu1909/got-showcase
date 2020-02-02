import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHouseListComponent } from './small-house-list.component';

describe('SmallHouseListComponent', () => {
  let component: SmallHouseListComponent;
  let fixture: ComponentFixture<SmallHouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
