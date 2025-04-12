import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCatprofileComponent } from './add-edit-catprofile.component';

describe('AddEditCatprofileComponent', () => {
  let component: AddEditCatprofileComponent;
  let fixture: ComponentFixture<AddEditCatprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCatprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCatprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
