/*Original Author: Joshua Novikoff
Date Created: 10/4/19
Version: 1.0
Date Last Modified: 10/4/19
Modified by: Joshua Novikoff
Modification log: Created script
                  Created collision detection with bricks

 
*/
export function detectCollision(ball, gameObject) {
  // check collision with paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
