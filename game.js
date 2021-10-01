   
var config = {
    type:Phaser.AUTO,
    width : 800,
    height : 600,
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
        this.load.image('restart-button','assets/images/restart-button.png');
        this.load.image('gameover','assets/images/gameover.png');
    }
    function create(){
        platforms = this.physics.add.staticGroup();
       

        this.background = this.add.tileSprite(config.width/2, config.height/2, 800, 600, 'background')
        this.bird = this.physics.add.sprite(100, config.height / 2, 'bird');
        this.bird.setBounce(0.2);
        this.bird.setCollideWorldBounds(true);
        cursor = this.input.keyboard.createCursorKeys();

        this.anims.create({
            key : 'flap',
            frames : this.anims.generateFrameNumbers('bird',{start : 0 , end : 2  }),
            frameRate: 20,  
        });
        

    this.physics.add.collider(this.bird, platforms, this.birdHit, null, game)

   
    
    }
    

    function update(){
        this.background.tilePositionX += 1
        if(cursor.up.isDown)
        {
            this.bird.setVelocityY(-200);
        }
    }