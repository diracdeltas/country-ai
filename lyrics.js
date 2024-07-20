const lyrics = [
`well i drank a million billion beers
and got in my truck and lord i'm drunk
and i ain't drove this bad in a billion years
and this rusty chevy's a piece of junk`,

`but baby when it rains i drink
and lately it's been raining a lot
so maybe you and me can link
but first i gotta get to your spot`,

`i'm swerving smashing into every tree
deer and haybale this cowboy sees and
these tore-up tires are turning the mud
and the more i drink yeah the more it floods`,

`oh lady let me love you the right way
i need you on this country night babe
yeah it's a ten-minute from my place
but first i gotta make it out of my driveway`,

`well this country living it's what we do
we're fishing and grilling our cowboy boots
and girl i gotta see that body tonight
but first i gotta learn how to fking drive`,

`cuz baby when it rains i drink
and lately it's been raining a lot
so maybe you and me can link
but first i gotta get to your spot`,

`i'm swerving smashing into every tree
deer and haybale this cowboy sees and
these tore-up tires are turning the mud
and the more i drink yeah the more it floods`,

`oh lady let me love you the right way
i need you on this country night babe
yeah it's a ten-minute from my place
but first i gotta make it out of my driveway`
];

let i = 0;
let j = 0;
let verse;
let lines;

const body = document.body;
const div = body.querySelector('div');

function showLine() {
  div.innerText = lines[j];
}

body.onkeydown = (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
    if (j === 0) {
      // change screens
      verse = lyrics[i];
      lines = verse.split('\n');
      body.style.backgroundImage = `url("${i}.jpg")`;
      showLine();
      i = (i + 1) % 8;
    } else {
      // change lines
      showLine();
    }
    j = (j + 1) % 4;
  }
}
