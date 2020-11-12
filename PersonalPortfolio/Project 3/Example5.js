/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  added photo and animation

 
*/
class Example5 extends Phaser.Scene{
    constructor() {
        super({key:"Example5"});
    }
    preload() {
        this.load.image('mushroom', 'assets/mushroom.png');
    }

    create() {
        this.image = this.add.image(400, 300,'mushroom')
        this.text = this.add.text(1,1, "Press 1 to go back to to stage 1", { font:"18px Impact"});
        this.text = this.add.text(1,20, "Press 2 to go to stage 2", { font:"18px Impact"});
        this.text = this.add.text(1,40, "Press 4 to go to stage 4", { font:"18px Impact"});        
        this.text = this.add.text(1,60, "Press W to move image up", { font:"18px Impact"});
        this.text = this.add.text(1,80, "Press A to move image left", { font:"18px Impact"});
        this.text = this.add.text(1,100, "Press S to move image down", { font:"18px Impact"});
        this.text = this.add.text(1,120, "Press D to move image right", { font:"18px Impact"});
        this.text = this.add.text(1,140, "Press P to make it add physics", { font:"18px Impact"});

        this.key_W = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.W);

        this.key_S = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.S);

        this.key_A = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.A);

        this.key_D = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.D);

        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);

        this.key_4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);

        this.key_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);

        this.input.keyboard.on('keyup_P', function (event) {
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "mushroom");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
        }, this);
    }

    update(delta){        
        if(this.key_W.isDown)
            this.image.y--;
        if(this.key_S.isDown)
            this.image.y++;
        if(this.key_A.isDown)
            this.image.x--;
        if(this.key_D.isDown)
            this.image.x++;
        if(this.key_1.isDown)
            this.scene.start("Example1")
        if(this.key_4.isDown) {
            this.scene.start("Example4");
        }
        if(this.key_2.isDown) {
            this.scene.start("Example2");
        }
    }
}