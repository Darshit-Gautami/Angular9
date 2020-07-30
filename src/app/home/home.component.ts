import { Component, OnInit } from '@angular/core';
import {PassdataService} from './passdata.service'
import { FormGroup, FormControl,Validators } from '@angular/forms';  
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private Userdata:PassdataService) { }  
  data: any;  
  Profile: FormGroup;  
  submitted = false;   
  
  ngOnInit(): void {  
debugger
    // this.Userdata.data;  
    // this.data =this.Userdata.data;
    alert(this.data);
    this.EditData(this.data);
  

    this.Profile = new FormGroup({  
        
      userName: new FormControl("",[Validators.required]),        
      userEmail:new FormControl("",[Validators.required,Validators.email]),  
        
    })    
  }  
  EditData(Data) {  
    this.Profile.controls["userName"].setValue(Data.unm);  
    this.Profile.controls["userEmail"].setValue(Data.email);      
   
  }  
  resetFrom()  
  {         
    this.Profile.reset();  
    this.submitted = false;   
  } 

}
