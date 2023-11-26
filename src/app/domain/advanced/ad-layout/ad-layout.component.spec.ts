import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLayoutComponent } from './ad-layout.component';

describe('AdLayoutComponent', () => {
  let component: AdLayoutComponent;
  let fixture: ComponentFixture<AdLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdLayoutComponent]
    });
    fixture = TestBed.createComponent(AdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
