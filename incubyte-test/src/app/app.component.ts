import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string = '';
  result:number|null = null;
  error:string|null = ' Error '

  /**
   * @summary call add function and check if error
   * @required input variable 
   */
  calculate(){
    try {
      this.error = null;
      this.result = this.add(this.input);
    } catch (e: any) {
      this.result = null;
      this.error = e.message;
    }
  }
   // String Calculator Logic
   add(numbers: string): number {
    if (!numbers) {
      return 0; // Return 0 for empty input
    }

    let delimiter = ',';
    const lines = numbers.split('\n');

    // Check for custom delimiter
    if (lines[0].startsWith('//')) {
      delimiter = lines[0][2]; // Extract custom delimiter
      numbers = lines.slice(1).join(''); // Remove the delimiter definition line
    } else {
      if(lines && lines.length>1){
        numbers = lines.join('');
      }else{
        numbers = lines[0]
      }
    }

    // Replace newlines with the current delimiter
    numbers = numbers.replaceAll(/\\n/g, delimiter);
    const numList = numbers.split(delimiter);
    let total = 0;
    const negatives: number[] = [];

    for (const num of numList) {
      const trimmedNum = num.trim();
      if (trimmedNum) {
        const value = parseInt(trimmedNum, 10);
        if (isNaN(value)) {
          continue; // Ignore non-numeric values
        }
        if (value < 0) {
          negatives.push(value);
        } else {
          total += value;
        }
      }
    }

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return total;
  }
}
