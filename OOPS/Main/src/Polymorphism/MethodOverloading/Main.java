package Polymorphism.MethodOverloading;

abstract class Media {
    String filename;
    Media(String filename){
        this.filename=filename;
    }

    abstract void play();
}

class Audio extends Media {
    Audio(String filename){
        super(filename);
    }
    void play() {
        System.out.println("Playing audio file: " + filename);
    }
    void displayDetails(int fileSize) {
        System.out.println("File Name: " + filename);
        System.out.println("File Size: " + fileSize + " bytes");
    }

} 
class Video extends Media {

    Video(String filename) {
        super(filename);
    }

    void play() {
        System.out.println("Playing video file: " + filename);
    }
    
   
    void displayDetails(int fileSize, int resolution) {
        System.out.println("File Name: " + filename);
        System.out.println("File Size: " + fileSize + " bytes");
        System.out.println("Resolution: " + resolution + "p");
    }
}
public class Main {
    public static void main(String[] args) {
        Audio audio=new Audio("Song.mp3");
        Video video=new Video("movie.mp4");
        audio.displayDetails(1024);
        video.displayDetails(1024, 2048);
    }
}
