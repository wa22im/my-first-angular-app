import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './compoenents/pages/about/about.component';
import { TodosComponent } from './compoenents/todos/todos.component';




const routes: Routes = [
  { 

    path:'',component:TodosComponent,
  },{
    path:'about' , component:AboutComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
