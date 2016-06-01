import {Component} from 'angular2/core';

@Component({
  selector:'date',
  template:`
    <div class="head">
      <div class = "date">
      {{currentdate.getDate()}}
      </div>
      {{getmonth()}} {{currentdate.getFullYear()}}
      <div class="day">
      {{getday()}}
      </div>
    </div>
  `,
  styleUrls:['../src/css/date.css']
})

export class DateComponent{

    public months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

    public days=[
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    public currentdate = null;
    constructor(){
      this.currentdate = new Date();
    }

    public getday(){
      return this.days[this.currentdate.getDay()];
    }

    public getmonth(){
      return this.months[this.currentdate.getMonth()];
    }
}
