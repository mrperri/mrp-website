import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpanComponent } from './icon-list.component';

describe('IconSpanComponent', () => {
  let component: IconSpanComponent;
  let fixture: ComponentFixture<IconSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSpanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
