import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTileComponent } from './fourth-tile.component';

describe('FourthTileComponent', () => {
  let component: FourthTileComponent;
  let fixture: ComponentFixture<FourthTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
