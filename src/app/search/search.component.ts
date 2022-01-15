import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../api/giphy.service';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = "";
  result: any;
  isLoading = false;
  constructor(private api: GiphyService, private historyCtrl: HistoryService) { }

  ngOnInit(): void {
  }
  async search(){
    if(this.query && this.query.trim().length > 0) {
      this.isLoading = true;
      try{
        this.result = await this.api.searchGifs(this.query);
        this.historyCtrl.addQuery(this.query);
        this.query = "";
      }catch(e){}
      this.isLoading = false;
    }
  }
  public onHistorySearch(query: string){
    this.query = query;
    this.search();
  }
}
