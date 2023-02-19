function ajax(){


    let request =new XMLHttpRequest(); 
    request.open("GET",'https://jsonplaceholder.typicode.com/todos',true)
    request.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
       
let another =JSON.parse(this.responseText)

           document.getElementById("demo").innerHTML = 
           
           `
           <div class=".d-block">
           <nav class="navbar navbar-dark bg-light"></nav>
           <form class="form-inline">
             <button id="do" class="btn btn-outline-success" type="button" const interval = setInterval(toDo() {
              // method to be executed;
            }, 3000); >TO DO LIST</button>
             <button id="back" class="btn btn-sm btn-outline-secondary" type="button" onclick()=F:\Full stack\Ajax\index.html >Logout</button>
           </form>
         </nav>
           
           <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">No.</th>
      <th scope="col">Tasks</th>
      <th scope="col">Completed</th>
    </tr>
  </thead>
  <tbody>
 
    <tr>
      <th scope="row">${another[0].userId} </th>
      <td>${another[0].id}</td>
      <td>${another[0].title}</td>
      <td><input type="checkbox" name="" value="" class="select" onclick=toDo(); >
      </td> 
      <span id="select_error"></span>
    </tr>

    <tr>
    <th scope="row">${another[1].userId} </th>
    <td>${another[1].id}</td>
    <td>${another[1].title}</td>
    <td><input type="checkbox" name="" value="" class="select" onclick=toDo(); ></td>
    <span id="select_error"></span>
    </tr>
    <tr>
    <th scope="row">${another[2].userId} </th>
    <td>${another[2].id}</td>
    <td>${another[2].title}</td>
    <td><input type="checkbox"name="" value="" class="select" onclick=toDo(); ></td>
    </tr>
    <tr>
    <th scope="row">${another[3].userId} </th>
    <td>${another[3].id}</td>
    <td>${another[3].title}</td>
    <td><input type="checkbox" name="" value="" class="select" onclick=toDo();></td>
    </tr>
    <tr>
    <th scope="row">${another[4].userId} </th>
    <td>${another[4].id}</td>
    <td>${another[4].title}</td>
    <td><input type="checkbox" name="" value="" class="select" onclick=toDo();  ></td>
    </tr>
    <tr>
    <th scope="row">${another[5].userId} </th>
    <td>${another[5].id}</td>
    <td>${another[5].title}</td>
    <td><input type="checkbox" name="" value="" class="select"  ></td>
    </tr>
    <tr>
    <th scope="row">${another[6].userId} </th>
    <td>${another[6].id}</td>
    <td>${another[6].title}</td>
    <td><input type="checkbox" name="" value="" class="select" ></td>
    </tr>
    <tr>
    <th scope="row">${another[7].userId} </th>
    <td>${another[7].id}</td>
    <td>${another[7].title}</td>
    <td><input type="checkbox" name="" value="" class="select"  ></td>
    </tr>
    <tr>
    <th scope="row">${another[8].userId} </th>
    <td>${another[8].id}</td>
    <td>${another[8].title}</td>
    <td><input type="checkbox" name="" value="" class="select" ></td>
    </tr>
    <tr>
    <th scope="row">${another[9].userId} </th>
    <td>${another[9].id}</td>
    <td>${another[9].title}</td>
    <td><input type="checkbox" name="" value="" class="select"  onclick= count();></td>
    </tr>
    <tr>
    <th scope="row">${another[10].userId} </th>
    <td>${another[10].id}</td>
    <td>${another[10].title}</td>
    <td><input type="checkbox" name="" value="" class="select"  ></td>
    </tr>
    <tr>
    <th scope="row">${another[11].userId} </th>
    <td>${another[11].id}</td>
    <td>${another[11].title}</td>
    <td><input type="checkbox" name="" value="" class="select" ></td>
  </tr>
  <tr>
  <th scope="row">${another[12].userId} </th>
  <td>${another[12].id}</td>
  <td>${another[12].title}</td>
  <td><input type="checkbox" name="" value="" class="select"  ></td>
  
  </tr>
  <tr>
  <th scope="row">${another[13].userId} </th>
  <td>${another[13].id}</td>
  <td>${another[13].title}</td>
  <td><input type="checkbox" name="" value="" class="select"  ></td>
  </tr>
  <tr>
  <th scope="row">${another[14].userId} </th>
  <td>${another[14].id}</td>
  <td>${another[14].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[15].userId} </th>
  <td>${another[15].id}</td>
  <td>${another[15].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[16].userId} </th>
  <td>${another[16].id}</td>
  <td>${another[16].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[17].userId} </th>
  <td>${another[17].id}</td>
  <td>${another[17].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[18].userId} </th>
  <td>${another[18].id}</td>
  <td>${another[18].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[19].userId} </th>
  <td>${another[19].id}</td>
  <td>${another[19].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[20].userId} </th>
  <td>${another[20].id}</td>
  <td>${another[20].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[21].userId} </th>
  <td>${another[21].id}</td>
  <td>${another[21].title}</td>
  <td><input type="checkbox"></td>
  </tr>
  <tr>
  <th scope="row">${another[22].userId} </th>
  <td>${another[22].id}</td>
  <td>${another[22].title}</td>
  <td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[23].userId} </th>
<td>${another[23].id}</td>
<td>${another[23].title}</td>
<td><input type="checkbox"></td>

</tr>
<tr>
<th scope="row">${another[24].userId} </th>
<td>${another[24].id}</td>
<td>${another[24].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[25].userId} </th>
<td>${another[25].id}</td>
<td>${another[25].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[26].userId} </th>
<td>${another[26].id}</td>
<td>${another[26].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[27].userId} </th>
<td>${another[27].id}</td>
<td>${another[27].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[28].userId} </th>
<td>${another[28].id}</td>
<td>${another[28].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[29].userId} </th>
<td>${another[29].id}</td>
<td>${another[29].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<th scope="row">${another[30].userId} </th>
<td>${another[30].id}</td>
<td>${another[30].title}</td>
<td><input type="checkbox"></td>
</tr>
<tr>

  </tbody>
</table>
</div>
           
           `
        }

        
    }
    
    request.send()


    }

    function validate()
    {
        let userformat= /(?<name>Admin)$/g;
        let passformat= /(?<name>1234)/g;
        
        let username = document.getElementById("main");
        let user= username.value;
        let password = document.getElementById("pass");
    let passw= password.value;
    let log_error = document.getElementById('log_error');
    
    if(user.match(userformat) && passw.match(passformat)){
        log_error.innerHTML = " <p id='real'>Login successful</p>";
        setTimeout(ajax,3000);
    }
     else{
      log_error.innerHTML = " <p id='real'>Invalid login</p>";
      }
    }
