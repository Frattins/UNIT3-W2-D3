import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { PreferitiComponent } from './preferiti/preferiti.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {path: 'home',
  component: HomepageComponent
},
{
  path: 'carrello',
  component: CarrelloComponent
},
{
  path: 'preferiti',
  component: PreferitiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
