import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../../shared/services';
import { Helpers } from '../../helpers';
import { LoginCustom } from '../../shared/helpers/login-custom';
import { ScriptLoaderService } from '../../theme/layouts/_services/script-loader.service';
import { AlertComponent } from '../../shared/directives';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    @ViewChild('alertSignin',
        { read: ViewContainerRef }) alertSignin: ViewContainerRef;
    @ViewChild('alertSignup',
        { read: ViewContainerRef }) alertSignup: ViewContainerRef;
    @ViewChild('alertForgotPass',
        { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;

    constructor(private _router: Router,
        private _script: ScriptLoaderService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _alertService: AlertService,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    }

    signin() {
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(
            data => {
                this._router.navigate(['home']);
            },
            error => {
                this.showAlert('alertSignin');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    signup() {
        this.loading = true;
        this._userService.create(this.model).subscribe(
            data => {
                this.showAlert('alertSignin');
                this._alertService.success(
                    'Thank you. To complete your registration please check your email.',
                    true);
                this.loading = false;
                LoginCustom.displaySignInForm();
                this.model = {};
            },
            error => {
                this.showAlert('alertSignup');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    forgotPass() {
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(
            data => {
                this.showAlert('alertSignin');
                this._alertService.success(
                    'Cool! Password recovery instruction has been sent to your email.',
                    true);
                this.loading = false;
                LoginCustom.displaySignInForm();
                this.model = {};
            },
            error => {
                this.showAlert('alertForgotPass');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    showAlert(target) {
        this[target].clear();
        let factory = this.cfr.resolveComponentFactory(AlertComponent);
        let ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}