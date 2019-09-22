import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundParallaxComponent } from './background-parallax.component';

describe('BackgroundParallaxComponent', () => {
  let component: BackgroundParallaxComponent;
  let fixture: ComponentFixture<BackgroundParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
