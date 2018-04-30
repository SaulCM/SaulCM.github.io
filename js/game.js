/**
 * autor: Saul Caspa, UMSS
 * 
 */
var Game = {};


var player;
var group;
var scoreText;
var data = {
    r: -0.05,
    s: -0.0012,
    sx: 0.25,
    x: 100,
    y: 100
};
var random;

var dado1;
var dado2;
var dado3;
var dado4;
var dado5;

var d1=5;
var d2=2;
var d3=3;
var d4=2;
var d5=3;


Game.preload = function(){
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)

    this.load.image('fondo', 'assets/mesa.png');
    this.load.image('chart', 'assets/cart.png');
    this.load.image('cubilete','assets/cubilete.png')
    this.load.image('dado1', 'assets/dado1.png');
    this.load.image('dado2', 'assets/dado2.png');
    this.load.image('dado3', 'assets/dado3.png');
    this.load.image('dado4', 'assets/dado4.png');
    this.load.image('dado5', 'assets/dado5.png');
    this.load.image('dado6', 'assets/dado6.png');
    this.load.spritesheet('dados', 'assets/dados.png', { frameWidth: 42.76, frameHeight: 42});
};

Game.create = function(){
    this.add.image(320, 320, 'fondo');
    this.add.image(200, 400, 'chart');
    this.add.image(550,400,'cubilete');
   
        this.anims.create({
            key: 'roll1',
            frames: this.anims.generateFrameNumbers('dados', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: 2
        });
        this.anims.create({
            key: 'roll2',
            frames: this.anims.generateFrameNumbers('dados', { start: 0, end: 5 }),
            frameRate: 9,
            repeat: 2
        });
        this.anims.create({
            key: 'roll3',
            frames: this.anims.generateFrameNumbers('dados', { start: 0, end: 5 }),
            frameRate: 8,
            repeat: 2
        });

    //crearanimacionesdado();
    //lanzardados();
    dado1 = this.add.image(500,200,calculardado(d1),this);
    dado2 = this.add.image(550,200,calculardado(d2),this);
    dado3 = this.add.image(600,200,calculardado(d3),this);
    dado4 = this.add.image(525,250,calculardado(d4),this);
    dado5 = this.add.image(575,250,calculardado(d5),this);
        
    //Game.cargarimagenes(d1,d2,d3,d4,d5);
    this.input.on('pointerdown', function (pointer, gameObject) {
        
                dado1 = this.add.image(500,200,calculardado(Phaser.Math.Between(0,6)),this)
                dado2 = this.add.image(550,200,calculardado(Phaser.Math.Between(0,6)),this)
                dado3 = this.add.image(600,200,calculardado(Phaser.Math.Between(0,6)),this)
                dado4 = this.add.image(525,250,calculardado(Phaser.Math.Between(0,6)),this)
                dado5 = this.add.image(575,250,calculardado(Phaser.Math.Between(0,6)),this)
        
            }, this);

        //  this.setTimeout(function () {
        //    dado1 = this.add.image(500,200,'dado5').setInteractive();
        //   },2500);

       // this.input.on('gameobjectdown', function (pointer, gameObject) {
     //   gameObject.destroy();
   // });


           // this.add.sprite(400, 300, 'dados').play('roll');

           // Game.camera = this.cameras.main;
           // Game.camera.setBounds(0, 0, 20*32, 20*32);

    scoreText = this.add.text(40, 140, 'balas', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(150, 140, 'escalera', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(290, 140, 'cuadras', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(40, 260, 'tontos', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(165, 260, 'full', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(290, 260, 'quinas', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(40, 380, 'trenes', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(165, 380, 'poker', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(290, 380, 'senas', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(130, 540, 'grande1', {fontSize: '25px', fill: '#000' });
    scoreText = this.add.text(270, 540, 'grande2', {fontSize: '25px', fill: '#000' });

};


Game.update = function(){

    //if()
    //dado1 = this.add.sprite(500, 200,'dados').play('roll');

   
};
function roll()
{   dado1 = this.add.sprite(550, 150,'dados').play('roll1');
    dado2 = this.add.sprite(500, 200,'dados').play('roll2');
    dado3 = this.add.sprite(550, 200,'dados').play('roll3');
    dado4 = this.add.sprite(600, 200,'dados').play('roll1');
    dado5 = this.add.sprite(525, 250,'dados').play('roll2');
    dado6 = this.add.sprite(575, 250,'dados').play('roll3');

};
function cargarimagenes(da1,da2,da3,da4,da5)
{
    dado1 = this.add.image(500,200,da1).setInteractive();
    dado2 = this.add.image(550,200,da2).setInteractive();
    dado3 = this.add.image(600,200,da3).setInteractive();
    dado4 = this.add.image(525,250,da4).setInteractive();
    dado5 = this.add.image(575,250,da5).setInteractive();    
};
function calculardado(dd)
{  
  if(dd==1)
  {return 'dado1';}
  if(dd==2)
  {return 'dado2';}
  if(dd==3)
  {return 'dado3';}
  if(dd==4)
  {return 'dado4';}
  if(dd==5)
  {return 'dado5';}
  if(dd==6)
  {return 'dado6';}
}