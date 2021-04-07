function scrabble() {
  var pisteet = 0;

  var sana = document.getElementById("sana").value.toLowerCase();

  for (var i = 0; i <= sana.length; i++) {
    switch (sana[i]) {
      case "a":
      case "e":
      case "i":
      case "n":
      case "s":
      case "t":
        pisteet++;
        break;

      case "o":
      case "ä":
      case "k":
      case "l":
        pisteet += 2;
        break;

      case "u":
      case "m":
        pisteet += 3;
        break;

      case "y":
      case "h":
      case "j":
      case "p":
      case "r":
      case "v":
        pisteet += 4;
        break;

      case "ö":
      case "d":
        pisteet += 7;
        break;

      case "b":
      case "f":
      case "g":
        pisteet += 8;
        break;

      case "c":
        pisteet += 10;
        break;

      default:
        pisteet += 12;
    }
  }

  alert("Sanasta: " + sana + " saa yhteensä: " + pisteet + " pistettä");
}

function lotto() {
  var numerot = [];
  var temp;
  for (var lotto = 0; lotto < 7; lotto++) {
    temp = Math.floor(Math.random() * 40) + 1;
    numerot[lotto] = temp;
  }
  numerot.sort((a, b) => a - b);
  alert("Lottonumerosi ovat: " + numerot);
}

function taulukko() {
  var jono = [];
  jono = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  var taulu =
    '<table border="1", style="text-align:center; background: white; font-weight:bold">';
  for (var j = 0; j < jono.length; j++) {
    taulu += "<tr>";
    for (var k = 0; k < jono[j].length; k++) {
      taulu += "<td>" + jono[j][k] + "</td>";
    }
    taulu += "</tr>";
  }
  taulu += "</table>";
  document.getElementById("tulos").innerHTML = taulu;
}

function kortit() {
  var pakka = [""];
  var maat = ["&#9828;", "&#9827;", "&#9826;", "&#9825;"];

  var numerot = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  laskuri = 0;
  for (m = 0; m < maat.length; m++) {
    for (n = 0; n < numerot.length; n++) {
      if (m == maat.length - 1 && n == numerot.length - 1) {
        pakka[laskuri] = maat[m] + numerot[n];
      } else {
        pakka[laskuri] = maat[m] + numerot[n];
        laskuri++;
      }
    }
  }
  var kortit = [];
  for (l = 0; l < 5; l++) {
    temp = pakka[Math.floor(Math.random() * 52)];
    kortit[l] = temp;
  }
  document.getElementById("pakka").innerHTML = kortit;
}
