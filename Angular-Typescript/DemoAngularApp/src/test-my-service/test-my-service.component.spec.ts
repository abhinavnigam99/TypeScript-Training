import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMyServiceComponent } from './test-my-service.component';

describe('TestMyServiceComponent', () => {
  let component: TestMyServiceComponent;
  let fixture: ComponentFixture<TestMyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
