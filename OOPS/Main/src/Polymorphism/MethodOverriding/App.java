
abstract class MediaFile {
    String fileName;
    
    MediaFile(String fileName)
    {
      this.fileName = fileName;
    }
    
    abstract void play();
}

class AudioFile extends MediaFile {

    AudioFile(String fileName) {
        super(fileName);
    }

    void play() {
        System.out.println("Playing audio file: " + fileName);
      
    }
}

class VideoFile extends MediaFile {

    VideoFile(String fileName) {
        super(fileName);
    }


    void play() {
        System.out.println("Playing video file: " + fileName);
    }
}

public class App {
    public static void main(String[] args) throws Exception {
        AudioFile audioFile = new AudioFile("song.mp3");
        VideoFile videoFile = new VideoFile("movie.mp4");
        audioFile.play();
        videoFile.play();
    }
}
