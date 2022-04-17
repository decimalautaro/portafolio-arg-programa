import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoApComponent } from './component/logo-ap/logo-ap.component';
import { SocialComponent } from './component/social/social.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { SkillsComponent } from './component/skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
