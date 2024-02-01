import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CompendiumComponent } from '../compendium/compendium.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { QuickEncounterComponent } from '../components/quick-encounter/quick-encounter.component';
import { DesignComponent } from '../components/design/design.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/quick-encounter', pathMatch: 'full'},
  { path: 'quick-encounter', component: QuickEncounterComponent },
  { path: 'dashbaord', component: DashboardComponent},
  { path: 'design', component: DesignComponent, canActivate: [AuthGuard]},
  { path: 'compendium', component: CompendiumComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
