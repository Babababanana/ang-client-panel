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

const appRoutes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'client/add', component: CreateClientComponent},
    {path: 'client/edit/:id', component: EditClientComponent},
    {path: 'client/:id', component: ClientDetailComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', component: Page404Component}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
