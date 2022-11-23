import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SearchService {

  constructor(private readonly http: HttpClient) {}

  getMoviesPath: string = 'https://api.themoviedb.org/3/search/movie';
  getMovie: string = 'https://api.themoviedb.org/3/movie/';
 

  movies = (query: string, year:number): Observable<any> =>{
    const params:HttpParams = new HttpParams().append('query',query).append('year',year)
    return this.http.get(`${this.getMoviesPath}`, {params})
  }

  movie = (id: number): Observable<any> =>{
    const params:HttpParams = new HttpParams().append('append_to_response','credits,similar')
    return this.http.get(`${this.getMovie}${id}`, {params})
  }
}
