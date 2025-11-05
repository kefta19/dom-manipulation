
            // 1 Get the element with id "fruit-list"
var elone = document.getElementById("fruit-list");
console.log(elone);
console.log(elone.className);
elone.className = "fruit-list";
elone.style.fontStyle ="italic";
elone.style.backgroundColor = "red";
elone.style.fontSize= "22px";
elone.style.fontWeight = "bold";
            //  2 querySelector
var eltwo = document.querySelector(".apple");
console.log(eltwo);
console.log(eltwo.className);
eltwo.className = "apple";
eltwo.style.backgroundColor = "darkgreen";
eltwo.style.fontFamily = "times new roman";
            //   3 querySelectorAll
var elements = document.querySelectorAll("#fruit-list li.banana");
elements.forEach(function(element) {
    console.log(element);
    element.className = "banana";
    element.style.backgroundColor = "lightgreen";
   element.style.color = "red";
    element.style.textDecoration = "underline";
});
                //   4 multiple elements by tagname ,querySelectorAll,
var multiple= document.getElementsByTagName("li");
Array.from(multiple).forEach(function(element) {
    console.log(element);
    element.style.border = "5px solid tomato";
    element.style.backgroundColor = "black";
    element.style.fontWeight = "bold";
});
            // 5 using getElementsByTagName to select all <li> elements by looping
var all= document.getElementsByTagName("li");
console.log(all);
for (var i = 0; i < all.length; i++) {
    if (i % 2 === 0)
        var white = all[i];
    console.log(white);
    white.style.backgroundColor = "white";
white.style.color = "red";
}
            //  6 change the item  by using call gorebit(travers)
var element = document.querySelector(".banana");
console.log(element);
var talakwondm = element.nextElementSibling;
var kefta= element.previousElementSibling;
var fetene = element.parentElement;
var gfather = fetene.parentElement;
console.log(talakwondm);
console.log(kefta);
console.log(fetene);
console.log(gfather);
talakwondm.style.backgroundColor = "blue";
kefta.style.backgroundColor = "green";
fetene.style.backgroundColor = "red";
gfather.style.backgroundColor = "yellow";
            // 7 alter value and property of an element using textContent
var element = document.querySelector("h1");
element.textContent = "Altered Item";
        //   8 add content remove append ,add||change class list
var element = document.querySelector("ul");
element.appendChild(document.createElement("li"));
element.lastElementChild.textContent = "New Item Added at the end of the list";
element.insertAdjacentHTML("afterend", "<p>New paragraph added after list items in ul hkk jjholk uiu;i uiin ul</p>");
console.log(element);
console.log(element.lastElementChild);
            // 9 change css style to javascript style
var elements = document.querySelectorAll("#fruit-list li");
elements.forEach(function(element) {
    element.style.backgroundColor = "green";
    element.style.fontWeight = "bold";
    element.style.color = "white";
    element.style.fontSize = "20px";
    element.style.textDecoration = "underline";
    element.style.border = "2px solid white";
});

// async
async function LogData(){
    try{
        let response= await fetch("https://randomuser.me/api");
        let data=await response.json();
        console.log(data)
        const user=data.results[0];
        console.log(user);
        const usercontainer=document.getElementById("user-container");
        usercontainer.innerHTML
    }
    catch(error){
        console.log(error);
    };  
}
LogData();
// async function
// async function getup() {
// try {
//     let data = await alarm("bob", 100);
//     console.log(data);
// } catch (error) {
// alert(error);
// }
// }
// getup();
                       // photo
//   async function displaydata() {
//     try {
//       let response = await fetch("https://randomuser.me/api");
//       let data = await response.json();
//     //   console.log(data);
//       const user = data.results[0];
//       console.log(user);
//       const ddddd = document.getElementById("user-container");
//       ddddd.innerHTML;
//          const ddddd=document.getElementById("user-container");
//          ddddd.innerHTML=
//          <img src="${usr.picture.large}" alt="use picture">
//             <h3> namr: ${user.name.first} ${user.name,last}</h3>
//             <h3>Email: ${user.email}</h3>
//             <h3>Location: ${user.location.city},${user.location.country}</h3>'';

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   displaydata();                     