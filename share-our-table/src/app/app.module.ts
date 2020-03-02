import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './app-bar/app-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrganizationComponent } from './organizations/organization/organization.component';
import { UpcomingMeetingsComponent } from './home/upcoming-meetings/upcoming-meetings.component';
import { FeedComponent } from './home/feed/feed.component';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
import { TreeComponent } from './files/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
=======
>>>>>>> 3ec7e7f63dfc32f00b8da8604ebdbd9b4a3d1bc2


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SideNavigationComponent,
    HomeComponent,
    FilesComponent,
    OrganizationsComponent,
    CalendarComponent,
    NotificationsComponent,
    UsersComponent,
    OrganizationComponent,
    UpcomingMeetingsComponent,
    FeedComponent,
<<<<<<< HEAD
    TreeComponent,
=======
>>>>>>> 3ec7e7f63dfc32f00b8da8604ebdbd9b4a3d1bc2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    LayoutModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
