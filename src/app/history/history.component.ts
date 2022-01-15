import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  selected = "";
  constructor(public historyCtrl: HistoryService) { }

  ngOnInit(): void {
    
  }
  onSelected(query:string){
    this.select.emit(query)
  }
  onSelectSelected(evt: any){
    if(evt && evt !== ""){
      this.onSelected(evt);
      
    }
  }
}
