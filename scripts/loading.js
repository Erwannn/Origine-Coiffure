var logoDiv = document.createElement("div");
logoDiv.setAttribute("id","logoLoading");
document.body.appendChild(logoDiv);

var logoG1 = document.createElement("div");
logoG1.setAttribute("id","logoG");
logoDiv.appendChild(logoG1);

var logoD1 = document.createElement("div");
logoD1.setAttribute("id","logoD");
logoDiv.appendChild(logoD1);

var divbubble = new Array();

for (var i = 1; i < 7; i++){
  divbubble[i] = document.createElement("div");
  divbubble[i].setAttribute("id","bubble"+i);
  logoDiv.appendChild(divbubble[i]);
}

logoDiv.style.animation = "rotate 1.2s linear";
for (var i = 1 ; i < 7 ; i++){
  divbubble[i].style.visibility = "hidden";
}

setTimeout(function loading(){

  logoG1.style.animation = "separate1 0.8s ease-in";
  logoD1.style.animation = "separate2 0.8s ease-in";

  setTimeout(function separation(){

    logoG1.style.left = "-1800px";
    logoD1.style.right = "-1800px";
    logoDiv.style.visibility ="hidden";
    for (var i = 1 ; i < 7 ; i++){
      divbubble[i].style.visibility = "visible";
    }

    setTimeout(function bubble(){

      divbubble[1].style.animation = "floatA 1s linear";
      divbubble[2].style.animation = "floatB 1s linear";
      divbubble[3].style.animation = "floatC 1s linear";
      divbubble[4].style.animation = "floatD 1s linear";
      divbubble[5].style.animation = "floatE 1s linear";
      divbubble[6].style.animation = "floatF 1s linear";

      setTimeout(function (){

        divbubble[1].style.right = "-1800px";
        divbubble[2].style.right = "1800px";
        divbubble[3].style.top = "-500px";
        divbubble[4].style.top = "-500px";
        divbubble[5].style.top = "-500px";
        divbubble[6].style.top = "-500px";

      }, 1000);

    }, 0.001);

  }, 800);

}, 1200);