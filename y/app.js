const firebaseConfig = {
    apiKey: "AIzaSyAf1yrRUyKEov_Hd23IutVm0Ov7jw9J4Fk",
    authDomain: "todo-3c3b0.firebaseapp.com",
    databaseURL: "https://todo-3c3b0-default-rtdb.firebaseio.com",
    projectId: "todo-3c3b0",
    storageBucket: "todo-3c3b0.appspot.com",
    messagingSenderId: "1094378347941",
    appId: "1:1094378347941:web:84edfb8e11e8ce38e7dc4c",
    measurementId: "G-7HN28ENT02"
  };
  var app = firebase.initializeApp(firebaseConfig);
  

  var database = app.database()



var ol = document.getElementById("li")

ol.style.fontSize="25px"
ol.style.color="white"


function add(){
    var add1 = document.getElementById("inpt")
//     // console.log(add1.value)


    
    
if(inpt.value.length > 3){
    var key = database.ref("/").push().key
var obj = {
    key : key,
    todo : add1.value
}    

 database.ref("todo").child(key).set(obj)

//     var li = document.createElement("li")
//     var txt = document.createTextNode(add1.value)
//     li.appendChild(txt)
//     // console.log(li)
//    li.style.border="1px solid orange"   
//    li.style.listStylePosition ="inside" 
//    li.style.paddingTop="10px"
//    li.style.marginTop="10px"
//    li.style.height="40px"
//    li.style.marginRight="30px"
//    li.style.borderRadius="50px"
//    li.style.paddingLeft="10px"
//    li.style.backgroundColor="#78a4d68e"
    
//     var dlt = document.createElement("span")
//      dlt.setAttribute("onclick","dlist(this)")
//      dlt.className="far fa-times-circle"
//     dlt.style.color="#78ffd6"
//     dlt.style.marginLeft="10px"
    
    
//     var dlt1 = document.createElement("span")
//     dlt1.setAttribute("onclick","dlist1(this)")
//     dlt1.className="fas fa-edit"
//     dlt1.style.color="#FFAF7B"
//     dlt1.style.marginLeft="120px"
     
    
    
//     li.appendChild(dlt1)
//     li.appendChild(dlt)
    // ol.appendChild(li)
    inpt.value= ""

}
    else{
        alert("write something more than 3 words")
    }
    }



database.ref("todo").on("child_added",function(data)
{
    var li = document.createElement("li")
        var txt = document.createTextNode(data.val().todo)
        li.appendChild(txt)
        console.log(txt)
        var dlt = document.createElement("span")
             dlt.setAttribute("onclick","dlist(this)")
             dlt.setAttribute("id",data.val().key)
             dlt.className="far fa-times-circle"
            dlt.style.color="#78ffd6"
            dlt.style.marginLeft="10px"
            
            
            var dlt1 = document.createElement("span")
            dlt1.setAttribute("onclick","dlist1(this)")
            dlt1.setAttribute("id",data.val().key)
            dlt1.className="fas fa-edit"
            dlt1.style.color="#FFAF7B"
            dlt1.style.marginLeft="120px"
             
            
            
            li.appendChild(dlt1)
            li.appendChild(dlt)
            ol.appendChild(li)
})






















function Delete(){
ol.innerHTML =""
database.ref("/todo").remove()
}

function dlist(e){
    e.parentNode.remove()
 
    database.ref("todo").child(e.id).remove()
}

function dlist1(e){
var pro = prompt("enter edit value" ,e.parentNode.firstChild.nodeValue)

if(pro.length <=3 ){
     alert("invalid")
     
    
}
else{
    e.parentNode.firstChild.nodeValue=pro
    database.ref("todo").child(e.id).update({
        todo: pro
    })
}
}
// var sd=document.getElementById("ad")
// sd.className="far fa-file-plus"
// sd.style.fontSize="40px"
// sd.style.color="#73C8A9"

// sd.style.marginTop="10px"
// sd.style.marginLeft="35px"

// var dt =document.getElementById("dl")
// dt.className= "fas fa-trash-alt"
// dt.style.fontSize="40px"
// dt.style.color="#ffcc33"
// dt.style.marginLeft="10px"

