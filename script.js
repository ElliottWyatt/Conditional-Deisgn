function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log('the bg color is ' + bgColor);

  
    document.body.style.background = bgColor;
    //document.getElementById("maincontainer") = bgColor;
    document.getElementById('text').style.color = bgColor;
  
  }

random_bg_color();


// function random_text_size(min, max){
//   min = Math.ceil(15);
//   max = Math.floor(20);
//   var txt = Math.floor(Math.random() * (max - min) + min); 
 
  
// var txtSize= txt + "px";
//   console.log(txtSize);
//   document.getElementById('txt').style.fontSize = txtSize;
// }

// var randomImage = new Array();



// //let randomimage = ['https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/Chihuahua.jpeg?raw=true', 'https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/English%20setter.jpeg?raw=true', 'https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/ananas.jpeg?raw=true', 'https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/fireguard.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/firescreen.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/garden%20spider.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/goblet.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/jersey.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/jigsaw%20puzzle.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/kimono.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/lampshade.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/mitten.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/one-armed%20bandit.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/organ.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/perfume.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/pineapple.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/red%20wine.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/screen.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/spider%20web.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/spotlight.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/stage.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/theater%20curtain.jpeg?raw=true','https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/window.jpeg?raw=true']
// console.log(pictures);



function getRandomImage() {
  console.log('Test');
// var imagearray= new
const Ananas = ["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Ananas/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Ananas/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Ananas/3.jpeg?raw=true",];
const Chihuahua =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Chihuahua/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Chihuahua/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Chihuahua/3.jpeg?raw=true"];
const EnglishSetter =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/English%20Setter/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/English%20Setter/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/English%20Setter/3.jpeg?raw=true"];
const Fireguard =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Fireguard/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Fireguard/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Fireguard/3.jpeg?raw=true"];
const Firescreen =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Firescreen/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Firescreen/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Firescreen/3.jpeg?raw=true"];
const GardenSpider =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Garden%20Spider/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Garden%20Spider/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Garden%20Spider/3.jpeg?raw=true"];
const Goblet =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Goblet/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Goblet/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Goblet/3.jpeg?raw=true"];
const Jersey =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jersey/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jersey/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jersey/3.jpeg?raw=true"];
const Kimono =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/1.jpg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/2.jpeg?raw=true", "https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/3.jpeg?raw=true",];
const Lampshade =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/2.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Lampshade/3.jpg?raw=true"];
const Mitten =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Mitten/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Mitten/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Mitten/3.jpeg?raw=true"];
const OneArmedBandit =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/One-Armed%20Bandit/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/One-Armed%20Bandit/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/One-Armed%20Bandit/3.jpeg?raw=true"];
const Organ =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Organ/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Organ/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Organ/3.jpeg?raw=true"];
const Perfume =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Perfume/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Perfume/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Perfume/3.jpeg?raw=true"];
const Pineapple =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Pineapple/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Pineapple/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Pineapple/3.jpeg?raw=true"];
const Puzzle =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jigsaw%20Puzzle/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jigsaw%20Puzzle/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Jigsaw%20Puzzle/3.jpeg?raw=true"];
const RedWine =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Red%20Wine/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Red%20Wine/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Red%20Wine/3.jpeg?raw=true"];
const Screen =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Screen/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Screen/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Screen/3.jpeg?raw=true"];
const SpiderWeb =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spider%20Web/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spider%20Web/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spider%20Web/3.jpeg?raw=true"];
const Spotlight =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spotlight/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spotlight/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Spotlight/3.jpeg?raw=true"];
const Stage =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Stage/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Stage/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Stage/3.jpeg?raw=true"];
const TheatreCurtain =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Theatre%20Curtain/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Theatre%20Curtain/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Theatre%20Curtain/3.jpeg?raw=true"];
const Vase =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Vase/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Vase/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Vase/3.jpeg?raw=true"]
const WestHighlandWhiteTerrier =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/West%20Highland%20white%20terrier/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/West%20Highland%20white%20terrier/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/West%20Highland%20white%20terrier/3.jpeg?raw=true"]
const Windows =["https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Window/1.jpg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Window/2.jpeg?raw=true","https://github.com/ElliottWyatt/Conditional-Deisgn/blob/main/images/Window/3.jpeg?raw=true"]
const arraylist = [Ananas, Chihuahua, EnglishSetter, Fireguard, Firescreen, GardenSpider, Goblet, Jersey, Puzzle, Kimono, Lampshade, Mitten, OneArmedBandit, Organ, Perfume, Pineapple, RedWine, Screen, SpiderWeb, Spotlight, Stage, TheatreCurtain, Vase, WestHighlandWhiteTerrier, Windows,]
const titlearray = ["Ananas","chihuahua","English Setter","Fire Guard","Fire Screen","Garden Spider","Goblet","Jersey","Puzzle","Kimono","Lampshade","Mitten","One-Armed Bandit","Organ","Perfume","Pineapple","Red Wine","Screen","Spider Web","Spot Light","Stage","Theatre Curtain","vase","West Highland Terrier","Windows"]
let count = Math.round(Math.random()*arraylist.length);
if (count == 25){
  count =24;
}
console.log(count);



for (let i=0; i < arraylist[count].length; i++){
  if (i==0){
    continue;
  } else {
    console.log(arraylist[count][i]);
    let createimg = document.getElementById("picturez");
    createimg.style.backgroundImage = "url("+arraylist[count][i]+")";
    createimg.style.position = "relative";
    //let Margin = Math.random()*80+1 + "vw";
    //let topMargin = Math.random()*45+1 + "vh";
    min = Math.ceil(500);
    max = Math.floor(600);
    createimg.style.height = Math.floor(Math.random() * (max - min) + min) + "px";
    createimg.style.width = Math.floor(Math.random() * (max - min) + min) + "px";
    createimg.style.backgroundSize = "100%";
    createimg.style.opacity = "100%";
    createimg.style.display = "block";
    //document.body.append(createimg);
  }
};


for (let i=0; i < arraylist[count].length; i++){
  if (i==0){
    continue;
  } else {
    let createimg = document.getElementById("biggerdiv");
    createimg.style.backgroundImage = "url("+arraylist[count]+")";
    createimg.style.position = "relative";
    
    createimg.style.backgroundSize = "5%";
    createimg.style.opacity = "80%";
    createimg.style.display = "block";
    document.body.append(createimg);
  }
  
};
//title
for (let i=0; i < arraylist.length; i++){
  if (i==0){
    continue;
  } else {
    let createtxt = document.getElementById("titletext");
    createtxt.innerHTML = titlearray[count];
    createtxt.style.color = "lightgrey";
    createtxt.style.textalign = "center";
    createtxt.style.fontSize = "40pt"
  
};
}
}
 getRandomImage();
