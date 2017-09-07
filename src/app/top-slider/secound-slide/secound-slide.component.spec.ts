import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundSlideComponent } from './secound-slide.component';

describe('SecoundSlideComponent', () => {
  let component: SecoundSlideComponent;
  let fixture: ComponentFixture<SecoundSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecoundSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
