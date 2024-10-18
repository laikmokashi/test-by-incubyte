import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (Basic)', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // Empty input should return 0
  it('should return 0 for an empty string', () => {
    expect(component.add('')).toEqual(0);
  });

  // Single number input should return the same number
  it('should return the number itself for a single number input', () => {
    expect(component.add('5')).toEqual(5);
  });

  // Sum of two numbers separated by commas
  it('should return the sum of two numbers separated by commas', () => {
    expect(component.add('1,2')).toEqual(3);
  });

  // Should throw an error when negative numbers are present
  it('should throw an error for negative numbers', () => {
    expect(() => component.add('1,-2,3')).toThrowError('Negative numbers not allowed: -2');
  });

});
