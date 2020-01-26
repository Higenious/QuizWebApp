import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from '../app/components/teacher/teacher.component';
import {StudentComponent} from '../app/components/student/student.component';

const routes: Routes = [
  {path:'teachers', component : TeacherComponent},
  {path:'students', component : StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
