import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'userlist',
    component: UserListComponent
  }, {
    path: 'usercreate',
    component: UserFormCreateComponent
  }, {
    path: 'useredit',
    component: UserFormEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
