import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { RouterModule, Routes } from "@angular/router";
import { ScrollToModule } from "ng2-scroll-to";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ActualiteComponent } from "./actualite/actualite.component";
import { AppRoutingModule } from "./app-routing.module";
import { AssociationComponent } from "./association/association.component";
import { AdherentComponent } from "./adherent/adherent.component";
import { PrestationComponent } from "./prestation/prestation.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    AssociationComponent,
    AdherentComponent,
    PrestationComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC8eXMauUESsEeaJCaIT0fG9drTjPpPilk"
    }),
    RouterModule,
    ScrollToModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
