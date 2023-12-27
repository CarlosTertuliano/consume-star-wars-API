import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../Planet';
import { Response } from '../Response';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor(private http : HttpClient) { }

  getAllPlanets(page : number) : Observable<Response<Planet[]>>{
    return this.http.get<Response<Planet[]>>("https://swapi.dev/api/planets/?page="+page);
  }
}
