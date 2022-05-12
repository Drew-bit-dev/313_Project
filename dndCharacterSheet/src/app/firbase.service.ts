import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatsService } from './stats.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirbaseService {

  constructor(private http: HttpClient) { }

  addCharacter(newChar: StatsService){
    return this.http.post("https://yadcs-baa85-default-rtdb.firebaseio.com/" + "character.json", newChar);
  }

  getCharacters(){
    return this.http.get<StatsService[]>("https://yadcs-baa85-default-rtdb.firebaseio.com/"+"character.json")
    .pipe(map(responseData => {
      const characterArray: StatsService[]=[];
      for(const key in responseData){
        characterArray.push(responseData[key]);
      }
      return characterArray;
    })
    );
  }
}
