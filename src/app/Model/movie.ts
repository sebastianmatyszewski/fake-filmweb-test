export interface Movie {
    page: number;
    results?: (MovieEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface MovieEntity {
    name: string;
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface Genre {
    id: number;
    name: string;
  }
  