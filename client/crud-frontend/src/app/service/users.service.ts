import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', Validators.required),
    pokemonName: new FormControl(''),
    phone: new FormControl('', Validators.minLength(8))
  });

  formSearch: FormGroup = new FormGroup({
    nameSearch: new FormControl(''),
  });

  initializeFormGroup(): void {
    this.form.setValue({
      $key: null,
      name: '',
      email: '',
      cpf: '',
      phone: '',
      pokemonName: ''
    });
  }

  initializeSearchFormGroup(): void {
    this.formSearch.setValue({
      nameSearch: '',
    });
  }

  initializeFormGroupEdition(user: User): void {
    this.form.setValue({
      $key: null,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      phone: user.phone,
      pokemonName: user.pokemonName
    });
  }

  public create(user: User): Observable<HttpResponse<User>> {
    const uri = `/user/v1/create`;
    return this.httpClient.post<User>(API_URL + uri, JSON.stringify(user), {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

  public update(user: User): Observable<HttpResponse<User>> {
    const uri = `/user/v1/update`;
    return this.httpClient.put<User>(API_URL + uri, JSON.stringify(user), {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

  public delete(id: number): Observable<HttpResponse<any>> {
    const uri = `/user/v1/${id}`;
    return this.httpClient.delete<any>(API_URL + uri, {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

  public findAll(): Observable<HttpResponse<User[]>> {
    const uri = `/user/v1/list`;
    return this.httpClient.get<User[]>(API_URL + uri, {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

  public findById(id: number): Observable<HttpResponse<User>> {
    const uri = `/user/v1/${id}`;
    return this.httpClient.get<User>(API_URL + uri, {
      headers: {},
      params: {},
      observe: 'response',
    });
  }

  public findAllByName(name: string): Observable<HttpResponse<User[]>> {
    const uri = `/user/v1/list/${name}`;
    return this.httpClient.get<User[]>(API_URL + uri, {
      headers: {},
      params: {},
      observe: 'response',
    });
  }
}
