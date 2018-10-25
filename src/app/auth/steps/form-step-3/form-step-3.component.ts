import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'form-step-3',
    templateUrl: './form-step-3.component.html',
    styleUrls: ['./form-step-3.component.scss'],
})

export class FormStep3Component implements OnInit {
    ngOnInit(): void {
    }

    public currentSelectedOpt = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0,
        'E': 0,
    };

    public select(key, value) {
        this.currentSelectedOpt[key] = value;
    }
}