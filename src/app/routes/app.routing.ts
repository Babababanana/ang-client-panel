import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { CreateClientComponent } from '../components/create-client/create-client.component';
import { EditClientComponent } from '../components/edit-client/edit-client.component';
import { ClientDetailComponent } from '../components/client-detail/client-detail.component';
import { Page404Component } from '../components/page-404/page-404.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegisterGuard } from '../guards/register.guard';

const appRoutes: Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
    {path: 'client/add', component: CreateClientComponent, canActivate: [AuthGuard]},
    {path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
    {path: 'client/:id', component: ClientDetailComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: '**', component: Page404Component}
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthGuard,
        RegisterGuard
    ]
})

export class AppRouting {}
