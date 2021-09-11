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
        this.load.image('bird','assets/bird.png');
        this.load.image('pipe','assets/pipe.png');
    }

    function create(){

    }

    function update(){

    }