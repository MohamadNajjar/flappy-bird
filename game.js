   
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
var game = new Phaser.Game(config)

    function preload(){
     this.load.image('background','assets/images/background.png');
        this.load.spritesheet('bird', 'assets/images/bird.png', {
            frameWidth: 34,
            frameHeight: 24
        })
        this.load.image('pipe-green-top','assets/images/pipe-green-top.png');
        this.load.image('pipe-green-bottom','assets/images/pipe-green-bottom.png');
        this.load.image('number1','assets/images/number1.png');
        this.load.image('number2','assets/images/number2.png');
        this.load.image('number3','assets/images/number3.png');
        this.load.image('number4','assets/images/number4.png');
        this.load.image('number5','assets/images/number5.png');
        this.load.image('number6','assets/images/number6.png');
        this.load.image('number7','assets/images/number7.png');
        this.load.image('number8','assets/images/number8.png');
        this.load.image('number9','assets/images/number9.png');
        this.load.image('ground', 'assets/images/ground.png',)
        this.load.image('restart-button','assets/images/restart-button.png');
        this.load.image('gameover','assets/images/gameover.png');
    }
    
    function create(){
        this.background = this.add.image(200, 90, 'background');
         this.ground = this.add.tileSprite(145,700, config.width, config.height, 'ground');
        this.bird = this.physics.add.sprite(config.width / 2, config.height / 2, 'bird');
        
        
       
    }

    function update(){
        this.ground.tilePositionX -= 1
    }