import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {RouterModule,Routes} from '@angular/router';
import { TaskService } from 'app/services/task.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { DatePipe } from '@angular/common';

const appRoutes: Routes=[
{path:'',component:ViewTaskComponent},
{path:'edit/:id',component:TaskFormComponent},
{path:'add',component:TaskFormComponent},
{path:'endTask/:id',component:ViewTaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
