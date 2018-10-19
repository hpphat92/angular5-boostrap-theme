import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import * as _ from 'lodash';
import * as users from './users.json';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {

    public users = [];
    public cols: any = [];

    public constructor() {
        this.cols = [
            { field: 'orderId', header: 'Order Id' },
            { field: 'owner', header: 'Owner' },
            { field: 'contact', header: 'Contact' },
            { field: 'make', header: 'Manufactured By' },
            { field: 'model', header: 'Model' },
            { field: 'depositPaid', header: 'Cost' },
            { field: 'orderDate', header: 'Ordered On' }
        ];
        this.users = _.map(users, (u) => {
            return {
                ...u,
                ...u.car
            }
        });
    }

    public ngOnInit(): void {
    }

}