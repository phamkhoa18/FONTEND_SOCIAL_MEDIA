import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '' , component : CommonComponent , children : [
      {path : '' , component : HomeComponent},
      {path : '' , redirectTo : "/" , pathMatch : 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