validate();
// function count(){

//   const collection = document.getElementsByClassName("select");


// var counter = 0;
// let promise= new Promise((resolve, reject)=>{

// for (let i = 0; i < collection.length; i++) {


  
 
   
//   if (collection[i].type == "checkbox"){
//     if (collection[i].checked){
        
//         {
//           counter++;  
//         }
        
//     }   
//   }

//    // alert( "Successsfully completed " + counter + " tasks");
 
// if(counter==4){
//   resolve(counter);
// }
// else{
//   reject('Error')
// }
// }})

// // promise.then((val)=>{

//   alert("Hooray!Successfully completed the five tasks");
//   counter=0;

// })
// .catch((err)=>{

// alert(counter);
// })

 
//const status= counter;


//if (status %2==0){
  
// }


//from here

// function myDisplayer(some) {
//   alert(some);
// }


// async function toDo() {
  
  
//   const collection = document.getElementsByClassName("select");


// let counter = 0;


// for (let i = 0; i < collection.length; i++) {


  
 
   
//   if (collection[i].type == "checkbox"){
//     if (collection[i].checked){
        
//         {
            
//           if(counter ==5){
//              counter++;
//             return("Completed" + counter + "tasks");
//           }
//           else {
//             counter++;
//           }
//         }
        
//     }   
//   }
// }
//    // alert( "Successsfully completed " + counter + " tasks");


// }






// // some code (try to change x to 5)

// toDo().then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );



// function toDo(n1,n2) {

//   let p = new Promise(function (resolve, reject) {
//     const collection = document.getElementsByClassName("select");
//      if (n1 <= collection.length && n2 >= 0) {
//         //do some complex time consuming work
//         resolve(n1 + n2)
//      }
//      else
//         reject('NOT_Postive_Number_Passed')
//   })
//   return p;
// }

// toDo(1,1).then(function(result){
//   console.log("first result",result)
//   return toDo(result,result)
// }).then(function(result){
// console.log("second result",result)
// return toDo(result,result)
// }).then(function(result){
//   console.log("third result",result)
//   return toDo(result,result)
// }).then(function(result){
//   console.log("fourth result",result)
//   return toDo(result,result)
// }).then(function(result){
//   alert("third result",result)
//   return toDo(result,result)
// })

// console.log('end')


let prt= new Promise((resolve,reject)=>{
  

const collection= document.getElementById("select");

function toDo(a,b){
for(i=0;i<collection.length;i++){
  for(j=i;j==4;j++){
    
     if (collection[i].type == "checkbox"){
       if (collection[i].checked){
          var sum = a+b;
       }
     }
    
  }}

if(sum!=0){
resolve(sum);
}
else{
reject("Error");
}
  }

})





prt.then((message)=>{
    alert(message);})
.catch((message)=>{
  
alert(message);
})