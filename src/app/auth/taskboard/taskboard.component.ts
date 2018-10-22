import {
    Component,
    OnInit,
} from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
    selector: 'taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.scss'],
})

export class TaskboardComponent implements OnInit {
    ngOnInit(): void {
    }

    public currentDraggingItem = {};
    public columns = [
        {
            className: 'todo',
            title: 'To Do',
            tasks: [
                {
                    title: 'Add ESLint to build process',
                    attachments: 0,
                    comments: 2,
                    users: [
                        'https://randomuser.me/api/portraits/women/28.jpg',
                        'https://randomuser.me/api/portraits/men/81.jpg'
                    ]
                }
            ]
        },
        {
            className: 'inprogress',
            title: 'In Progress',
            tasks: [
                {
                    title: 'Job board wireframes',
                    attachments: 0,
                    comments: 2,
                    users: [
                        'https://randomuser.me/api/portraits/men/4.jpg',
                        'https://randomuser.me/api/portraits/lego/7.jpg',
                        'https://randomuser.me/api/portraits/lego/7.jpg',
                        'https://randomuser.me/api/portraits/men/22.jpg'
                    ]
                }
            ]
        },
        {
            className: 'approved',
            title: 'Approved',
            tasks: [
                {
                    title: 'Dashboard Mockups',
                    attachments: 0,
                    comments: 2,
                    users: [
                        'https://randomuser.me/api/portraits/men/12.jpg',
                        'https://randomuser.me/api/portraits/women/22.jpg'
                    ]
                }
            ]
        },
        {
            className: 'backlog',
            title: 'Backlog',
            tasks: []
        }
    ]

    draggable = {
        // note that data is handled with JSON.stringify/JSON.parse
        // only set simple data or POJO's as methods will be lost
        data: 'myDragData',
        effectAllowed: 'all',
        disable: false,
        handle: false
    };

    onDragStart(event: DragEvent, col, item: any) {
        this.currentDraggingItem = item;
    }

    onDrop(event: DndDropEvent, col) {

        if (col.tasks && (event.dropEffect === 'copy'
                || event.dropEffect === 'move')) {

            let index = event.index;

            if (typeof index === 'undefined') {

                index = col.tasks.length;
            }

            col.tasks.splice(index, 0, event.data);
        }
    }

    onDragged(data, col, event) {
        switch (event) {
            case 'move':
                const index = col.tasks.indexOf(data);
                col.tasks.splice(index, 1);
                break;
        }
    }
}