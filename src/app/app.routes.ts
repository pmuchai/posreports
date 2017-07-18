/**
 * Created by HP on 11/07/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';


const routes: Routes = <Routes>[
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

export const appRouterModule = RouterModule.forRoot(routes);

