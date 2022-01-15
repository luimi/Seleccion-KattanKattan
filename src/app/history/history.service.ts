import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public list: string[] = [];
  constructor() { 
    if(localStorage.getItem("history")){
      this.list = JSON.parse(localStorage.getItem("history") || "[]");
    }
  }

  public addQuery(query: string){
    if(this.list.indexOf(query) === -1){
      this.list.unshift(query)
      localStorage.setItem("history",JSON.stringify(this.list));
    }
  }
  public getQueries(){
    return this.list;
  }
}
