import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'more',
    component: MoreInfoComponent
  },
  {
    path: 'shows/:id',
    component: ShowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
