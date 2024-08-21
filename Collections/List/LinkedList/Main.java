package LinkedList;
import java.util.*;
public class Main {
public static void main(String[] args) {
    // Create a LinkedList to store songs in the playlist
    LinkedList<String> playlist=new LinkedList<>();

    playlist.add("Enna Solla Pogirai - A.R. Rahman");
    playlist.add("Vinnaithaandi Varuvaayaa - A.R. Rahman");
    playlist.add("Pudhu Vellam - Ilaiyaraaja");
    playlist.addLast("Madhuraikku Pogathadi - Yuvan Shankar Raja"); 
    playlist.addFirst("Ninaithaale Inikkum - Ilaiyaraaja");

    // Print all songs
    System.out.println("Playlist: " + playlist);

    //Access
    System.out.println("First song: " + playlist.getFirst());
    System.out.println("Last song: " + playlist.getLast());
    System.out.println("Song at index 2: " + playlist.get(2));


     // Remove songs
     playlist.remove("Pudhu Vellam - Ilaiyaraaja"); 
     playlist.removeFirst(); 
     playlist.removeLast(); 
     System.out.println("Playlist after removal: " + playlist);


     


}
    
}