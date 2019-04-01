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

  constructor(private router: Router, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.searchPlayers();
  }

  onSelect(player: Player): void {
    this.router.navigateByUrl(`/player/${player.license}`);
  }

  searchPlayers(): void {
    this.players = this.playerService.search();
  }

  onFilterChange(filterName: string) {
    this.players = this.playerService.search(filterName);
  }
}
