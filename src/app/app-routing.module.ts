import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './auth/logout/logout.component';
import { UnauthModule } from './unauth/unauth.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pages' },
    {
        path: 'pages', loadChildren: './unauth/unauth.module#UnauthModule'
    },
    {
        path: 'home', loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**',
        redirectTo: 'pages'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}