
//This is the function, Ran by the button reading "Count Down"

function go()
        {
        //This is a varible named count and defined as the number"10"
            var count = 10;
            var CountingDown = document.getElementById("CountingDown");
        //This is a for statement
            for(i=0; i < 11; i++) {
                //This is creating a countdown clock
                setTimeout(function() {
                    CountingDown.innerHTML = ("Countdown " + count + "<br>");

        //This is a If statement, asking if the countdown is less than or = to 5
                    if(count <= 5) {
                        //If the countdown is, indeed, less than or = to 5, the code will run to write this statement
                        CountingDown.innerHTML = ("Warning Less than ½ way to launch, time left = " + count + "<br>");
                    }
                    if(count <= 3) {
                        //If the countdown is, indeed, less than or = to 3, the code will run to write this statement
                        CountingDown.innerHTML = ("We have Launch in, <br> " + count + " <br> seconds");
                    }      if(count <= 0) {
                        //If the countdown is, indeed, less than or = to 0, the code will run to display this image
                        CountingDown.innerHTML="<img src=\"SpaceshipGIF.GIF\" width=\"270px\" height=\"270px\">";
                    }
                    //This subs the count by 1
                    count--;
        
                    }, 1000*i) 
            }
            //Once countdown hits 0, an alert reading blast off will be displayed
            setTimeout(function() {
                    alert("WE HAVE BLAST OFF!!! ----======TO-THE-MOON-======-----");
                    }, 11000)
                 //This function allows the js to read mp3 files
                 }
                    function sound(src) {
                     this.sound = document.createElement("audio");
                        this.sound.src = src;
          
                     this.play = function() {
                     this.sound.play();
                                            }
                 //This function, is a function onlick, playing sound us-lab-background.mp3
            
                  }
                   function PlayAudio1(){
                    mySound = new sound("us-lab-background.mp3");
                    mySound.play();
               
                   }

            
           