import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpCreateComponent } from './components/emp-create/emp-create.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'emp-create' },
  { path: 'emp-create', component: EmpCreateComponent },
  { path: 'emp-list', component: EmpListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
