import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {
  }

  ngOnInit() {
    this.searchPlayers();
  }

  onSelect(player: Player): void {
    this.router.navigateByUrl(`/player/${player.license}`);
  }

  searchPlayers(filterName: string = ''): void {
    this.playerService.search(filterName).subscribe(json => {
      this.players = json.players;
    });
  }

  onFilterChange(filterName: string) {
    this.searchPlayers(filterName);
  }
}
