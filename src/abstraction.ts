// 1. Using interface

interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}

class MusicPlayer implements MediaPlayer{
    play(){
        console.log("A music is being played");
    }
    pause(){
        console.log("Pause the music");
    }
    stop(){
       console.log("Stop!!");
    }
}

const mezbaPlayer=new MusicPlayer();
mezbaPlayer.pause();


// 2. Using Abstract Class

abstract class Media{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}

class MPlayer extends Media{
    play(){
        console.log("A music is being played");
    }
    pause(){
        console.log("Pause the music");
    }
    stop(){
       console.log("Stop!!");
    }
}

const mezbaPlayer1=new MusicPlayer();
mezbaPlayer1.pause();





