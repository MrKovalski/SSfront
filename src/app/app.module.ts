import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { StudentSidePanelComponent } from './student-side-panel/student-side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentViewComponent,
    AdminViewComponent,
    StudentSidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
