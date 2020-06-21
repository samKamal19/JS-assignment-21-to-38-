                                   // JA- ASSIGNMENT (CH# 21 TO 38)

                                   // ASSIGNMENT # 1     STRING METHODS
//task#1)
    var firstName = prompt("Enter your 1st name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + lastName;
       console.log(fullName);

//task#2)
    var favMobile = "Samsung galaxy S6 Edge plus " ;
    var totalLenght = favMobile.lenght;
       document.writeln("My favourite phone is : "  +  favMobile );
       document.writeln("Lenght of string : "  + totalLenght );

//task#3)
    var string = "Pakistani";
    var a = string.indexOf("n");
       document.writeln("String : "  +  string ); 
       document.writeln("IndexOf 'n'  : "  + a );

//task#4)       
    var a = "Hello World";
    var b = a.lastIndexOf("l");
       document.writeln("String : " + a ); 
       document.writeln("The last index is : "  + b );

//task#5)
    var a = "Pakistani";
    var b = a.charAt(3);
        document.write("String : " + a  ); 
        document.write("Character at index 3 : " + b );   
        
//task#6)
    var firstName = "Samra";
    var lastName = "Kamal";
    var c = firstName.concat(" " , lastName);
       console.log(c);

//task#7)
    var city = "Hyderabad";
    var replacement = city.replace("Hyder", "Islam");
        document.write("City : " + city );
        document.write("After replacement : " + replacement);
        
//task#8)
    var message = "Ali and Semi are best friends. They play cricket and football together";
    var a = message.replace("and" , "&");
       document.write(a);   
       
//task#9)
    var string = "472";
    var a = Number("472");
        document.write("value : " +  a);
        document.write("type : " + "string");
        document.write("value : " + a );
        document.write("type : " + "number");   
        
//task#10)
    var a = "peanuts";
    var b = a.toUpperCase();
       document.write("User input : " + a);
       document.write("Upper Case : " + b);

//task#11)
    var input = "javascript"; 
    var titleCase = input.toTitleCase();
       document.write("User input : " + input);
       document.write( "Title case : "+ titleCase);
       
//task#12)
    var num = 35.36 ;
    var string = num.toString();
       document.write("num : " + num);
       document.write()    
       
//task#13)
    var userName = prompt("Enter your name") ;
    if (userName = "!", "," , "@", ".") {
         alert("Please enter valid user name");
    } 
     
//task#14)
    var arr = ["cake", "apple pie", "cookies", "chips", "paties"];
    var bakery = prompt("Enter bakery items");
    bakery = bakery.toLowerCase();
    var bakeryItems = arr.indexOf(bakery);
    if (arr.indexOf(bakery) != -1){
        alert(bakery + "is avaiable in index : " + bakeryItems ) ; 
    } else {
        alert("We are sorry. " + bakery + "is not available in our bakery");
    }    

//task#15)
    var passward = prompt("passward should contain alphabets and numbers");
    
    







//task#16)
    var str = "University of Karachi";
    var a = str.split("");
        console.log(a);

//task#17)
    var userInput = "Pakistan";
    var a = userInput.charAt(userName.length-1);
        console.log("user input : " + userInput); 
        console.log("last character of input : " + a); 

//task#18)
    var str = "The quick brown fox jumps over the lazy dog" ;
    var indexNum = text.indexOf("the");
        document.write(indexNum);



                    // AASIGNMENT#2   MATHS METHOD
//TASK#1)
    var num = 3.45214;
    var roundOfNum = Math.round(num);
    var floorNum = Math.floor(num);
    var ceilNum = Math.ceil(num);
       console.log("number :" + num);                    
       console.log("Round off value :" + roundOfNum); 
       console.log("floor value :" + floorNum); 
       console.log("ceil value :" + ceilNum); 

//task#2)
    var num = -2.673;
    var roundOfNum =  Math.round(num);     
    var floorNum = Math.floor(num);
    var ceilNum = Math.ceil(num);
        console.log("number :" + num);                    
        console.log("Round off value :" + roundOfNum); 
        console.log("floor value :" + floorNum); 
        console.log("ceil value :" + ceilNum);

//task#3)
    var a = -4;
    var b = a.abs();
       console.log("absolute value of -4 is " + b);   
       
//task#4)
    var num = Math.random() * 2;
           //document.write(num);
    var num1 = (num * 4) ;
    var num2 = num1 + 2;     
    var dice1 = Math.floor(num1);   
    var dice2 = Math.floor(num2);    
    
           document.write("random dice value : " + dice1);
           document.write("random dice value : " + dice2);       

    
        
//task#5)

   var toss = Math.random() * 2;
   var floor = Math.floor(toss);
   if (floor === 0) {
       alert("Random coin value : head"  );
   } else{
       alert("Random coin value : tail" );
   }

//task#6)
   
   
    var a = Math.floor(Math.random() * 100);
        document.write("Random number between 1 to 100 : " +  a );



//task#7)

    var a = prompt("enter your weight");
    var b = parseInt(a);
       alert("The weight of user is : " + b);

//task#8)


    var num = prompt("enter number from 1 ti 100");
    var a = Math.floor(Math.random() * 10); 
    if(num = a ) {
        alert("Congratulation");
    } else {
        alert("Try again");
    }

 
                    //ASSIGNMENT#3      DATE METHOD

//task#1)
    var date = new Date();
        document.write(date);
        
//task#2)
    var monthList = ["january", "feburary","march","april","may" ,"june","july","augest","september","octuber","november","december"];
    var date = new Date();
    var month = date.getMonth();
    var nameOfMMonth = monthList[month];   
        console.log("current month : " + nameOfMMonth);

//task#3)
    var dayList = ["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"];
    var date = new Date();
     //  console.log(date);
    var day = date.getDay(); 
    var nameOfDay = dayList[day];
    var dayChar = nameOfDay.lenght;
    //if(dayChar < 3) {
    if ( daychar = nameOfDay.slice(0,3)) {
    
        console.log("Today is : " + daychar);
    }

//task#4)
    var day = ["sun","mon","tues","wed","thurs","fri","sat"];
    var date = new Date();   
    var newDay = date.getDay();
    if(newDay === 0 || naeDay === 6) {
        console.log("Its fun day");
    }

//task#5)
    var date = new Date();
    var newDate = date.getDate();
    if(newDate < 16) {
        console.log("First fifteen days of month");
    } else {
        console.log("Last days of month");
    }


//task#6)
    var date = new Date();
    var millisSince = date.getTime();
    var minSince = (1000/60*60)
       console.log("current date : " + date);
       console.log("Elapsed millisecond since jan'1 1970 :" + millisSince);  
       console.log("Elapsed minutes since jan'1 1970 :" + minSince);   

//task#7)
    var a = new Date();
    var time = a.getHours();
    if(time < 12 || time > 23) {
        console.log("Its PM " );
    } else {
        console.log("its AM");
    }       

//task#8)
    var d = new Date(2020, 11, 30);
        console.log(d);


         


//task#9)
var oneDay = 24 * 60 * 60 * 1000;
var current = new Date(2020,4,23);
var previous = new Date(2015,6,18);

return Math.ceil((current - previous + 1) / oneDay);

alert(days_passed() +" "+ "days passed since 1st Ramadan,2015");       





//task#12)
   var d = new Date();
   var newDate = d.getYear();
   var getYear = new Date().getFullYear() - 100; 
       
       console.log(getYear);





//task#13)
function questionDate13(){
    function get_birthYear(age) {
      
        var getYear = new Date().getFullYear() - age; 
        
        return "your birth year is:"+''+ getYear;
        }
      var age = +prompt('type your age..');
      alert(get_birthYear(age));
   
}

//task#14)
    var customerName = prompt("enter your name");
    var d = new Date();
    var newDate = d.getMonth();
    var units = 300.25;
    var chargePerUnit = 20.55;
    var amountPayable = units + chargePerUnit;
    var latePayment = 350;
    var grossAmount = amountPayable + latePayment;
        console.log("customer name : " + customerName);
        console.log(" Month: " + newDate);
        console.log("Number of units : " + units );
        console.log("charge per unit : " + chargePerUnit);
        console.log(" Net amount payable(with due date) : " + amountPayable);
        console.log(" late payment surcharge : " + latePayment);
        console.log("Gross amount payable(after due date) : " + grossAmount);








                   //ASSIGNMENT#4    FUNCTION

//task#1)    

function question1(){
    document.write(new Date());
}

//task#2)
function question2(){
    var fisrtName = prompt('Type your first name.');
    var lastName = prompt('Type your last name.');
    
    alert('your full name is: '+ fisrtName + " " +lastName);
}

//task#3)
function question3(){
    var num1 = +prompt('Type any number.');
    var num2 = +prompt('Type any number do you want sum on your privous number.');
    var sum =(num1 + num2);
    alert('Sum : '+ sum);
}

//task#4)
function question4(){
    var num1 = +prompt('Type num1.');
    var num2 = +prompt('Type num2.');
    var operator = prompt('Type opertor.');
    if(operator === '+'){
        var result =(num1 + num2); 
        alert(result);
        return false;

    }
    else if(operator === '-'){
        var result =(num1 - num2); 
        alert(result);
        return false;

    }
    else if(operator === '/'){
        var result =(num1 / num2); 
        alert(result);
        return false;

    }
    else if(operator === '*'){
        var result =(num1 * num2); 
        alert(result);
        return false;

    }
    // var sum =(num1 + num2);
}

//task#5)
function question5(){
    var sumOfSquares = function (num) {
  // var i,
          sum = num * num;   
        alert(sum);
        return sum;
      }
      var num = +prompt("Enter a number:"); 
                                                    
      console.log("The sum of squares for numbers up to and including " + num + " is " +
        sumOfSquares(num)) ;
        
}

//task#6)
function question6(){
    function factorial(x) 
    { 
    
      if (x === 0)
     {
        return 1;
     }
      var result = x * factorial(x-1)
    //   alert(result);
      return x * factorial(x-1);
      
    }
    var num = parseInt(prompt("Enter a number:"), 10); 
    

    alert(factorial(num));
}

//task#7)
function question7(){
    function displayCounter(num1,num2){
   
   for (var i = num1; i <= num2; i++) {
    var counterLimit =num2;
    var output;
    if(i == counterLimit){
        break;
        return false

    }else{
        setInterval(function(){
            document.getElementById('counter').value =i;
    },1000)
}
    
   
    return i;
  }
  
        
        document.write(i);
        
       }
       var counterStart = +prompt("Enter start number:"); 
       var counterEnd = +prompt("Enter start number:"); 
    
       displayCounter(counterStart,counterEnd);
    }

    //task#8)
    function question8(){
        function calcHypotenus(base,  per) {
            alert(Math.sqrt(base*base  + per*per));
            function calSquare(){
                alert('Base Square :'+''+ (base*base) +''+'perpendicular Sqaure :'+(per*per))
            }
            calSquare();
        }
        var base = +prompt("Enter base number:"); 
        var per = +prompt("Enter perpendicular number:"); 
        calcHypotenus(base,  per);
    }

    //task#9)
    function question9(){
        function findAreaOfTriangle(RecLen){
            var RecWid, Area;
            RecWid = 100;
            Area = RecLen * RecWid;
            return Area;
          }
          var RecLen = +prompt("Enter Area Of Triangle lenght:"); 
          alert(findAreaOfTriangle(RecLen));
    }

    //task#10)
    function question10(){

        // Write a JavaScript function that checks whether a passed string is palindrome or not? 

       function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            alert("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                alert("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                alert("Entry is not a palindrome.");
                return false;
            }
        }
        alert("The entry is a palindrome.");
        return true;
    }
    var palindromeString = prompt('Type palindrome string.');
    check_Palindrome(palindromeString)
}

