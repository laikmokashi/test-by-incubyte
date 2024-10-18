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
  add(numbers:string):number{
    if (!numbers) {
      return 0; // Return 0 if input is empty
    }
    return 1;
  }
}
