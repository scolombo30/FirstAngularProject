import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../models/providers/service/search.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

constructor(private readonly service :SearchService){ }

@Input() movie:any
@Input() cast: Array<any> = []
@Input() crew: Array<any> = []
@Output() closeDetailsEmit = new EventEmitter<any>()
closeMovieDetails:boolean = false;

closeDetails(){
  this.closeMovieDetails = true;
  this.movie = null;
  this.closeDetailsEmit.emit(this.closeMovieDetails);
}

}
