import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: 'mf-one',
    loadComponent: () => import('mfe1/Component').then((c) => c.AppComponent),
  },
  {
    path: 'mf-two',
    loadComponent: () => import('mfe2/Component').then((c) => c.AppComponent),
  },
  {
    path: 'portal',
    loadComponent: () => import('./portal.component').then((c) => c.PortalComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mf-one',
  },
];
