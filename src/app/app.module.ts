import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './pro/about/about.component';
import { SidebarComponent } from './pro/sidebar/sidebar.component';
import { ProjectsComponent } from './pro/projects/projects.component';
import { EducationComponent } from './pro/education/education.component';



const appRoutes:Routes = [
  {path:'', component:IndexComponent},
  {path:'home', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'education', component:EducationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    SidebarComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
