// const.js

const cw = $(window).width();
const ch = $(window).height();
const playerScale = 0.3;
const scale = 0.6;
const monsterScale = 0.7;

var subjectN = 8;

// 課目類別名稱及生成座標
var subject_name = ['語文', '自然科學', '綜合活動', '數學', '科技', '健康與體育', '社會', '藝術'];
var subject_xy = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];

// 取得亂數函式
const getRandom = (range, start) =>{
    return Math.floor(Math.random() * (range - start + 1)) + start;
};



window.addEventListener('keypress', function(e) {
  var keyID = e.code;

  if (keyID === 'KeyW') {
   

  }
  if (keyID === 'KeyD') {
    
  }
  if (keyID === 'KeyS') {
    
  }
  if (keyID === 'KeyA') {
    
  }
  
  
  if (keyID == 'Enter'){
      // console.log("Enter");
      // $("#tt").click();
      // //$('#myModal').modal('show');
      // console.log("Hello"); //$('#exampleModal').modal('show');
      // $("#subject_name").text(subject_name[1]);
  }
    
  // 按 Q 即丟棄已選擇科目
  if (keyID == 'KeyQ')
  {
    console.log("Enter");
      $("#tt").click();
      //$('#myModal').modal('show');
      console.log("Hello"); //$('#exampleModal').modal('show');
      $("#subject_name").text(subject_name[1]);
  }
}, false);



// playerSelect.js 選取角色

const playerSelect = {
    key: 'playerSelect',
    preload: function(){
        
    },
    create: function(){
    
    },
    update: function(){
      
      
    }
}



// subjectSelect.js
const subjectSelect = {
    key: 'subjectSelect',
    preload: function(){
      
        // 預先載入需要資源
        
        
        this.load.image('bg2', 'image/Background/jungle-background-clipart.jpg');
        
        this.load.image('player', 'image/Character/afro-hair.png');
        this.load.image('beans', 'image/ClassGroup/dna.png');
    },
    create: function(){

        
        this.bg2 = this.add.sprite(cw/2,ch/2, 'bg2');

        this.player = this.add.sprite(150, 150, 'player');
        //this.player = this.physics.add.sprite(150, 150, 'player');
        // 角色落地的時候會彈跳
        //this.player.setCollideWorldBounds(true); //角色邊界限制
        //this.player.setBounce(1); //設定彈跳值
        this.player.setScale(playerScale);
      
      
        for(var i = 0 ; i < subjectN ; i++)
        {
            let tempX = getRandom(cw, 0-(cw / 2 ));
            let tempY = getRandom(ch, 0-(ch / 2));
          
            subject_xy[i].x = tempX;
            subject_xy[i].y = tempY;
            console.log(subject_xy[i].x, subject_xy[i].y, tempX, tempY);
            
            
        }
        
        this.beans = this.add.sprite(subject_xy[0].x, subject_xy[0].y, 'beans');
        
        
        //this.add.text(cw/2,ch/2, subject_name[2], {color: "#123455", fontSize:'60px'});
    },
    update: function(){
        let keyboard = this.input.keyboard.createCursorKeys();
        if(keyboard.right.isDown)
        {
            this.player.setVelocityX(160);
            console.log("右邊");
        }
      
        if(keyboard.left.isDown)
        {
            this.player.setVelocityX(-160);
            console.log("左邊");
        }
        if(keyboard.up.isDown)
        {
            this.player.setVelocityY(-160);
            console.log("上面");
        }
        if(keyboard.down.isDown)
        {
            this.player.setVelocityY(160);
            console.log("下面");
        }
//         if(keyboard.esc.isDown)
//         {
//             this.player.setVelocityX(0);
//             this.player.setVelocityY(0);
//             console.log("下面");
//         }
    }
}


// index.js

// $( window ).resize(function() {
//   $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
// });

const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 850
            },
            // debug: true,
        },
    },
    scene: [
        subjectSelect,
    ]
}

const game = new Phaser.Game(config);

