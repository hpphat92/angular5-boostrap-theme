import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UnauthRoutingModule } from './unauth-routing.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        UnauthRoutingModule,
    ],
    providers: [
        // api backend simulation
        BaseRequestOptions,
    ],
})

export class UnauthModule {
}