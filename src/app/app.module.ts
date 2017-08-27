import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
