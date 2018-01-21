import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnabletoloadComponent } from './unabletoload.component';

describe('UnabletoloadComponent', () => {
  let component: UnabletoloadComponent;
  let fixture: ComponentFixture<UnabletoloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnabletoloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnabletoloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
