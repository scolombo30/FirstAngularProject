import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges{
  @Input() filmList: Array<any> | any;
  @Input() data: boolean | any;
  @Output() idFilmSelected = new EventEmitter<any>();
  isMovieSelected: boolean = false;
  
  emitId(id:number){
    this.idFilmSelected.emit(id);
    console.log(id);
    this.isMovieSelected = true;
  }
  
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change: SimpleChange = changes['data']; 
    if(!!change?.currentValue) this.isMovieSelected = !change?.currentValue
  }
}
