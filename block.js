class block{


    constructor(x,y){

        var  options = {
     isStatic : true,
     restitution : 0,
     friction : 1
     
     }
     this.body = Bodies.rectangle(x, y, options);
             this.width = width;
             this.height = height;
                 World.add(world, this.body);
         }

         display(){

            Push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
            
            }
















}