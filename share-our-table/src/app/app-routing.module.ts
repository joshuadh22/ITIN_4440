import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { FilesComponent } from './files/files.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';

import { OrganizationComponent } from './organizations/organization/organization.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'files', component: FilesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', component: UsersComponent},
  { path: 'notifications', component: NotificationsComponent },
  { path: 'about', component: AboutComponent },

  { path: 'organizations', component: OrganizationsComponent },
  { path: 'organizations/:name', component: OrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
