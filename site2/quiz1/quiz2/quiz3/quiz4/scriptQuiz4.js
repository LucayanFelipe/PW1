const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const hiddenbutton = document.getElementById("hiddenbutton");
const hiddenbutton2 = document.getElementById("hiddenbutton2");

bt1.addEventListener("click", function () {
    var img = document.getElementById("img1");
    img.src = "../../../../../img/FiosVermelhoQuebrado.png";
    var pAcertou = document.getElementById("pAcertou");
    pAcertou.innerHTML = "PARABENS! NAO EXPLODIU!";
    hiddenbutton.style.fontSize = "40 px";
    hiddenbutton.innerHTML = "PROSSEGUIR";
    hiddenbutton.style.border = "solid 1px";
})

bt2.addEventListener("click", function () {
    var img2 = document.getElementById("img1");
    img2.src = "../../../../../img/logo-ACDC.png";
    document.body.style.background = "black";
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = "";

    var audioElement0 = document.createElement('audio');
    audioElement0.setAttribute('src', '../../../../../sound/Explosion.mp3');
    audioElement0.setAttribute('autoplay', 'autoplay');
    audioElement0.setAttribute('loop', 'loop');
    audioElement0.play();
    var imgEx1 = document.createElement('img');
    imgEx1.src = "../../../../../img/explosion.gif";
    imgEx1.style.width = "1000px";
    imgEx1.style.position = "relative";
    imgEx1.style.bottom = "1400px";
    document.body.appendChild(imgEx1);
    hiddenbutton.innerHTML = "";
    hiddenbutton.style.border = "none 0px";
    hiddenbutton.style.backgroundColor = "black";
    hiddenbutton2.style.backgroundColor = "white";
    hiddenbutton2.innerHTML = "EXPLODIU MEU DEUS";
})


