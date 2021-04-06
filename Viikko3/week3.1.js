function parilliset() {
    var luku = parseInt(document.getElementById("1task").value);
    var jono = "<p>";

    for(var i = 2; i <= luku; i= i+2)
    {
        jono+=i;
        jono+=" ";
    }
    jono+="</p>";
        document.getElementById("tulos").innerHTML = jono;
}


function salasana(){
    var sana = document.getElementById("2task").value;
    var salasana = "<p>";

    for(var j = 0; j < sana.length; j++)
    {
        salasana += sana[j] + "Ö";
    }
    salasana += "</p>";
    document.getElementById("tulos2").innerHTML = salasana;
}

function onkoVaiEi(){
    var sana = document.getElementById("3task").value;
    var tarkista = sana.search(/ö/i);
    

    if(tarkista === -1)
    {
        document.getElementById("tulos3").innerHTML = "Ei löydy";
    }
    else if(tarkista === 0)
    {
        document.getElementById("tulos3").innerHTML = "Löytyyhän sieltä";
    }
}

function kertoma(){
    var luku = parseInt(document.getElementById("4task").value);
    var kertoma = 1;

    for(var i = 1; i <= luku; i++)
    {
    kertoma*=i;
    }
    document.getElementById("tulos4").innerHTML = "<p>Luvun " + luku + " kertoma on " +kertoma + "</p>";
}

function jyrinHeijaa(){
    var tulos = "";
    for(var i = 1; i <=100; i++)
    {
        if(i%3==0 && i%5==0)
        {
            tulos+="Hip Heijaa ";
        }
        else if(i%5==0)
        {
            tulos+="Heijaa ";
        }
        else if(i%3==0)
        {
            tulos+="Hip ";
        }
        else {
            tulos+=i+" ";
        }
        document.getElementById("tulos5").innerHTML = tulos;
    }
}

function yhestKybää(){
    var luku = "<p>";

    for(var i = 1; i <= 10; i++)
    {
        luku += i + " ";
    }
    luku += "</p>";
    document.getElementById("tulos6").innerHTML = luku;
}

function yhteen(){
    var yht = 0;

    for(var i = 1; i <= 10; i++)
    {
        yht += i;
    }
    document.getElementById("tulos7").innerHTML = "<p>" + yht + "</p>";
}

function potenssi()
{
 var korotus = document.getElementById("ekaluku").value;
 var potenssi = document.getElementById("tokaluku").value;
 yhteensä = korotus;
 for(var i = 1; i < potenssi; i++)
 {
     yhteensä *= korotus;
 }   

 document.getElementById("tulos8").innerHTML = "<p>" + yhteensä + "</p>";
}

function suurinPienin()
{
    var taulu = [], temp;
    for(var i = 0; i < 5; i++)
    {
        temp = document.getElementById('taulukko['+i+']').value;
       // temp = parseInt(temp);
        taulu.push(temp);
    }
    taulu = taulu.sort((a,b) => a-b);
    document.getElementById("tulos9").innerHTML = "<p>Pienin luku: " + taulu[0] + "<br> ja suurin luku on: " + taulu[taulu.length-1];
}

function salis()
{
    var sana = document.getElementById("salisRandom").value;
    var salasana = "<p>";
    var aakkoset = "abcdefghjiklmnopqrstuvwxyzåäö"

    for(var j = 0; j < sana.length; j++)
    {
        salasana += sana[j] + aakkoset.charAt(Math.floor(Math.random()*29));
    }
    salasana += "</p>";
    document.getElementById("tulos10").innerHTML = salasana;
}
function kaksiNumeroa()
{
    var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut="",rluvut="";
    nro1 = parseInt(document.getElementById("seEka").value);
    nro2 = document.getElementById("seToka").value;
    
    if(nro1%2 == 0)
    {
        palku = nro1;
    }
    else {
        palku = nro1+1;
    }
    for(var b = palku; b <= nro2; b+=2)
    {
        pluvut += b + " ";
        psumma += b;

    }

    if(nro1%2 == 0)
    {
        ralku = nro1+1;
    }
    else{
        ralku = nro1;
    }
    for(var r = ralku; r<=nro2; r+=2)
    {
        rluvut += r +" ";
        rsumma += r;
    }
    document.getElementById("tulos11").innerHTML = "<p>Parilliset numerot: " + pluvut + " ja niiden summa: " + psumma + "</p><p>Parittomat luvut: " + rluvut + " ja niiden summa: " + rsumma + "</p>";
}