//task#11)
function question11(){
    function uppercase(str)
    {
      var array1 = str.split(' ');
      var newarray1 = [];
        
      for(var x = 0; x < array1.length; x++){
          newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }
      return newarray1.join(' ');
    }
    var sentence = prompt('Type some words those you want to convert in the first letter of the all words.');
    
    alert(uppercase(sentence))
}

//task#12)
function question12(){
    function finLlongestWord(str)
    {
      var array1 = str.match(/\w[a-z]{0,}/gi);
      var result = array1[0];
    
      for(var x = 1 ; x < array1.length ; x++)
      {
        if(result.length < array1[x].length)
        {
        result = array1[x];
        } 
      }
      return result;
    }
    var sentence = prompt('Type some words and i find longest word in this sentence.');
    
    alert(finLlongestWord(sentence))
}

//task#13)
function question13(){
    function char_count(str, letter) 
    {
     var letter_Count = 0;
     for (var position = 0; position < str.length; position++) 
     {
        if (str.charAt(position) == letter) 
          {
          letter_Count += 1;
          }
      }
      return letter_Count;
    }
    var str = prompt('Type some Words.');
    var letter = prompt('Type any letter those you find on your provided text.');
    
    alert(char_count(str ,letter))
}

//task#14)
function question14(){

    function calcCircumference(radius)
    {
        this.radius = radius;
      // perimeter method

            alert("The circumference is NN: "+ ' '+ (2*Math.PI*this.radius).toFixed(2));
        // };
        calcArea(this.radius);
    }
    function calcArea(radius){
        //Area method
            alert("The area is NN :" +" " + (Math.PI * this.radius * this.radius).toFixed(2));
        
    }
    var radius = prompt('Enter radius.');
    calcCircumference(radius);
   
}


                                  //    THE END     //