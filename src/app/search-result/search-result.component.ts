import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
@Input() film: any;
@Output() idFilmSelected = new EventEmitter<any>();

emitIdFilmSelected() {
  this.idFilmSelected.emit(this.film.id);
}

}
