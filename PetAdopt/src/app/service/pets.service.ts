import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Adoption, AdoptionList } from '../models/adopton.model';
import { Pet, PetsList } from '../models/pets-list.model';
const baseUrl = 'http://localhost:3000/api/pets';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  getPets(params?: any): Observable<PetsList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get(baseUrl, options).pipe(
      map((data: any) => {
        return new PetsList(data);
      })
    );
  }

  getAdoptions(): Observable<AdoptionList> {
    return this.http.get('http://localhost:3000/api/adoptions').pipe(
      map((data: any) => {
        return new AdoptionList(data);
      })
    );
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get(baseUrl + '/' + id).pipe(
      map((data: any) => {
        return new Pet(data);
      })
    );
  }

  postAdoption(adoption: Adoption): Observable<any> {
    return this.http
      .post(`http://localhost:3000/api/adoptions/`, adoption)
      .pipe(
        map((data: any) => {
          return new Adoption(data);
        })
      );
  }
  deleteAdoption(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/adoptions/${id}`).pipe(
      map((data: any) => {
        return new Adoption(data);
      })
    );
  }
}
