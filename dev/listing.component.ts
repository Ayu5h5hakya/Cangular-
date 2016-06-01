import {Component} from 'angular2/core';
import {EntryService} from './Entry/entry-service';
import {Entry} from './Entry/entry';
@Component({
  selector:'list',
  template:`
      <ul>
          <li *ngFor = "#entry of entries"
              [class.complete]="entry.status===true">
              <div id="post">
              {{entry.post}}
              </div>
          </li>
      </ul>
  `,
  styleUrls:['../src/css/entry.css']
})

export class ListingComponent{

    public entries : Entry[] =[];
    constructor(private _entryservice : EntryService){
        this.entries = this._entryservice.entries;
    }
}
