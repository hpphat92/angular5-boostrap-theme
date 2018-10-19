import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

declare let mLayout: any;

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit, AfterViewInit {


    public routers: any = [
        // {
        //     title: 'Base',
        //     subMenu: [
        //         {
        //             title: 'State Colors',
        //             href: '/components/base/state'
        //         },
        //         {
        //             title: 'Typography',
        //             href: '/components/base/typography'
        //         }
        //     ]
        // },
        {
            title: 'Dashboard',
            href: '/home/dashboard'
        },

        {
            title: 'Steps',
            href: '/home/steps'
        },
        {
            title: 'Timeline',
            href: '/home/timeline'
        },
        {
            title: 'Users',
            subMenu: [
                // {
                //     title: 'State Colors',
                //     href: '/components/base/state'
                // },
                // {
                //     title: 'Typography',
                //     href: '/components/base/typography'
                // },
                {
                    title: 'User',
                    href: '/home/users'
                },
            ]
        },
    ];

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

}