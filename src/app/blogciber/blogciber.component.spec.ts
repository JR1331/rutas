import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogciberComponent } from './blogciber.component';

describe('BlogciberComponent', () => {
  let component: BlogciberComponent;
  let fixture: ComponentFixture<BlogciberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogciberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogciberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
