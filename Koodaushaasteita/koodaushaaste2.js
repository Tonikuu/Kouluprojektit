

function pienetisot(taulukko) {
  taulukko.sort();
  var pienin = taulukko.shift();
  var isoin = taulukko.pop();

  console.log("Pienin " + pienin +" " + "ja suurin on " + isoin);

}

function parillinen_kö(val) {
  if (val%2 == 0) {
    console.log(val + " on parillinen luku");
  }
  else {
    console.log(val + "  ei ole parillinen luku")
  }
}

function kuukaudet(val) {
  switch (val) {
    case 1:
    console.log("Tammikuu")
      break;
    case 2:
    console.log("Helmikuu")
      break;
    case 3:
    console.log("Maaliskuu")
      break;
    case 4:
    console.log("Huhtikuu")
      break;
    case 5:
    console.log("Toukokuu")
      break;
    case 6:
    console.log("Kesäkuu")
      break;
    case 7:
    console.log("Heinäkuu")
      break;
    case 8:
    console.log("Elokuu")
      break;
    case 9:
    console.log("Syyskuu")
      break;
    case 10:
    console.log("Lokakuu")
      break;
    case 11:
    console.log("Marraskuu")
      break;
    case 12:
    console.log("Joulukuu")
      break;
    default:
    console.log("Kuukausia on vain 12, joten anna arvo 1-12")


  }

}

function tiedot(etunimi, sukunimi, osoite, postinumero, paikka, puh, email )
{
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.osoite = osoite,
  this.postinumero = postinumero,
  this.paikka = paikka,
  this.puhelinnumero = puh,
  this.sahkoposti = email
}

var Toni = new tiedot("Toni", "Kuukkanen", "Joku tosi kiva osoite",
"00000", "Deathstar", "0700123123", "itsover9k@happy.com");
function nimi() {
  console.log(Toni.sukunimi)
}
function sanat(teksti)
{
var aakkoset = Array.from(teksti);
aakkoset.sort();

var text = aakkoset.join('');
console.log(text);
}


