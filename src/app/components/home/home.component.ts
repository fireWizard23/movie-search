import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShow, TvShowPreview } from 'src/app/models/tv-show.model';
import { TvShowHttpService } from 'src/app/services/tvshow-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tvShowsList!: TvShowPreview[];


  constructor(private _httpService : TvShowHttpService, private _router : Router) { }


  ngOnInit(): void {
    this._httpService.getMostPopular(1).subscribe(val => {
      this.tvShowsList = val;
    })
  }

  navigateTo(id: number) {
    this._router.navigate(['shows', id]);
  }



}
