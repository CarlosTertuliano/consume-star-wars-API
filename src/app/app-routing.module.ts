import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'favorites', component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
