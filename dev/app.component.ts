import {Component} from 'angular2/core';
import {ListingComponent} from './listing.component';
import {EntryService} from './Entry/entry-service';
@Component({
    selector: 'my-app',
    template:`
        <div id = "query">
        <input type="text" #entry>
        <button (click)="onClick(entry.value)">Click me</button>
        </div>
        <div class="flex-container">

            <div class="card" id="mnths_yrs">

            </div>
            <div class="card" id="calendar">
                      <span id="hori"
                            (click)="dateSelect(no)"
                            *ngFor="#no of day_nos"
                            [ngStyle]="focusDate(no)?{'color':'blue'}:{'color':'rgba(0,0,0,0.3)'}">
                            {{no}}
                      </span>
            </div>

            <div class="card" id="todo">
                <span id="date_mnth_yr">
                      <span id="date">
                          {{currentdate.getDate()}}
                      </span>
                      <span id="mnth">
                          {{getmonth()}}
                      </span>
                      <span id="yr">
                          {{currentdate.getFullYear()}}
                      </span>
                      <span id="day">
                          {{getday()}}
                      </span>
                </span>
                <br>
                <list></list>
            </div>
        </div>
    `,
    styleUrls:['../src/css/test.css'],
    directives:[ListingComponent]
})
export class AppComponent
{
  public one_encountered=false;
  public day_nos=[];
  public days_in_month=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  public weekstartindex=null;
  public months=['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
  public currentdate = null;

  public days=[
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ]

  constructor(private _entryservice : EntryService){
    this.currentdate = new Date();
    this.weekstartindex = this.currentdate.getDay();
    this.initialize();
  }

  public getday(){
    return this.days[this.currentdate.getDay()];
  }

  public getmonth(){
    return this.months[this.currentdate.getMonth()];
  }

  onAddMore(){
  }

  onClick(value){
      if(value!=="")
      {
        this._entryservice.entries.push({post:value,status:false});
        console.log(this._entryservice.entries)
      }
  }

  public dateSelect(value){
    this.currentdate.setDate(value);
  }

  public focusDate(value){
      if(value === 1) this.one_encountered = this.one_encountered ? false:true;
      return this.one_encountered;
  }

  private initialize(){
    var temp,current=1;
    var firstDay = new Date(this.currentdate.getFullYear(),this.currentdate.getMonth(),1);
    temp = this.days_in_month[this.currentdate.getMonth()-1];
    for(var i=0;i<42;++i){
        if(i<firstDay.getDay())
        {
            this.day_nos.unshift(temp);
            temp-=1;
        }
        else
        {
            if(this.days_in_month[firstDay.getMonth()]+firstDay.getDay()===i) current=1;
            this.day_nos.push(current);
            current+=1;
        }
    }
  }
}
