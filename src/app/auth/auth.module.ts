import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { AlertComponent } from '../shared/directives';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from '../shared/guards';
import { AlertService } from '../shared/services';
import { AuthenticationService } from '../shared/services';
import { UserService } from '../shared/services';
import { fakeBackendProvider } from '../shared/helpers';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { StepsComponent } from './steps/steps.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

@NgModule({
    declarations: [
        AuthComponent,
        AlertComponent,
        LogoutComponent,
        DashboardComponent,
        UsersComponent,
        StepsComponent,
        TimelineComponent,
        TaskboardComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        HttpModule,
        AuthRoutingModule,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        // api backend simulation
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
    ],
    entryComponents: [AlertComponent],
})

export class AuthModule {
}