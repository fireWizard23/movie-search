
export type TvShow =  {
    id: number;
    name: string;
    permalink: string;
    url: string;
    description: string;
    description_source: string;
    start_date: string;
    end_date?: any;
    country: string;
    status: string;
    runtime: number;
    network: string;
    youtube_link?: any;
    image_path: string;
    image_thumbnail_path: string;
    rating: string;
    rating_count: string;
    countdown?: any;
    genres: string[];
    pictures: string[];
    episodes: Episode[];
  }

export type TvShowPreview = {
  id: number;
  name: string;
  permalink: string;
  start_date: string;
  end_date?: any;
  country: string;
  network: string;
  status: string;
  image_thumbnail_path: string;
}


export  type Episode =  {
    season: number;
    episode: number;
    name: string;
    air_date: string;
}