import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainCtaComponent } from './home/main-cta/main-cta.component';
import { SectionOneComponent } from './home/section-one/section-one.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit';
import { AboutCtaComponent } from './about/about-cta/about-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ErrorPageComponent,
    MainCtaComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutCtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    MdbCollapseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
