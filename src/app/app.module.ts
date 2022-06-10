import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Pages/CommonPages/footer/footer.component';
import { HeaderComponent } from './Pages/CommonPages/header/header.component';
import { SidebarComponent } from './Pages/CommonPages/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
