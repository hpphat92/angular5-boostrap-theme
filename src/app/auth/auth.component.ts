import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../theme/layouts/_services/script-loader.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { AlertService } from '../shared/services/alert.service';
import { UserService } from '../shared/services/user.service';
import { AlertComponent } from '../shared/directives/alert/alert.component';
import { LoginCustom } from '../shared/helpers/login-custom';
import { Helpers } from '../helpers';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {
    ngOnInit(): void {
    }
}