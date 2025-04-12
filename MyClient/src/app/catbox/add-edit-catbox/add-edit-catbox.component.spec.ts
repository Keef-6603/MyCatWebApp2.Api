import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCatboxComponent } from './add-edit-catbox.component';

describe('AddEditCatboxComponent', () => {
  let component: AddEditCatboxComponent;
  let fixture: ComponentFixture<AddEditCatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCatboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
