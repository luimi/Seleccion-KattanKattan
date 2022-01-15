import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit {
  @Input('data') data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
