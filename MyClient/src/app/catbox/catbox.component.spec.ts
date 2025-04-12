import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatboxComponent } from './catbox.component';

describe('CatboxComponent', () => {
  let component: CatboxComponent;
  let fixture: ComponentFixture<CatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
