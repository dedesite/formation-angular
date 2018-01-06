import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DictationComponent } from "./dictation/dictation.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dictation", component: DictationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
