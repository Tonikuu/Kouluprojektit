function negaVaiEi() 
{
var luku;
luku = parseInt(document.getElementById('nro').value);
{
if(luku < 0)
{
    document.getElementById("vastaus1").innerHTML = "Luku on negatiivinen";
}

else if(luku == 0)
{
    document.getElementById("vastaus1").innerHTML = "Luku on nolla, onko se sitten positiivinen vai negatiivinen, niin en tiedä";
}

else 
{
    document.getElementById("vastaus1").innerHTML = "Luku on positiivinen";
}
}
}


function viikonpäivä()
{
 var vko;
 vko = parseInt(document.getElementById('vko').value);
 {
     switch(vko)
     {
         case 1:
            document.getElementById("vastaus2").innerHTML = "Maanantai"
            break;

         case 2:
            document.getElementById("vastaus2").innerHTML = "Tiistai"
            break;

         case 3:
            document.getElementById("vastaus2").innerHTML = "Keskiviikko"
            break;

            case 4:
                document.getElementById("vastaus2").innerHTML = "Torstai"
            break;

            case 5:
                document.getElementById("vastaus2").innerHTML = "Perjantai"
                break;

            case 6:
                document.getElementById("vastaus2").innerHTML = "Lauantai"
                break;

            case 7:
                document.getElementById("vastaus2").innerHTML = "Sunnuntai"
                break;

            default:
                document.getElementById("vastaus2").innerHTML = "Syötä arvo väliltä 1-7"

     

        

     }
 }
}

function vuosiluku()
{
    var year;
    year = parseInt(document.getElementById('vuosi').value);
    {
        if(year % 4 == 0  && year % 100 != 0)
        {
            document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi"
        }

        else if(year % 400 == 0)
        {
            document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi"
        }
    
        else
        {
            document.getElementById("vastaus3").innerHTML = "Vuosi ei ole karkausvuosi"
        }
    }

}

function summaa()
{
    var eka;
    var toka;
    var kolmas;
    var neljäs;
    var viides;
    var summa;
    var keskiarvo;

    eka = parseInt(document.getElementById("ekaluku").value);
    toka = parseInt(document.getElementById("tokaluku").value);
    kolmas = parseInt(document.getElementById("kolmasluku").value);
    neljäs = parseInt(document.getElementById("neljäsluku").value);
    viides = parseInt(document.getElementById("viidesluku").value);
    summa = eka + toka + kolmas + neljäs + viides;
    keskiarvo = summa / 5




    document.getElementById("vastaus4").innerHTML = "lukujen summa on: " + summa + "<br> ja keskiarvo on: " + keskiarvo;

    
}

function lauseke()
{
    var luku = parseInt(document.getElementById('luku').value);
    var lause = "";

    for(var k=1;k<=10;k++)

    {
       lause += luku + " x " + k + " = " + luku * k + " \n";
       
    }

    document.getElementById('vastaus5').innerHTML = "<pre>" + lause + "<\pre>";
 }
