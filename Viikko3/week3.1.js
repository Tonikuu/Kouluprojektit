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
    console.log(tarkista);

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