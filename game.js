var config = {
    type:Phaser.AUTO,
    width : 288,
    height : 512,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene:{
        preload:preload,
        create:create,
        update:update,
    }
};
var game = new Phaser.Game(config);
    function preload(){
        this.load.image('background','assets/background.png');
        this.load.image('message-initial','assets/message-initial.png');
        this.load.image('bird','assets/bird.png');
        this.load.image('pipe-green-top','assets/pipe-green-top.png');
        this.load.image('pipe-green-bottom','assets/pipe-green-bottom.png');
        this.load.image('number1','assets/number1.png');
        this.load.image('number2','assets/number2.png');
        this.load.image('number3','assets/number3.png');
        this.load.image('number4','assets/number4.png');
        this.load.image('number5','assets/number5.png');
        this.load.image('number6','assets/number6.png');
        this.load.image('number7','assets/number7.png');
        this.load.image('number8','assets/number8.png');
        this.load.image('number9','assets/number9.png');
        this.load.image('gameover','assets/gameover.png');
        this.load.image('restart-button','assets/restart-button.png');
    }

    function create(){
        this.add.image(144,256,'background');
    }

    function update(){

    }