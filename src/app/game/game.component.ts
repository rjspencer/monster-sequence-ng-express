import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  runPregame() {
    // If only one player, does player want to wait?
    //   Start wait countdown
    // Multiple players/single player does not want to wait/wait countdown complete
    // Display game instructions
    // Start game countdown
    // Then start Game
  }

  runGame() {
    // Flash all lights to alert players to game start 
    // Create monster/light pin array 
    // initialize empty light up sequence
    // while at least one player is still active 
    //   Copy random monster to end of sequence
    //   play light sequence 
    //   prompt user to repeat sequence 
    //   if over time limit or incorrect sequence entered 
    //     player marked inactive
    //     player score recorded
    //   loop 
    // No players left, game completes
    // show leaderboard
  }

  showLeaderboard() {

  }

}
