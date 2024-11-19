import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubscribeComponent } from './dialog-subscribe.component';

describe('DialogSubscribeComponent', () => {
  let component: DialogSubscribeComponent;
  let fixture: ComponentFixture<DialogSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSubscribeComponent]
    });
    fixture = TestBed.createComponent(DialogSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
