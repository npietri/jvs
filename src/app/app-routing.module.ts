import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { ActualiteComponent } from "./actualite/actualite.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AssociationComponent } from "./association/association.component";
import { AdherentComponent } from "./adherent/adherent.component";
import { PrestationComponent } from "./prestation/prestation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: "", redirectTo: "/association", pathMatch: "full" },
  { path: "association", component: AssociationComponent },

  {
    path: "prestation",
    component: PrestationComponent
  },
  {
    path: "adherent",
    component: AdherentComponent
  },
  {
    path: "actualite",
    component: ActualiteComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64] // [x, y]
    }),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
