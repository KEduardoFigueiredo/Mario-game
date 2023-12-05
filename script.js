mario = document.querySelector('.mario');
pipe = document.querySelector('.pipe');
pipe2 = document.querySelector('.pipe2');
grass = document.querySelector('.grass');
textStart = document.querySelector('text-start')
audioStart = new Audio('./audio/theme.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')
floor1 = document.querySelector('.floor-1')
floor2 = document.querySelector('.floor-2')
floor3 = document.querySelector('.floor-3')
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;
document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
      jump();
    }
  });
  document.addEventListener("mousedown", (e) => {
    if ((e.code === "Right")){
      jump();
    }
  });
 


/*================ Função Start ===================*/ 

const start = () => {
    document.getElementById("bows").style.display = "none"
    document.getElementById("bixin").style.display = "none"
    document.getElementById("text-start").style.color = "rgb(250, 236, 236)";
    document.getElementById("bows").style.color = "rgb(250, 236, 236)";
    document.getElementById("bixin").style.color = "rgb(250, 236, 236)";
    function pipeAnimation(){
        pipe.classList.add('pipe-animation');
    }setInterval(pipeAnimation, 500)

    


    mario.src = 'https://s5.gifyu.com/images/SRVpj.gif';
    mario.style.width = '100px';
    mario.style.marginLeft = '50px';

   function grassAnimation(){
        grass.classList.add('grass-animation');
            }setInterval(grassAnimation, 5000);


    function floorAnimation1(){
        floor1.classList.add('floor-animation-1');
            }setInterval(floorAnimation1, 100000);

    function floorAnimation2(){
        floor2.classList.add('floor-animation-2');
            }setInterval(floorAnimation2, 100000);
                           
    function floorAnimation3(){
        floor3.classList.add('floor-animation-3');
            }setInterval(floorAnimation3, 100000); 

            function pipe2Animation(){
              pipe2.classList.add('pipe2-animation');
          }setInterval(pipe2Animation, 50000)
        
    audioStart.play();
}

document.addEventListener('keydown', start);






  









/*================ Função Pulo ===================*/ 

//const jump = () => {
 //   mario.classList.add('jump');
//
 //   setTimeout(() => {
 //       mario.classList.remove('jump');
 //  },1000); 
//}
//function jumpAnimation(){
  //jump.classList('jump')
//}setInterval(jumpAnimation, 104)
//document.addEventListener('keydown', jump);
function jump() {
    if (!mario.classList.contains("jump")) {
      mario.classList.add("jump");
      alreadyJump = true;
  
      setTimeout(() => {
       mario.classList.remove("jump");
       alreadyJump = false;
     }, 900);
  }
 }






/*================ Código para acabar o jogo ===================*/ 

const checkGameOver = setInterval(() => {

  


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const grassPosition = grass.offsetLeft;
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;

   
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
         

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
           

            mario.src = 'https://images.uncyc.org/pt/a/a5/Mario_Death.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '60px';

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;

         

            document.getElementById("text-start").style.color = "black";
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";


            function stopAudioStart(){
                audioStart.pause();
                }stopAudioStart();

            audioGameOver.play();

            function stopAudio(){
                audioGameOver.pause();
                }setTimeout(stopAudio, 8000);

            clearInterval(checkGameOver);
    
            //count++;
          //  score.innerHTML = `SCORE: ${count}`;

         
            
         }
}, 10);