import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemenuComponent } from './mobilemenu.component';

describe('MobilemenuComponent', () => {
  let component: MobilemenuComponent;
  let fixture: ComponentFixture<MobilemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilemenuComponent]
    });
    fixture = TestBed.createComponent(MobilemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
