import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events/events-page/events-page.component').then(
        (m) => m.EventsPageComponent
      ),
  },
  {
    path: 'events/details/:id',
    loadComponent: () =>
      import('./events/eventsdetails/eventsdetails.component').then(
        (m) => m.EventsdetailsComponent
      ),
  }
];
