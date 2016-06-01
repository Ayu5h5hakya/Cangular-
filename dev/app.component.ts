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
                            *ngFor="#no of day_nos">
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
  public day_nos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
  public viewInput = false;
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
  }

  public getday(){
    return this.days[this.currentdate.getDay()];
  }

  public getmonth(){
    return this.months[this.currentdate.getMonth()];
  }

  onAddMore(){
    this.viewInput = true;
  }

  onClick(value){
      if(value!=="")
      {
        this._entryservice.entries.push({post:value,status:false});
        this.viewInput=false;
        console.log(this._entryservice.entries)
      }
  }

  public dateSelect(value){
    this.currentdate.setDate(value);
  }
}
