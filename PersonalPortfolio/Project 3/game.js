/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  added basics for calling game

 
*/
var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [ Example1, Example2, Example3, Example4, Example5 ]
};

var game = new Phaser.Game(config);