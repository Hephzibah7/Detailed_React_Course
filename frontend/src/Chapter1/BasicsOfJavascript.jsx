import React from 'react'
import { useEffect } from 'react';

function BasicsOfJavascript() {
  {/*

                Declaring Variables in ES6-
                1) const - A constant is a variable that cannot be changed. Javascript introduced constants in ES6.
                Before constants all we had were variables, and variables that could be overwritten.
                Lets take the below example-
                  var pizza=true;
                  pizza=false;
                  console.log(pizza)  //false
                  We cannot reset or overwrite the value of constants and if you tend to do it will throw an error.
                  ie Uncaught TypeError:Assignment to constant variable

                2) let 
                  If we use var keyword see what happens-
                  Lets take the below example-

                  var topic="javascript"
                  if(topic){
                    var topic="react";
                    console.log(topic); //react
                  }
                  console log.(topic); //react

                  As we can see in above example, the variable created inside if/else block is not scoped or limited to the block
                  but also retains its values outside the block.

                  With the let keyword, we can scope the value of a variable to a particular block.
                  Imp-let protects the value of global variable.
                  
                   Again lets take the below example-

                   var topic="javascript"
                   if(topic){
                      var topic="react"
                      console.log(topic) //react
                   }
                  console.log(topic) //javascript

                  Another area where the curly braces cannot block the scope of the variable or the effect of the variable in for loops

                  Lets take the below example-
                  var div, container=document.getElementById('container);
                  for(var i=0; i<=5; i++){
                    div=document.createElement("div");
                    div.onClick=function(){
                      alert("This is box" + i);
                    }
                      container.appendChild(div);
                  }

                  In the above example, what happens is since i is declared by keyword var, it becomes global,
                  and at the end the i value becomes 5, so all the div when clicked shows i=5, but if
                  you declare the variable with let, each div when clicked will output their corresponding i values
                  during iteration.
                   */}

  {/* 
                  3) Template String
                    Template String helps us to combine strings with variables
                    The traditional method was like- console.log("hello"+ " " + name);

                    But using template string-
                    console.log('Hello ${name}') // template string honors white space so no using of \n or "", thus avoiding mess

                    Another example-

                    document.body.innerHTML=`
                    <header>Hii ${name}</header>
                    `

                    It helps us to write html in javascript since template string retains whitespace also.

                  4)Default Parameters-
                    We can give default values to the paramters of the function to avoid error in the case when the values of the
                    parameters are not given.

                    Example-

                    function work(name="shane"){
                    console.log(name);
                    }
                    
*/}

{ /*  5) Arrow Functions

  With arrow functions, you can create functions without using function and return keyword.

  var work=function(firstname){
  return firstname;
  }

  can be written as-

  var work=firstname=>{firstname}; 
  so what ever the paramter that is taken by the function work is written after the equal to sign and the function definition is
  after the arrow mark. Now since we are taking only the firstname as the parameter we have not used parenthesis.

  var work=(firstname, lastname)={`${firstname} ${lastname}`}

  and if you have to keep multi-line function then,
  
  var work=(firstname, lastname)=>{

    if(!firstname) throw new Error("firstname is required");
    if(!lastname) throw new Error("lastname is required");
    return {`${firstname} ${lastname}`}
    }

   const obj={
    resorts:["pune", "mumbai","delhi"],
    print:function(delay=1){
      setTimeout(function(){
        console.log(this.resorts.join(","));
      }, delay);
    }
   }

   useEffect(()=>{
    obj.print();
   })  //cannot read properties of undefined(reading 'join') error

  */}

   const obj={
    resorts:["pune", "mumbai","delhi"],
    print:function(delay=1){
      setTimeout(()=>{
        console.log(this.resorts.join(","));
      }, delay);
    }
   }

  //  useEffect(()=>{
  //   obj.print();  //pune,mumbai,delhi
  //  })

     

   {/*
    The above code works perfectly.
    Let me explain what exactly the above code is trying to do and why the previous code did not work and threw an error.
    First of all we have created an object right?
    The object has two properties or two key-value pairs- resorts which an array
                                - another is print which is a function

    The print function has setTimeOut function that will call the function inside it after delay time.
    {setTimeOut is a function that takes two things in its paramater, one a function another number of seconds, and the function inside
    the setTimeout paramter is called after this x seconds.}

    Okay, now you need to remember one important stuff that I will be showing with the help of below two examples:-
     
  a) const obj={
    f:function(){console.log(this)} 
    }

    obj.f() //object

  b) const obj2={
      f:()=>{
        console.log(this);  
      }
    }

    obj2.f() //undefined

    What difference do you see?
    In the (a) example, when you call obj.f(), "this" points to the object that called the function, because a function 
    always creates this object of the object that called here it is obj, but when it is an array function, it does not create its own this function and will
    only inherit from its surrounding scope. 

    So,

    const obj={
     resorts:["pune", "mumbai","delhi"],
    print:function(delay=1){
      setTimeout(function(){
        console.log(this.resorts.join(",")); //error
      }, delay);
    }
   }
}

   The above code does not work why? because the function inside setTimeout is called by setTimeout, and setTimeout does not have
   property called resorts, so if you change the function inside setTimeout to be an arrow function, it will work properly.

    const obj={
    resorts:["pune", "mumbai","delhi"],
    print:function(delay=1){
      setTimeout(()=>{
        console.log(this.resorts.join(",")); 
      }, delay);
    }
   }
}

obj.print() //pune, mumbai, delhi

   why it is correct? -> because since setTimeout has now an arrow function and we know it does not create any obj, but inherits
   the obj from its parent and the parent is print function which creates an object of constant obj when obj.print() is called,

 const obj={
    resorts:["pune", "mumbai","delhi"],
    print:(delay=1)=>{
      setTimeout(()=>{
        console.log(this.resorts.join(",")); //pune, mumbai, delhi
      }, delay);
    }
   }
}

obj.print() //error

But, remember if print function is replaced with an arrow function, then it again throws an error, why? because arrow functions 
do not create obj as we have seen in previous example.

    */}

    {/*
       */}


       

  return (
    <div>







    </div>
  )
}

export default BasicsOfJavascript
