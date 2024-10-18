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

  // Should ignore non-numeric characters and spaces
  it('should ignore non-numeric values and return the sum of valid numbers', () => {
    expect(component.add('1, 2, abc, 3')).toEqual(6);
  });

  // Should handle input with spaces around the numbers
  it('should trim and sum numbers correctly with spaces around them', () => {
    expect(component.add('  1  ,  2  ,  3  ')).toEqual(6);
  });

  // Should ignore empty values between commas
  it('should handle empty values between commas', () => {
    expect(component.add('1,,2,3')).toEqual(6);
  });

  // Should handle a mix of numbers and non-numeric characters
  it('should sum numbers and ignore non-numeric characters in the input', () => {
    expect(component.add('1,a,3,b,4')).toEqual(8);
  });

  // Input with only non-numeric characters should return 0
  it('should return 0 when input contains only non-numeric characters', () => {
    expect(component.add('abc,xyz')).toEqual(0);
  });

  // Should handle leading and trailing spaces in the input
  it('should handle leading and trailing spaces in the input string', () => {
    expect(component.add('   1,2,3   ')).toEqual(6);
  });

  // Should handle new lines as a delimiter
  it('should return the sum of numbers separated by a newline', () => {
    expect(component.add('1\\n2,3')).toEqual(6);
  });
  
  // Custom delimiter should work as expected
  it('should support custom delimiter specified in the input', () => {
    expect(component.add('//;\n1;2;3')).toEqual(6);
  });
});
