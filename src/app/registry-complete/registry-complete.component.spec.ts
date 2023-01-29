import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryCompleteComponent } from './registry-complete.component';

describe('RegistryCompleteComponent', () => {
  let component: RegistryCompleteComponent;
  let fixture: ComponentFixture<RegistryCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
