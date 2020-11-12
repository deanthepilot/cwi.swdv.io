/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  Added tween for an animation of the text

 
*/
class Example2 extends Phaser.Scene{
    constructor() {
        super({key:"Example2"});
    }

    create(){
        this.text = this.add.text(0,0, "Welcome to Example2!", { font:"40px Impact"});
        this.text1 = this.add.text(1,50, "Press 1 to go back stage 1", { font:"18px Impact"});
        this.text2 = this.add.text(1,70, "Press 4 to go to stage 4", { font:"18px Impact"});
        this.text3 = this.add.text(1,90, "Press 5 to go to stage 5", { font:"18px Impact"});

        var tween = this.tweens.add({
            targets: this.text,
            x:200,
            y:250,
            duration:2000,
            ease:"Elastic",
            easeParams:[1.5,0.5],
            delay:1000,
            yoyo: true,
            onComplete:function(src,tgt) {
                tgt[0].x = 0;
                tgt[0].y = 0;
                tgt[0].setColor("Red");
            }
        },this);

        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key_4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.key_5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
    }

    update(delta)
    {
        if(this.key_1.isDown){
        this.scene.start("Example1");
        }
        if(this.key_4.isDown) {
            this.scene.start("Example4");
        }
        if(this.key_5.isDown) {
            this.scene.start("Example5");
        }
    }
}