import { HttpParams } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from './models/providers/service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private service: SearchService) { }

  queryText: string = '';
  yearFilm: number | any;

  filmList: Array<any> | any;
  movie: any;
  cast : Array<any> | any;
  crew : Array<any> | any;
  closeMovieDetails: boolean = false;

  searchMovies(): void {
    if (!!this.queryText) {
      const params = new HttpParams().append('query',this.queryText)
                                     .append('year',this.yearFilm)
      this.service.movies(this.queryText,this.yearFilm )
        .subscribe({
          next: res => {
            console.log(res);
            this.filmList = res.results;
          },
          error: err => console.log(err)
        }
        );
    }
  }
  searchMovieById(id:number): void{
    this.service.movie(id)
      .subscribe({
        next: res =>{
          console.log(res);
          this.movie = res;
          this.cast = res.credits.cast
          this.crew = res.credits.crew
        },
        error: err => console.log(err)
      })
    this.closeMovieDetails = false;
  }

  closeDetails(closeDetails: boolean){
    this.closeMovieDetails = closeDetails
  }

}
