import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { TvShow, TvShowPreview } from '../models/tv-show.model';
import { Observable, of, Subscription } from 'rxjs';
import {map, take} from 'rxjs/operators'

export type TvShowResponse = {
  tvShow: TvShow
}

export type TvShowsResponse = {
  tv_shows: TvShow[]
}

const BASE_URL = "https://www.episodate.com/api/";
const MOST_POPULAR = BASE_URL +  'most-popular';



@Injectable({
  providedIn: 'root'
})
export class TvShowHttpService {


  constructor(private _http : HttpClient) { }

  private _currentShow!: TvShow;

  public getShowById(id: number) : Observable<TvShow> {
    console.log(this._currentShow, id);
    if(this._currentShow?.id === id) {
      console.log("MatchED!");
      return of(this._currentShow).pipe(
        map((val) => ({...val}))
      );
    }

    const tvShow$ = this.getShowDetails(id).pipe(
      map((val) => {
        this._currentShow = val.tvShow;
        return val.tvShow;
      })
    );


    return tvShow$;
  }

  public getMostPopular(page: number) : Observable<TvShowPreview[]> {
    let params = new HttpParams().set('page', page);

    return this._http.get<TvShowsResponse>(MOST_POPULAR, {params}).pipe(
      map((val => {
        return val.tv_shows;
      }))
    );


  }

  private getShowDetails(query: string | number) : Observable<TvShowResponse> {

    let params = new HttpParams().set("q", query);

    return this._http.get<TvShowResponse>(
      BASE_URL + 'show-details', 
      { 
        params
      }
    );
  }


  


}
