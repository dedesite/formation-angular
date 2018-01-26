import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DictationComponent } from "./dictation/dictation.component";
import { ChildComponent } from "./child/child.component";
import { AdminChildComponent } from "./admin-child/admin-child.component";
import { AdminConfigComponent } from "./admin-config/admin-config.component";
import { AdminComponent } from "./admin/admin.component";
import { ConfigComponent } from "./config/config.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dictation/:id", component: DictationComponent },
  { path: "child", component: ChildComponent },
  { path: "child/:id", component: ChildComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/children", component: AdminChildComponent },
  { path: "admin/config", component: AdminConfigComponent },
  { path: "config/:id", component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
