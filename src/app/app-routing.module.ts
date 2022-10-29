import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './pages/home2/home2.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path:'', component:Home2Component},
  {path:'home', component:Home2Component},
  {path:'listado', component:ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
