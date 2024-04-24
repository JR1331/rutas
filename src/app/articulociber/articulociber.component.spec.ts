import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulociberComponent } from './articulociber.component';

describe('ArticulociberComponent', () => {
  let component: ArticulociberComponent;
  let fixture: ComponentFixture<ArticulociberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticulociberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticulociberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
