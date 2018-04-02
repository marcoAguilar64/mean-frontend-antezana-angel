import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule } from '@angular/forms';
import { TokenInjectorService } from './services/token-injector.service';
import { UserFormLoginComponent } from './user-form-login/user-form-login.component';
import { AuthService } from './services/auth.service';
import { UserInformationComponent } from './user-information/user-information.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserFormEditComponent,
    UserFormCreateComponent,
    HomeComponent,
    UserViewComponent,
    UserFormLoginComponent,
    UserInformationComponent,
    ArticleListComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,
    ArticleService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInjectorService,
    multi: true
  }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
