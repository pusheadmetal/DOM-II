// Your code goes here
let getNav = document.querySelectorAll(".nav");
document.querySelectorAll(".btn")[0].onclick = function(e){ //1
    if ( getNav[0].style["background-color"] === "green"){
      getNav[0].style["background-color"] = "red";
    }else if ( getNav[0].style["background-color"] === "red"){
        getNav[0].style["background-color"] = "green";
    }else{
        getNav[0].style["background-color"] = "green";
    }  
    e.stopPropagation();
  };

let getDestination = document.querySelector(".destination");

getDestination.onclick = function() {
    getNav[0].style.width = "200px";
};


let getNavLinks = document.querySelectorAll(".nav-link");

getNavLinks.forEach( function( item,index ) {
    getNavLinks[index].onmouseover = function (e){ //2
        getNavLinks.forEach ( function( item,index ){
             getNavLinks[index].style["font-size"] = "1.6rem";
        });
         getNavLinks[index].style["font-size"] = "2.6rem";
         e.stopPropagation();
     };
    getNavLinks[index].onclick = (e) => e.preventDefault();
    
 } );

 getNav[0].onmouseleave = function(){ //3
        getNavLinks.forEach( function (item,index){
            getNavLinks[index].style["font-size"] = "1.6rem";
        });
    };


document.querySelector(".intro img").ondblclick = function(){ //4
    this.style["display"] = "none";
};

let images = document.querySelectorAll(".img-content img");
images[0].onwheel = function(){ //5
    images[0].style["max-width"] = "25%";
};

let element = document.querySelector(".contact-form-container");

document.querySelector("#color").onchange = function() { //6
    pickColor = this.value;

        if (pickColor === "cream"){
                
                element.style["background-color"] = "#FFFFF2";
            }

        if (pickColor === "red"){
           
            element.style["background-color"] = "red";
        }

        if (pickColor === "blue"){
            
            element.style["background-color"] = "blue";
        }
};

document.querySelector(".name").onkeypress = function(){ //7
    this.style["background-color"] = "green";
};

document.querySelector(".email").onfocus = function(e){ //8
    this.style["background-color"] = "red";
};

document.querySelector(".comments").addEventListener("focusout",function(e){ //9
    this.value = this.value.toUpperCase();
});

document.querySelector(".sub-btn").onclick = function(e){
    e.preventDefault();
};

document.querySelector(".comments").addEventListener("select",function(e){ //10
    this.style.color = "pink";
});


  