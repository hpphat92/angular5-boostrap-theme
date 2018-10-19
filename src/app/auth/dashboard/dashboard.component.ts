import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../../theme/layouts/_services/script-loader.service';
import { AlertService, AuthenticationService, UserService } from '../../shared/services';
import { Helpers } from '../../helpers';
import { LoginCustom } from '../../shared/helpers/login-custom';
import { AlertComponent } from '../../shared/directives';

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