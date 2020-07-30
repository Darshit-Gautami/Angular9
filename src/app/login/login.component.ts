import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';  
import { Router,RouterModule, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id;
  constructor(private _router:Router,private _Activatedroute:ActivatedRoute) { }  
  data: any;  
  LoginForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  
  emailname:any="admin@test.com";
  Password:any="Admin@123#"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  ngOnInit(): void {  

    this.LoginForm = new FormGroup({  
      unm: new FormControl("",[Validators.required]),        
      email:new FormControl("",[Validators.required,Validators.email]),  
      pass: new FormControl("",[Validators.required]),  
    })    
  }  
  Save() {   
    debugger
    this.submitted = true;  
    
     if (this.LoginForm.invalid) {  
            return;  
     } 
     else
     {
       if(this.emailname == this.LoginForm.value.email && this.Password == this.LoginForm.value.pass)
       {
          this._router.navigate(['home']);
       }
       else
       {
        alert("Email and Password Incorrect");
         return;
       }
     } 
    
  }  
  resetFrom()  
  {     
    this.LoginForm.reset();  
    this.submitted = false;   
  }
}
