import { NgModule } from "@angular/core";
//import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActualiteComponent } from "./actualite/actualite.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AssociationComponent } from "./association/association.component";
// import { AdherentComponent } from "./adherent/adherent.component";
// import { PrestationComponent } from "./prestation/prestation.component";

const routes: Routes = [
  { path: "", redirectTo: "/association", pathMatch: "full" },
  { path: "association", component: AssociationComponent },

  {
    path: "actualite",
    component: ActualiteComponent
  },

  { path: "**", component: PageNotFoundComponent }
  // {
  //   path: "prestation",
  //   component: PrestationComponent
  // },
  // {
  //   path: "adherent",
  //   component: AdherentComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
