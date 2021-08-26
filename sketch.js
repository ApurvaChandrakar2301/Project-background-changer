

var ball;

function setup() {
  createCanvas(400,400);

ball=createSprite(200,200,10,10)

ball.shapeColor="red"

}

function draw() 
{
  background(30);

  if (keyIsDown(LEFT_ARROW)){

    background("cyan")
    
    }
    
    if (keyIsDown(UP_ARROW)){

      background("blue")

      }

      if (keyIsDown(DOWN_ARROW)){

      background("yellow")
        
        }

        if (keyIsDown(RIGHT_ARROW)){

      background("lime")
          
          }


  if (keyIsDown(LEFT_ARROW)){

ball.position.x= ball.position.x -5

}
if (keyIsDown(UP_ARROW)){

  ball.position.y= ball.position.y -5
  
  }

  if (keyIsDown(DOWN_ARROW)){

    ball.position.y= ball.position.y +5
    
    }
    if (keyIsDown(RIGHT_ARROW)){

      ball.position.x= ball.position.x +5
      
      }

drawSprites();


}




