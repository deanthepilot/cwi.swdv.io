/*Original Author: Joshua Novikoff
Date Created: 10/4/19
Version: 1.0
Date Last Modified: 10/4/19
Modified by: Joshua Novikoff
Modification log: Created script
                  Created bricks

 
*/
import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;

    this.width = 80;

    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
