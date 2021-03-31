// modulo dei controlli audio 
var audioporn = document.getElementById('porn');

var volumeUp = document.getElementById('volume-up');

var volumeDown = document.getElementById('volume-down');

volumeUp.addEventListener('click', function(){
    volumeDown.style.display = 'block';
    volumeUp.style.display = 'none';

    pauseAudioP();
    
    function pauseAudioP() {
        audioporn.pause();
    }
});

volumeDown.addEventListener('click', function(){
    volumeUp.style.display = 'block';
    volumeDown.style.display = 'none'
    playAudioP();
    
    function playAudioP() {
        audioporn.loop = true;
        audioporn.play();
    }
});

// fa iniziare il gioco
function game(){

    var arena = document.getElementById("arena");

    arena.style.display = "block";

    var startGame = document.getElementById("start-game");

    startGame.style.display = "none";

    timer();

    // fa seguire il cursore
    let ammo = document.getElementById('ammo');
    const onMouseMove = (e) =>{
      ammo.style.left = e.pageX + 'px';      
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    // genera lo sparo del proiettile e il suono
    document.addEventListener('click', function(){
        var bullet = document.getElementById('proiettile');
     
        bullet.classList.remove("animate"); 
    
        // trigghera il DOM e fa ripartire l'animazione
        void bullet.offsetWidth; 
    
        bullet.classList.add("animate");
    
        
        var audio = document.getElementById('shot');
    
        playAudio();
    
        function playAudio() {
            audio.play();
        }
        
    });
    
    // shot kill della rana + attribuzione del punteggio * 1kill
    var frogList = document.getElementsByClassName('frogs');
    
    var score = 0;
    
    var animationList = document.getElementsByClassName('frog');
    
    var punteggio = document.getElementById("score");
    
    for (var i = 0; i < frogList.length; i++) {
        var frog = frogList[i];
    
        frog.addEventListener("click", function(){
    
            var selected = this;
    
            var killed = this.previousElementSibling;
    
            var fuori = killed.parentElement;
    
            selected.style.display = "none";

            if (selected.style.display = "none"){
                score = score += 10;
    
                killed.style.display = "block";
    
                fuori.classList.remove("frog");

                var audioFrog = document.getElementById("ahia");

                playAudioFrog();
    
                function playAudioFrog() {
                    audioFrog.play();
                }
                
            }
    
            punteggio.innerHTML = score;
    
        });    
        
    }
    
    var perso = document.getElementById("perso");

    /**
     * questa funzione stabilisce un timer di 15 secondi entro il quale per vincere bisogna raggiungere un punteggio di 80
     */
    function timer() {
        setTimeout(function(){
            if (score < 80){
                arena.style.display = "none";
                perso.style.display = "flex";
    
                pauseAudioP();
    
                function pauseAudioP() {
                    audioporn.pause();
                }
    
                var audioHartman = document.getElementById('hartman');
    
                playAudioH();
    
                function playAudioH() {
                    audioHartman.play();
                }

                var btn = document.getElementById("btn");

                btn.addEventListener("click", function(){
                    arena.style.display = "block";
                    perso.style.display = "none";
                    location.reload();
                });

            } else {
                var vinto = document.getElementById("vinto");
                arena.style.display = "none";
                vinto.style.display = "block";
            }
    
        }, 15000);
        
      }

}