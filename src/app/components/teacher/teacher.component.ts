import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  openform:any;
  nextForm:any;
  Quiz: any = {};
  obj:any;
  constructor() { }

  ngOnInit() {
  }


  createQ(){
    this.openform=true;  
    return this.openform; 
  }

  
  addQuestions(Quiz){
   console.log('questions are', Quiz);
  }
  
  next(){
   this.openform = false;
   this.nextForm = true;
   alert('done');
  }
  
  reset(){
    
  }
}
