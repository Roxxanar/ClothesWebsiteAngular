import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBagComponent } from './dialog-bag.component';

describe('DialogBagComponent', () => {
  let component: DialogBagComponent;
  let fixture: ComponentFixture<DialogBagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBagComponent]
    });
    fixture = TestBed.createComponent(DialogBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
