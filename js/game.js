
/**
 * autor: Saul Caspa, UMSS
 * 
 */
var Game = {};


var fondo;
var scoreText;
var scoreText2;
var totalA;
var totalB;
var text;
var hoja;
var turnoA;
var turnoB;

var puntosA=0;
var puntosB=0;
var lanzamientos=30;
var textN;
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
    fondo = this.add.image(320, 320, 'fondo');

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
        textN=this.add.text(230, 20, 'Tiros restantes: '+lanzamientos, {fontSize: '20px', fill: '#000' });

    dado1 = this.add.image(300,400,calculardado(Phaser.Math.Between(1,6)),this)
    dado2 = this.add.image(350,400,calculardado(Phaser.Math.Between(1,6)),this)
    dado3 = this.add.image(400,400,calculardado(Phaser.Math.Between(1,6)),this)
    dado4 = this.add.image(325,450,calculardado(Phaser.Math.Between(1,6)),this)
    dado5 = this.add.image(375,450,calculardado(Phaser.Math.Between(1,6)),this)

    dadom1 = this.add.image(300,100,calculardado(Phaser.Math.Between(1,6)),this)
    dadom2 = this.add.image(350,100,calculardado(Phaser.Math.Between(1,6)),this)
    dadom3 = this.add.image(400,100,calculardado(Phaser.Math.Between(1,6)),this)
    dadom4 = this.add.image(325,150,calculardado(Phaser.Math.Between(1,6)),this)
    dadom5 = this.add.image(375,150,calculardado(Phaser.Math.Between(1,6)),this)
        
    scoreText = this.add.text(50, 160, 'Contrincante', {fontSize: '20px', fill: '#000' });
    scoreText2 = this.add.text(50, 310, 'Tu puntuacion', {fontSize: '20px', fill: '#000' });

    turnoB = this.add.text(450,400,'TU TURNO', { fontFamily: "Arial Black", fontSize: 30, color: "#c51b7d" });
    turnoB.setShadow(2, 2, "#333333", 2, true, true);
        
    turnoA = this.add.text(450,100,'TURNO PC', { fontFamily: "Arial Black", fontSize: 30, color: "#c51b7d" });
    turnoA.setShadow(2, 2, "#333333", 2, true, true); 
    turnoA.setVisible(false);

    this.input.on('pointerdown', function (pointer) {

        d1 = Phaser.Math.Between(1,6);
        d2 = Phaser.Math.Between(1,6);
        d3 = Phaser.Math.Between(1,6);
        d4 = Phaser.Math.Between(1,6);
        d5 = Phaser.Math.Between(1,6);
        dm1 = Phaser.Math.Between(1,6);
        dm2 = Phaser.Math.Between(1,6);
        dm3 = Phaser.Math.Between(1,6);
        dm4 = Phaser.Math.Between(1,6);
        dm5 = Phaser.Math.Between(1,6);

        dado1 = this.add.image(300,400,calculardado(d1),this)
        dado2 = this.add.image(350,400,calculardado(d2),this)
        dado3 = this.add.image(400,400,calculardado(d3),this)
        dado4 = this.add.image(325,450,calculardado(d4),this)
        dado5 = this.add.image(375,450,calculardado(d5),this)
        this.time.delayedCall(1000,function(){
            turnoB.setVisible(false);
            turnoA.setVisible(true);
            dadom1 = this.add.image(300,100,calculardado(dm1),this)
            dadom2 = this.add.image(350,100,calculardado(dm2),this)
            dadom3 = this.add.image(400,100,calculardado(dm3),this)
            dadom4 = this.add.image(325,150,calculardado(dm4),this)
            dadom5 = this.add.image(375,150,calculardado(dm5),this)    
        },[],this);

        lanzamientos-=1;
        textN.setText('Tiros restantes: '+lanzamientos);
        hoja = this.add.image(120,300,'hojadepapel');
        
        this.add.text(50,160, 'Contrincante', {fontSize: '20px', fill: '#000' });
        this.add.text(50,310,'Tu puntuacion' , {fontSize: '20px', fill: '#000' });
        this.time.delayedCall(300, function(){
        this.add.text(50, 340, calcularPuntos(d1,d2,d3,d4,d5,1), {fontSize: '20px', fill: '#000' })
            },[],this)
        scoreText2 = this.add.text(50, 370, 'Total = '+puntosB, {fontSize: '20px', fill: '#000' })
        scoreText = this.add.text(50, 220, 'Total = '+puntosA, {fontSize: '20px', fill: '#000' });

        this.time.delayedCall(1500,function(){
            scoreText.setText(' ')
            this.add.text(60, 190, calcularPuntos(dm1,dm2,dm3,dm4,dm5,0), {fontSize: '20px', fill: '#000' })
            scoreText = this.add.text(50, 220, 'Total = '+puntosA, {fontSize: '20px', fill: '#000' })
            turnoB.setVisible(true);
            turnoA.setVisible(false); 
            },[],this)     

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

    if(lanzamientos==0)
    {
          if(puntosA>puntosB)
        {
            this.add.image(320, 320, 'fondo');
            turnoA = this.add.text(100,300,'GANO PC CON '+puntosA+' PUNTOS', { fontFamily: "Arial Black", fontSize: 40, color: "#c51b7d" });
            turnoA.setShadow(2, 2, "#333333", 2, true, true); 
        }
        if(puntosB>puntosA)
        {
            this.add.image(320, 320, 'fondo');
            turnoA = this.add.text(100,300,'GANASTE CON '+puntosB+' PUNTOS', { fontFamily: "Arial Black", fontSize: 40, color: "#c51b7d" });
            turnoA.setShadow(2, 2, "#333333", 2, true, true); 
        }
        if(puntosB==puntosA)
        {
            this.add.image(320, 320, 'fondo');
            turnoA = this.add.text(100,300,'EMPATE CON '+puntosB+' PUNTOS', { fontFamily: "Arial Black", fontSize: 40, color: "#c51b7d" });
            turnoA.setShadow(2, 2, "#333333", 2, true, true); 
        }
    }
    if(lanzamientos==-1)
    {
        this.stopInputEvents();
    }
    
    };

function roll()
{   dado1 = this.add.sprite(550, 150,'dados').play('roll1');
    dado2 = this.add.sprite(500, 200,'dados').play('roll2');
    dado3 = this.add.sprite(550, 200,'dados').play('roll3');
    dado4 = this.add.sprite(600, 200,'dados').play('roll1');
    dado5 = this.add.sprite(525, 250,'dados').play('roll2');
    dado6 = this.add.sprite(575, 250,'dados').play('roll3');

};
function calcularPuntos(dd1,dd2,dd3,dd4,dd5,jugador)
{  var punt=[dd1,dd2,dd3,dd4,dd5];
    var c1=0;
    var c2=0;
    var c3=0;
    var c4=0;
    var c5=0;
    var c6=0;
    var full=0;
    var esfull=0;
    var res='+0 puntos';
    
    for(i=0;i<punt.length;i++)
    {   if(punt[i]==1){c1+=1;if(c1==3){full=1;}}
        if(punt[i]==2){c2+=1;if(c2==3){full=2;}}
        if(punt[i]==3){c3+=1;if(c3==3){full=3;}}
        if(punt[i]==4){c4+=1;if(c4==3){full=4;}}
        if(punt[i]==5){c5+=1;if(c5==3){full=5;}}
        if(punt[i]==6){c6+=1;if(c6==3){full=6;}}
    }
    if(c1==1&&c2==1&&c3==1&&c4==1&&c5==1)
        {res='+20 puntos';
        if(jugador==0){puntosA+=20}if(jugador==1){puntosB+=20}}
    if(c2==1&&c3==1&&c4==1&&c5==1&&c6==1){
        res='+20 puntos';
        if(jugador==0){puntosA+=20}if(jugador==1){puntosB+=20}}
    if(full!=0)
    {for(i=0;i<punt.length;i++)
        {   if(punt[i]==esfull){esfull=10;}
            if(punt[i]!=full&&esfull==0){esfull=punt[i]}        
        }
    }
    if(c1==4||c2==4||c3==4||c4==4||c5==4||c6==4){res= '+40 puntos';
        if(jugador==0){puntosA+=40}if(jugador==1){puntosB+=40} }
    if(esfull==10){res= '+30 puntos';
        if(jugador==0){puntosA+=30}if(jugador==1){puntosB+=30}}
    if(c1==5||c2==5||c3==5||c4==5||c5==5||c6==5){res= '+50 puntos'; 
        if(jugador==0){puntosA+=50}if(jugador==1){puntosB+=50}}

    return res;
}

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

var config = {
    type: Phaser.AUTO,
    width: 20*32,
    height: 20*32,
    parent: 'game',
    scene: [Game]
};

var game = new Phaser.Game(config);


