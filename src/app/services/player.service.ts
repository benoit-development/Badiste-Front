import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Player } from '../players/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  BADISTE_URL = 'http://localhost:5000/api/v1/';

  players: Player[] = [];

  constructor(
    private http: HttpClient
  ) { }

  search(nameFilter: string = null): Observable<any> {
    return this.http.get(this.BADISTE_URL.concat(`players?search=${encodeURIComponent(nameFilter)}`));
  }

  findByLicence(license: number): Observable<any> {
    return this.http.get(this.BADISTE_URL.concat(`players/${encodeURIComponent(license + '')}`));
  }
}
