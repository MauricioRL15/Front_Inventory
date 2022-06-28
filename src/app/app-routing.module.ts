import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrotiendaComponent } from './components/registrotienda/registrotienda.component';
import { RegistrouserComponent } from './components/registrouser/registrouser.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path:'login', component:LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path:'registrouser', component:RegistrouserComponent },
  { path:'registrotienda', component:RegistrotiendaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
