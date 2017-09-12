import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent, LoginComponent } from './components';
import { LoggedInGuard } from './guards';
import { RegistryService, SessionService } from './services';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RegistryService,
    SessionService,
    LoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }