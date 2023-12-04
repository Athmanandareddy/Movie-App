import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  baseurl = "https://api.themoviedb.org/3";
  apikey = "a39135b49c966169e26d44bc033ecc45";

  constructor(private http: HttpClient) { }



  bannerApiData(): Observable<any> {
    let uri = this.baseurl + "/trending/all/week?api_key=" + this.apikey;
    return this.http.get(uri)
  }


  trendingMovieApiData(): Observable<any> {
    let uri = this.baseurl + "/trending/all/day?api_key=" + this.apikey;
    return this.http.get(uri)
  }

  getsearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#')
    let uri = this.baseurl + "/search/movie?api_key=" + this.apikey + "&query=" + data.movieName;
    return this.http.get(uri)
  }

  getMovieDetails(data: any): Observable<any> {
    let uri = this.baseurl + "/movie/" + data + "?api_key=" + this.apikey;
    return this.http.get(uri)
  }


  getMovieVideo(data: any): Observable<any> {
    let uri = this.baseurl + "/movie/" + data + "/videos?api_key=" + this.apikey;
    return this.http.get(uri)
  }

  getMovieCast(data: any): Observable<any> {
    let uri = this.baseurl + "/movie/" + data + "/credits?api_key=" + this.apikey;
    return this.http.get(uri)
  }

  fetchActionMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=28";
    return this.http.get(uri)
  }

  fetchAdventureMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=12";
    return this.http.get(uri)
  }

  fetchAnimationMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=16";
    return this.http.get(uri)
  }

  fetchComedyMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=35";
    return this.http.get(uri)
  }

  fetchDocumentaryMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=99";
    return this.http.get(uri)
  }

  fetchScienceFictionMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=878";
    return this.http.get(uri)
  }

  fetchThrillerMovies(): Observable<any> {
    let uri = this.baseurl + "/discover/movie?api_key=" + this.apikey + "&with_genres=53";
    return this.http.get(uri)
  }

}
