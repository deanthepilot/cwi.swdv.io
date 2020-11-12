/*Original Author: Joshua Novikoff
Date Created: 10/4/19
Version: 1.0
Date Last Modified: 10/4/19
Modified by: Joshua Novikoff
Modification log: Created script
                  Created input commands

 
*/
export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          break;

        default:
        // do nothing
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;

        default:
        // do nothing
      }
    });
  }
}
