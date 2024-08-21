import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
  
        ArrayList<String> Employee = new ArrayList<>();
        Scanner input = new Scanner(System.in);
        int no_of_employee=input.nextInt();
        for(int i=1;i<=no_of_employee;i++){
            System.out.print("Enter name of employee " + i+ ": ");
           String Employee_Name=input.nextLine();
           //add()----> Add employee Nameto the list
           Employee.add(Employee_Name);
        }
  System.out.println("Emp-list :" +Employee);
  Employee.add(1,"Kavin");
  System.out.println("Emp-list :" +Employee);


  //get employee at specified index
  System.out.println(Employee.get(3));


   // Remove an employee by index
  System.out.println(Employee.remove(2));
  // Remove an employee by name
 System.out.println(Employee.remove("vinuja"));


  // Check if the list contains a specific employee
  System.out.println(Employee.contains("vinuja"));


  //Size of ArrayList
  System.out.println(Employee.size());


  //Iterator
  Iterator<String> iterator= Employee.iterator();
  while(iterator.hasNext()){
    //next()---> retrieves the current element of the ArrayList and moves the cursor to the next element.
    System.out.println(iterator.next());
  }
//Set a new value at a specific index and replace the excisting value
  Employee.set(3,"Shalini");
  System.out.println(Employee);


  ArrayList<String> newEmployee= new ArrayList<>();
  newEmployee.add("Ranjana");
  newEmployee.add("Sownthariya");

  Employee.addAll(newEmployee);
 System.out.println(Employee);

  Employee.removeAll(newEmployee);
  System.out.println(Employee);

  newEmployee.clear();
  System.out.println(newEmployee);
  System.out.println(newEmployee.isEmpty());
    }
}
