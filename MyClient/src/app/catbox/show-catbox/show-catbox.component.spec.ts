import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatboxComponent } from './show-catbox.component';

describe('ShowCatboxComponent', () => {
  let component: ShowCatboxComponent;
  let fixture: ComponentFixture<ShowCatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCatboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
