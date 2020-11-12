/*Original Author: Joshua Novikoff
Date Created: 10/11/19
Version: 1.0
Date Last Modified: 10/11/19
Modified by: Joshua Novikoff
Modification log: Created script
                  added audio

 
*/
class Example3 extends Phaser.Scene{
    constructor() {
        super({key:"Example3"});
    }
    preload(){
        this.load.audio('test', ['assets/applause.mp3']);
    }

    create() {
        this.text = this.add.text(1,1, "Press L to turn loop on or off", { font:"18px Impact"});
        this.text = this.add.text(1,20, "Press P to play or pause audio", { font:"18px Impact"}); 
        this.soundFX = this.sound.add("test", { loop: "true"});
        this.soundFX.play();
        this.soundFX.rate = 0.75;

        this.input.keyboard.on("keydown_L", function(e){
            this.soundFX.loop = !this.soundFX.loop;
            if(this.soundFX.loop) this.soundFX.play();
        },this);

        this.input.keyboard.on("keydown_P", function(e) {
            if(this.soundFX.isPlaying) this.soundFX.pause();
            else this.soundFX.resume();
        }, this);
    }
}