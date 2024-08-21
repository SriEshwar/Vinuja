package Map;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Creating a Map to store contact names and their phone numbers
        Map<String, String> contactList = new HashMap<>();

        // Adding contacts to the Map with Tamil Nadu names
        contactList.put("Arun Kumar", "944-1234");
        contactList.put("Priya Rani", "944-5678");
        contactList.put("Suresh Babu", "944-8765");
        contactList.put("Meena Devi", "944-4321");

        // Displaying the contact list
        System.out.println("Contact List: " + contactList);

        // Retrieving a phone number by contact name
        String arunsNumber = contactList.get("Arun Kumar");
        System.out.println("Arun Kumar's Phone Number: " + arunsNumber);

        // Checking if a contact exists
        boolean hasPriya = contactList.containsKey("Priya Rani");
        System.out.println("Is Priya Rani in the contact list? " + hasPriya);

        // Checking if a phone number exists
        boolean hasNumber = contactList.containsValue("944-8765");
        System.out.println("Is there a contact with phone number 944-8765? " + hasNumber);

        // Removing a contact
        contactList.remove("Meena Devi");
        System.out.println("Contact List after removing Meena Devi: " + contactList);

        // Updating a contact's phone number
        contactList.put("Suresh Babu", "944-9999");
        System.out.println("Contact List after updating Suresh Babu's phone number: " + contactList);

        // Getting the size of the contact list
        int contactListSize = contactList.size();
        System.out.println("Number of contacts in the list: " + contactListSize);

        // Iterating over the contact list
        System.out.println("Contacts in the list:");
        for (Map.Entry<String, String> entry : contactList.entrySet()) {
            System.out.println("Name: " + entry.getKey() + ", Phone Number: " + entry.getValue());
        }

        // Clearing all contacts from the list
        contactList.clear();
        System.out.println("Contact List after clearing: " + contactList);
        System.out.println("Is the contact list empty? " + contactList.isEmpty());
    }
}
