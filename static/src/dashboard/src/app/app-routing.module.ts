import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, LoginComponent } from './components';
import { LoggedInGuard } from './guards';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',  component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
