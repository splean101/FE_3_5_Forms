import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  form!: FormGroup
ngOnInit(){
  this.form = new FormGroup({})
}

  submit (form:any){
    if(form.valid){
      console.log(form.value);
      return;
      }
      form.control.markAllAsTouched()
  }
  submit1(){    
      console.log(this.form);     
    
  }
}
