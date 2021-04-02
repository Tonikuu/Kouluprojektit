function järjestä()
{
    var eka = parseInt(document.getElementById("eka").value);
    var toka = parseInt(document.getElementById("toka").value);
    var kolmas = parseInt(document.getElementById("kolmas").value);
    
var taulukko = [eka,toka,kolmas];

taulukko.sort((a,b) => a - b);

document.getElementById("vastaus1").innerHTML = taulukko;
}

function pienisuuri()
{
    var eka = parseInt(document.getElementById("tehtävä2.1").value);
   var toka = parseInt(document.getElementById("tehtävä2.2").value);
   var kolmas = parseInt(document.getElementById("tehtävä2.3").value);
   var neljäs = parseInt(document.getElementById("tehtävä2.4").value);
   var viides = parseInt(document.getElementById("tehtävä2.5").value);

   var taulukko = [eka, toka, kolmas, neljäs, viides];

   taulukko.sort((a,b) => a - b);
   
   document.getElementById("vastaus2").innerHTML = "pienin " + taulukko.shift() + "<br>" + "suurin " + taulukko.pop();
}


function pariVaiEi()
{
    var luku = parseInt(document.getElementById("tehtävä3").value);

    if(luku %2)
    {
        document.getElementById("vastaus3").innerHTML = "Pariton tuo pirulainen on"
    }
    else if (luku == 0)
    {
        document.getElementById("vastaus3").innerHTML = "Virallisen tiedon mukaan myös nolla on parillinen, eikö olekkin jännää?"
    }

    else
    {
        document.getElementById("vastaus3").innerHTML = "Parillinenhan tuo näyttää olevan"
    }
}

function ika()
{
    var ikä = parseInt(document.getElementById("ikä").value);
    
    if(ikä < 15)
    {
        document.getElementById("vastaus4").innerHTML = "Se on kuule apostolinkyyti sun juttu"
    }

    else if(ikä < 16)
    {
        document.getElementById("vastaus4").innerHTML = "Mopolla, traktorilla, mönkijällä taikka mopoautolla on sun juttus"
    }

    else if (ikä < 18)
    {
        document.getElementById("vastaus4").innerHTML = "Kevarilla voipi päästellä"

    }
    else
    {
        document.getElementById("vastaus4").innerHTML = "No nyt saat lainata sitä faijan BMW:tä (muista toki kysyy lupa faijalta)"

    }
}

function kaanna()
{
    var kieli = (document.getElementById("kieli").value);

    if(kieli === "eng")
    {
        document.getElementById("vastaus5").innerHTML = "Hello World!"
    }

    else if(kieli === "swe")
    {
        document.getElementById("vastaus5").innerHTML = "Hej Världen!"
    }

    else if(kieli === "esp")
    {
        document.getElementById("vastaus5").innerHTML = "Hola Mundo!"
    }

    else
    {
        document.getElementById("vastaus5").innerHTML = "Tere, Maailm!"
    }
} 