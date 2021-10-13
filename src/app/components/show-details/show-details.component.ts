import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TvShow } from 'src/app/models/tv-show.model';
import { TvShowHttpService } from 'src/app/services/tvshow-http.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {

  showId!: number;
  tvShow!: TvShow;
  private _showSubscription!: Subscription;


  constructor(
    private _activatedRoute : ActivatedRoute,
    private _httpService: TvShowHttpService,
    private _titleService : Title
    ) { }


  ngOnDestroy(): void {
    this._showSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param: any) => {
      const id = Number(param.id);
      this.showId = id;

      this._showSubscription = this._httpService.getShowById(id).subscribe((val) => {
        this.tvShow = val;
        this._titleService.setTitle('TvS - ' + val.name);
      });
    })
  }

}
