import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user-button/new-user-button.component';
import { DeleteUserButtonComponent } from './components/delete-user-button/delete-user-button.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent,
    DeleteUserButtonComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
