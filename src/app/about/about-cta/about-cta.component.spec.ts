import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCtaComponent } from './about-cta.component';

describe('AboutCtaComponent', () => {
  let component: AboutCtaComponent;
  let fixture: ComponentFixture<AboutCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
