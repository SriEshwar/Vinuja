package Set.Hashset;
import java.util.HashSet;
import java.util.Iterator; // Import Iterator explicitly

public class Main {
    public static void main(String[] args) {
        // Creating a HashSet to store participant names
        HashSet<String> participants = new HashSet<>();

        // Adding participants to the HashSet
        participants.add("Vinuja");
        participants.add("Arun");
        participants.add("Priya");
        participants.add("Sanjay");
        participants.add("Meera");

        // Trying to add a duplicate participant
        boolean isAdded = participants.add("Vinuja");
        System.out.println("Was 'Vinuja' added again? " + isAdded); 

        // Checking if a participant is registered
        boolean isRegistered = participants.contains("Arun");
        System.out.println("Is Arun registered? " + isRegistered); 

        // Removing a participant
        participants.remove("Sanjay");
        System.out.println("Is Sanjay still registered? " + participants.contains("Sanjay")); 

        // Checking the number of registered participants
        int numberOfParticipants = participants.size();
        System.out.println("Number of registered participants: " + numberOfParticipants); 

        // Iterating over the participants
        System.out.println("List of registered participants:");
        Iterator<String> iterator = participants.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Checking if the set is empty
        System.out.println("Is the participant list empty? " + participants.isEmpty()); 

        // Clearing all participants from the set
        participants.clear();
        System.out.println("Number of registered participants after clearing: " + participants.size()); 
    }
}

