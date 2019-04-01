import { Injectable } from '@angular/core';
import { PLAYERS } from '../players.mock';
import { Player } from '../players/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  search(nameFilter: string = null): Player[] {
    if (nameFilter) {
      const result = [];
      PLAYERS.forEach((player: Player) => {
        if (player.name.toLowerCase().includes(nameFilter.toLowerCase())) {
          result.push(player);
        }
      });
      return result;
    } else {
      return PLAYERS;
    }
  }

  findByLicence(license: number): Player {
    let result = null;
    PLAYERS.forEach((player: Player) => {
      if(license === player.license) {
        result = player;
      }
    });
    return result;
  }
}
