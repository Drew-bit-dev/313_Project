import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatsService } from './stats.service';

@Injectable({
  providedIn: 'root'
})
export class FirbaseService {

  constructor(private http: HttpClient) { }

  addCharacter(newChar: StatsService){
    return this.http.post("https://danddcharsheet-default-rtdb.firebaseio.com/" + "character.json", newChar);
  }
}
