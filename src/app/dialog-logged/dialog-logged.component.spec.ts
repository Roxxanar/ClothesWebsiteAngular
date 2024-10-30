import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoggedComponent } from './dialog-logged.component';

describe('DialogLoggedComponent', () => {
  let component: DialogLoggedComponent;
  let fixture: ComponentFixture<DialogLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLoggedComponent]
    });
    fixture = TestBed.createComponent(DialogLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
