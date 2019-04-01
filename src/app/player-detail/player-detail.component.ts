import { Component, OnInit } from '@angular/core';
import { Player } from '../players/player';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {

  player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.findPlayer();
  }

  findPlayer() {
    const license = +this.route.snapshot.paramMap.get('license');
    this.player = this.playerService.findByLicence(license);
  }
}
