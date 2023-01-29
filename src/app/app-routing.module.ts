import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistryCompleteComponent } from './registry-complete/registry-complete.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'registry-page', component: RegistryPageComponent },
  { path: 'registry-complete', component: RegistryCompleteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
