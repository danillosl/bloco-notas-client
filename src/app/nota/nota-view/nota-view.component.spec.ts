import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaViewComponent } from './nota-view.component';

describe('NotaViewComponent', () => {
  let component: NotaViewComponent;
  let fixture: ComponentFixture<NotaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
