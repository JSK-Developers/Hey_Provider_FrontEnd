import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImgComponent } from './header-img.component';

describe('HeaderImgComponent', () => {
  let component: HeaderImgComponent;
  let fixture: ComponentFixture<HeaderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
