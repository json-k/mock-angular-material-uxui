import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';


export class LabeledRoute implements Route {
  label?: string = "";
  icon?: string;
  path?: string;
  component?: any;
  redirectTo?: string;
  pathMatch?: string;
}


export const labeledRoutes: LabeledRoute[] = [
  { icon: "dashboard", label: "Dashboard", path: "dashboard", component: DashboardComponent },
];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: 'main', component: MainComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, ...labeledRoutes] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
