/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  added photo and animation

 
*/
class Example4 extends Phaser.Scene{
    constructor() {
        super({key:"Example4"});
    }
    preload() {
        this.load.image('hamster', 'assets/hamster.png');
    }

    create() {
        this.text = this.add.text(550,1, "Press 1 to go back stage 1", { font:"18px Impact"});
        this.text = this.add.text(550,20, "Press 2 to go back stage 2", { font:"18px Impact"});
        this.text = this.add.text(550,40, "Press 5 to go back stage 5", { font:"18px Impact"});
        this.image = this.add.image(80,80,'hamster');

        var tween = this.tweens.add ({
            targets:this.image,
            x:400,
            y:250,
            duration:3000,
            ease:"cubic",
            easeParams:[1.5,0.5],
            repeat: -1,
            yoyo: true,
            delay:500
        },this);

        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key_5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        this.key_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    }
    update(delta)
    {
        if(this.key_1.isDown)
        this.scene.start("Example1");
        if(this.key_5.isDown) {
            this.scene.start("Example5");
        }
        if(this.key_2.isDown) {
            this.scene.start("Example2");
        }
    }

}