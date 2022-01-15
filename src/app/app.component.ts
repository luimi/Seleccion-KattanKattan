import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seleccion-kattankattan';
  @ViewChild('search') searchChild! : SearchComponent
  onHistorySelected(query: string){
    this.searchChild.onHistorySearch(query);
  }
}
