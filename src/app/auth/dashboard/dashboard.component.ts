import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { AlertService, AuthenticationService, UserService } from '../_services';
import { Helpers } from '../../helpers';
import { LoginCustom } from '../_helpers/login-custom';
import { AlertComponent } from '../_directives';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {

    constructor() {

    }
    ngOnInit() {

    }
}