import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { WelcomeBannerComponent } from './componentes/welcome-banner/welcome-banner.component';
import { HabilidadesHomeComponent } from './componentes/habilidades-home/habilidades-home.component';
import { ColeccionesComponent } from './componentes/colecciones/colecciones.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeBannerComponent,
    HabilidadesHomeComponent,
    ColeccionesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
