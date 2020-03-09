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
import { PostsComponent } from './posts/posts.component';
import { FilesComponent } from './files/files.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrganizationComponent } from './organizations/organization/organization.component';
import { UpcomingMeetingsComponent } from './posts/upcoming-meetings/upcoming-meetings.component';
import { FeedComponent } from './posts/feed/feed.component';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PublicTreeComponent } from './files/public-tree/tree.component';
import { PrivateTreeComponent } from './files/private-tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './files/dialog/dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { config } from '../environments/environment';
import { HomeComponent } from './home/home.component';


import { DirectoryData } from "./files/dialog/directory/directory.component";
import { TreeViewModule } from '@progress/kendo-angular-treeview';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SideNavigationComponent,
    PostsComponent,
    FilesComponent,
    OrganizationsComponent,
    CalendarComponent,
    NotificationsComponent,
    UsersComponent,
    OrganizationComponent,
    UpcomingMeetingsComponent,
    FeedComponent,
    PublicTreeComponent,
    PrivateTreeComponent,
    DialogComponent,
    HomeComponent,
    DirectoryData,
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
    MatSnackBarModule,
    LayoutModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatTreeModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    TreeViewModule,
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent, DirectoryData]
})
export class AppModule { }
