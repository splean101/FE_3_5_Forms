import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  submit (form:any){
    if(form.valid){
      console.log(form.value);
      return;
      }
      form.control.markAllAsTouched()
    
  }
}
