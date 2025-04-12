import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectCatprofileComponent } from './list-select-catprofile.component';

describe('ListSelectCatprofileComponent', () => {
  let component: ListSelectCatprofileComponent;
  let fixture: ComponentFixture<ListSelectCatprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSelectCatprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSelectCatprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
