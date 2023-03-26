import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  form!: FormGroup
ngOnInit(){
  this.form = new FormGroup({
    login1: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email1: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('[a-z A-Z]+$')]),
    

  })
}

  submit (form:any){
    if(form.valid){
      console.log(form.value);
      return;
      }
      form.control.markAllAsTouched()
  }
  submit1(){    
      console.log(this.form.value);     
    
  }
}
