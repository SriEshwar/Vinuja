package Queue;
import java.util.LinkedList;
import java.util.Queue;
public class Main {
    public static void main(String[] args) {
        Queue<String> printQueue = new LinkedList<>();

        // Adding print jobs to the queue
        printQueue.add("Document1.pdf");
        printQueue.add("Photo.jpg");
        printQueue.add("Presentation.pptx");
        printQueue.add("Report.docx");

        // Displaying the print queue
        System.out.println("Print queue: " + printQueue);


        // Retrieves and removes the head of the queue
        String nextJob = printQueue.poll(); 
        System.out.println("Processing job: " + nextJob);

        // Retrieves but does not remove the head of the queue
        String headJob = printQueue.peek(); 
        System.out.println("Next job in the queue: " + headJob);



        boolean hasReport = printQueue.contains("Report.docx");
        System.out.println("Is 'Report.docx' in the queue? " + hasReport);

        // Checking the size of the queue
        int queueSize = printQueue.size();
        System.out.println("Number of jobs in the queue: " + queueSize);

        // Iterating over the print jobs in the queue
        System.out.println("Jobs remaining in the queue:");
        for (String job : printQueue) {
            System.out.println(job);
        }

        // Removing all jobs from the queue
        printQueue.clear();
        System.out.println("Print queue after clearing: " + printQueue);
        System.out.println("Is the print queue empty? " + printQueue.isEmpty());
    }
}
