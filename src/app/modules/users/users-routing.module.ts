import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dataResolver } from 'src/app/shared/resolvers/data.resolver';
import { UsersService } from './services/users.service';
import { UsersComponent } from './users.component';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';
import { UserComponent } from './components/user/user.component';
import { itemResolver } from 'src/app/shared/resolvers/item.resolver';
import { ApiEndpoints } from 'src/app/shared/models/api-endpoints.model';
import { UserCrudComponent } from './components/user-crud/user-crud.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersOverviewComponent,
        resolve: {
          users: dataResolver(UsersService),
        },
      },
      {
        path: 'create',
        component: UserCrudComponent,
        data: { title: 'Create user' },
      },
      {
        path: 'edit/:id',
        component: UserCrudComponent,
        resolve: { item: itemResolver(UsersService, ApiEndpoints.USERS) },
        data: { title: 'Edit user' },
      },
      {
        path: ':id',
        component: UserComponent,
        resolve: { item: itemResolver(UsersService, ApiEndpoints.USERS) },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
