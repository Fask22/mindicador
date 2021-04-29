import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './web-components/home/home.component';
import { DetailsComponent } from './web-components/details/details.component';
import { GraphicComponent } from './web-components/graphic/graphic.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'graphic',
    component: GraphicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
