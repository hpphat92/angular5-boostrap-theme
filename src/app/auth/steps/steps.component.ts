import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
})

export class StepsComponent implements OnInit {
    ngOnInit(): void {
    }

    public currentStep = 4;

    public setStep(step) {
        this.currentStep = step;
        if (this.currentStep < 1) {
            this.currentStep = 1;
        }
    }

    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        }
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        }
    ];
}