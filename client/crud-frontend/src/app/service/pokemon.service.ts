import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = environment.pokeApi;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<HttpResponse<any>> {
    const uri = `/gender/3`;
    return this.httpClient.get<any>(API_URL + uri, {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

}
