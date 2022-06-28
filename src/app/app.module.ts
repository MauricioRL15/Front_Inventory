import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




//Componentes
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { RegistrouserComponent } from './components/registrouser/registrouser.component';
import { RegistrotiendaComponent } from './components/registrotienda/registrotienda.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrouserComponent,
    RegistrotiendaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
