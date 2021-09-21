function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log('the bg color is ' + bgColor);

  
    document.body.style.background = bgColor;
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
let allimages = ["images/Ananas/_.jpeg","images/Chihuahua/_.jpeg","images/English Setter/_.jpeg", "images/Fireguard/_.jpeg", "images/Firescreen/_.jpeg","images/Garden Spider/_.jpeg","images/Goblet/_.jpeg","images/Jersey/_.jpeg","images/Jigsaw Puzzle/_.jpeg","images/Kimono/_.jpeg","images/Lampshade/_.jpeg","images/Mitten/_.jpeg","images/One-Armed Bandit/_.jpeg","images/Organ/_.jpeg","images/Perfume/_.jpeg","images/Pineapple/_.jpeg","images/Red Wine/_.jpeg","images/Screen/_.jpeg","images/Spider Web/_.jpeg","images/Spotlight/_.jpeg","images/Stage/_.jpeg","images/Theatre Curtain/_.jpeg","images/Vase/_.jpeg","images/West Highland white terrier/_.jpeg","images/Window/_.jpeg"];

var number = Math.floor(Math.random()*allimages.length);
console.log("number" + number);


var randomimage = 




document.getElementById ('pictures').src= ramdomimage;
// document.write(images[index]);


}
 getRandomImage()


 