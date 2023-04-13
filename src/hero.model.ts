export interface HeroSearchResponse {
    results: Hero[];
  }
  
  export interface Hero {
    appearance: any;
    id: string;
    name: string;
    image: {
      url: string;
    }
  }

