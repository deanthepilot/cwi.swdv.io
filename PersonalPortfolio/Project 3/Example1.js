/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  Added GFS image
                  Added input handlers to make image move on keypress/mouse click

 
*/
class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"});
    }

    preload() {
        this.load.image('GFS','assets/GFS.png');
    }

    create() {
        this.text = this.add.text(1,1, "Welcome to Example 1!", { font:"18px Impact"});
        this.text = this.add.text(1,20, "Press 2 to go to stage 2", { font:"18px Impact"});
        this.text = this.add.text(1,40, "Press 3 to go to stage 3", { font:"18px Impact"});
        this.text = this.add.text(1,60, "Press 4 to go to stage 4", { font:"18px Impact"});
        this.text = this.add.text(1,80, "Press 5 to go to stage 5", { font:"18px Impact"});
        this.text = this.add.text(600,1, "Click left mouse to focus", { font:"18px Impact"});
        this.text = this.add.text(500,20, "Click anywhere and the image will move", { font:"18px Impact"});
        this.text = this.add.text(550,40, "Press A to move the image left", { font:"18px Impact"});
        this.text = this.add.text(550,60, "Press D to move the image right", { font:"18px Impact"});
        this.text = this.add.text(550,80, "Press P to make it add physics", { font:"18px Impact"});
        this.image = this.add.image(400,300,'GFS');

        this.input.keyboard.on('keyup_D', function(event){
            this.image.x += 10;
        },this);

        this.key_A = this.input.keyboard.addKey (Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown', function(event) {
            this.image.x = event.x;
            this.image.y = event.y;
        }, this);

        this.input.keyboard.on('keyup_P', function (event) {
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "GFS");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
        }, this);


        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "2") {
            this.scene.start("Example2");
        }
        if(e.key == "3") {
            this.scene.start("Example3");
        }
        if(e.key == "4") {
            this.scene.start("Example4");
        }
        if(e.key == "5") {
            this.scene.start("Example5");
        }
        }, this)
    }

    update(delta){
        if(this.key_A.isDown)
        this.image.x--;
    }
}