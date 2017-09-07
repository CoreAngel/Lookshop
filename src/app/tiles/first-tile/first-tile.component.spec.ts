import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTileComponent } from './first-tile.component';

describe('FirstTileComponent', () => {
  let component: FirstTileComponent;
  let fixture: ComponentFixture<FirstTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
