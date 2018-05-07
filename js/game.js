
/**
 * autor: Saul Caspa, UMSS
 * 
 */
var Game = {};



var scoreText;
var scoreText2;
var text;
var hoja;

var puntos=0;
var puntosA;
var puntosB;
var dado1;
var dado2;
var dado3;
var dado4;
var dado5;

var dadom1;
var dadom2;
var dadom3;
var dadom4;
var dadom5;

var d1=5;
var d2=2;
var d3=3;
var d4=2;
var d5=3;

var dm1=1;
var dm2=4;
var dm3=3;
var dm4=2;
var dm5=3;


Game.preload = function(){
    Game.scene = this; // Handy reference to the scene (alternative to `this` binding)

    this.load.image('fondo', 'assets/mesa.png');
    this.load.image('hojadepapel', 'assets/hojadepapel.png');
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

    //this.add.image(200, 400, 'chart');
   // this.add.image(550,400,'cubilete').setInteractive;
   
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
        this.anims.create({
            key: 'roll',
            frames: [
                { key: 'dado5' },
                { key: 'dado2' },
                { key: 'dado4' },
                { key: 'dado3' },
                { key: 'dado1' },
                { key: 'dado6', duration: 20 }
            ],
            frameRate: 8,
            repeat: 3
        });
        hoja = this.add.image(120,300,'hojadepapel');
    //crearanimacionesdado();
    //lanzardados();
    dado1 = this.add.image(300,400,calculardado(Phaser.Math.Between(0,5)),this)
    dado2 = this.add.image(350,400,calculardado(Phaser.Math.Between(0,5)),this)
    dado3 = this.add.image(400,400,calculardado(Phaser.Math.Between(0,5)),this)
    dado4 = this.add.image(325,450,calculardado(Phaser.Math.Between(0,5)),this)
    dado5 = this.add.image(375,450,calculardado(Phaser.Math.Between(0,5)),this)


    dadom1 = this.add.image(300,100,calculardado(Phaser.Math.Between(0,5)),this)
    dadom2 = this.add.image(350,100,calculardado(Phaser.Math.Between(0,5)),this)
    dadom3 = this.add.image(400,100,calculardado(Phaser.Math.Between(0,5)),this)
    dadom4 = this.add.image(325,150,calculardado(Phaser.Math.Between(0,5)),this)
    dadom5 = this.add.image(375,150,calculardado(Phaser.Math.Between(0,5)),this)
        
    scoreText = this.add.text(60, 160, 'Contrincante', {fontSize: '20px', fill: '#000' });
    scoreText2 = this.add.text(50, 280, 'Tu puntuacion', {fontSize: '20px', fill: '#000' });
    //this.scoreText.setText(60, 160, 'Caasfaa', {fontSize: '20px', fill: '#000' });
    //Game.cargarimagenes(d1,d2,d3,d4,d5);
    this.input.on('pointerdown', function (pointer) {

        d1 = Phaser.Math.Between(0,5);
        d2 = Phaser.Math.Between(0,5);
        d3 = Phaser.Math.Between(0,5);
        d4 = Phaser.Math.Between(0,5);
        d5 = Phaser.Math.Between(0,5);
        dm1 = Phaser.Math.Between(0,5);
        dm2 = Phaser.Math.Between(0,5);
        dm3 = Phaser.Math.Between(0,5);
        dm4 = Phaser.Math.Between(0,5);
        dm5 = Phaser.Math.Between(0,5);

        dado1 = this.add.image(300,400,calculardado(d1),this)
        dado2 = this.add.image(350,400,calculardado(d2),this)
        dado3 = this.add.image(400,400,calculardado(d3),this)
        dado4 = this.add.image(325,450,calculardado(d4),this)
        dado5 = this.add.image(375,450,calculardado(d5),this)

        dadom1 = this.add.image(300,100,calculardado(dm1),this)
        dadom2 = this.add.image(350,100,calculardado(dm2),this)
        dadom3 = this.add.image(400,100,calculardado(dm3),this)
        dadom4 = this.add.image(325,150,calculardado(dm4),this)
        dadom5 = this.add.image(375,150,calculardado(dm5),this)

        
        hoja = this.add.image(120,300,'hojadepapel');
        scoreText = this.add.text(60,160, 'Contrincante', {fontSize: '20px', fill: '#000' });
        scoreText2 = this.add.text(50,280,'Tu puntuacion' , {fontSize: '20px', fill: '#000' });
        scoreText = this.add.text(60, 190, calcularPuntos(dm1,dm2,dm3,dm4,dm5), {fontSize: '20px', fill: '#000' });
        scoreText2 = this.add.text(50, 310, calcularPuntos(d1,d2,d3,d4,d5), {fontSize: '20px', fill: '#000' });
        
        //actualizarhoja();
            
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

 
    };  

     Game.update = function(){

    //if()
    //dado1 = this.add.sprite(500, 200,'dados').play('roll');

   
    };
       function actualizarhoja()
       { hoja = this.add.image(120,300,'hojadepapel');
      scoreText = this.add.text(60, 160, 'Contria', {fontSize: '20px', fill: '#000' });
       scoreText2 = this.add.text(50, 280, 'Tu pasd', {fontSize: '20px', fill: '#000' });

    };
     function startInputEvents ()
    {
         this.input.on('gameobjectover', this.onIconOver, this);
         this.input.on('gameobjectout', this.onIconOut, this);
         this.input.on('gameobjectdown', this.onIconDown, this);

    //  Cheat mode :)

             this.input.keyboard.on('keydown_M', function () 
            {

              this.puntos++;
              this.scoreText.setText(60, 160, 'Cas', {fontSize: '20px', fill: '#000' });

            }, this);

            this.input.keyboard.on('keydown_X', function ()
            {
                this.puntos--;
                this.scoreText2.setText(60, 160, 'Casd', {fontSize: '20px', fill: '#000' });

            }, this);
    };
function roll()
{   dado1 = this.add.sprite(550, 150,'dados').play('roll1');
    dado2 = this.add.sprite(500, 200,'dados').play('roll2');
    dado3 = this.add.sprite(550, 200,'dados').play('roll3');
    dado4 = this.add.sprite(600, 200,'dados').play('roll1');
    dado5 = this.add.sprite(525, 250,'dados').play('roll2');
    dado6 = this.add.sprite(575, 250,'dados').play('roll3');

};
function calcularPuntos(dd1,dd2,dd3,dd4,dd5)
{  var punt=[dd1,dd2,dd3,dd4,dd5];
    var c1=0;
    var c2=0;
    var c3=0;
    var c4=0;
    var c5=0;
    var c6=0;
    for(i=0;i<punt.length;i++)
    {   if(punt[i]==0){c1+=1; }
        if(punt[i]==1){c2+=1; }
        if(punt[i]==2){c3+=1; }
        if(punt[i]==3){c4+=1; }
        if(punt[i]==4){c5+=1; }
        if(punt[i]==5){c6+=1; }
    }
    if(c1==2||c2==2||c3==2||c4==2||c5==2||c6==2){return '+20 puntos'; }
    if(c1==3||c2==3||c3==3||c4==3||c5==3||c6==3){return '+30 puntos'; }
    if(c1==4||c2==4||c3==4||c4==4||c5==4||c6==4){return '+40 puntos'; }
    if(c1==5||c2==5||c3==5||c4==5||c5==5||c6==5){return '+50 puntos'; }
    

}

function calculardado(dd)
{  
  if(dd==0)
  {return 'dado1';}
  if(dd==1)
  {return 'dado2';}
  if(dd==2)
  {return 'dado3';}
  if(dd==3)
  {return 'dado4';}
  if(dd==4)
  {return 'dado5';}
  if(dd==5)
  {return 'dado6';}
}
var config = {
    type: Phaser.AUTO,
    width: 20*32,
    height: 20*32,
    parent: 'game',
    scene: [Game]
};

var game = new Phaser.Game(config);


