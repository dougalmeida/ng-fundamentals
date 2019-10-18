import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>
                {{event.name}}
            </h2>
            <div>
                Date: {{event.date}}
            </div>
            <!–– <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time"> 
            <!–– <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">
            <!–– <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
            <!–– <div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb',
            <!–– 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">
            <!–– <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> 
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time"> 
                Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Eearly start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>
                Price: \${{ event.price }}
            </div>
            <div *ngIf="event?.location">
                <span>
                    Location: {{event.location.address}}
                </span>
                <span class="pad-left">
                    {{event.location.city}}, {{event.location.country}}
                </span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online Url: &nbsp;
                <a href="https://{{ event?.onlineUrl }}" target="_blank">
                     {{ event.onlineUrl }}
                </a>
            </div>
        </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb}     
    `]
})

export class EventThumbnailComponent {
    @Input() event: any
    someProperty: any = "some value"

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';        
        return { green : isEarlyStart, bold: isEarlyStart };
        //few options
        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold';
        // return '';
        // if(this.event && this.event.time === '8:00 am')
        //     return ['green',  'bold'];
        // return [];
    }

    getStartTimeStyle(){
        if(this.event && this.event.time === '8:00 am')
            return {color:'#003300', 'font-weigth': 'bold'};
        return {}
    }

    logFoo(){
        console.log('Foo')
    }
}