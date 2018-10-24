import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { DataTableModule } from 'primeng/primeng';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { WizardModule } from 'ngx-wizard';
let components = [
    SidebarComponent,
    HeaderComponent,
];
let modules = [
    Ng2TableModule,
    NgbModule,
    TableModule,
    DataTableModule,
    NgxDnDModule,
    WizardModule
];

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components,
        ...modules
    ],
    imports: [
        CommonModule,
        RouterModule,
        ...modules
    ]
})
export class SharedModule {
}