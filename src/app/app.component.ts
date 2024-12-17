import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, ReactiveFormsModule ,FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForm';

  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder ){
      this.userForm = this.formBuilder.group({
        name : ['',Validators.required],
        email : ['', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) ]],
        address: this.formBuilder.group({
          street: ['', Validators.required],
          city: ['', Validators.required]
        }),
        phoneNumber: this.formBuilder.array(
         [ this.formBuilder.control( '', [ Validators.required,Validators.pattern(/^\d{10}$/)])
         ]
        )
      })
  }

  get phoneNumber():FormArray{
    return this.userForm.get('phoneNumber') as FormArray;
  }
  addPhoneNumber(){
    this.phoneNumber.push(this.formBuilder.control('',[Validators.required,Validators.pattern(/^\d{10}$/)]));
  }
  deletePhoneNumber(index:number){
    this.phoneNumber.removeAt(index);
  }
  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }

}
