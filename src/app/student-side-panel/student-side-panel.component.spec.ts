import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSidePanelComponent } from './student-side-panel.component';

describe('StudentSidePanelComponent', () => {
  let component: StudentSidePanelComponent;
  let fixture: ComponentFixture<StudentSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
