import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatprofileComponent } from './show-catprofile.component';

describe('ShowCatprofileComponent', () => {
  let component: ShowCatprofileComponent;
  let fixture: ComponentFixture<ShowCatprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCatprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCatprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
