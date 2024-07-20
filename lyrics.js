const lyrics = [
`i drank a million billion beers
and got in my truck and lord i'm drunk
and i ain't drove this bad in a billion years
and this torn-up chevy's a piece of junk`,

`but baby when it rains i drink
and lately it's been raining a lot
so maybe you and me can link
but first i gotta get to your spot`,

`i'm swerving smashing into every tree
deer and haybale this cowboy sees and
these torn tires are turning mud
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
these torn tires are turning mud
and the more i drink yeah the more it floods`,

`oh lady let me love you the right way
i need you on this country night babe
yeah it's a ten-minute from my place
but first i gotta make it out of my driveway`
];

let i = 0;
let j = 0;

const body = document.body;
const div = body.querySelector('div');

function iterate(verse) {
  const lines = verse.split('\n');
  div.innerText = lines[j];
  j = (j + 1) % 4;
}

body.onkeyup = (e) => {
  if (e.keyCode === 32) {
    let verse = lyrics[i]
    body.style.backgroundImage = `url("${i}.jpg")`;
    body.onclick = () => { iterate(verse) };
    i = (i + 1) % 8;
  }
}
