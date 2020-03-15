var imagenames = ["cane", "casa", "dado", "dito", "luna", "mago", "mano", "mela", "muro", "nove", "pera", "pila", "rana", "rete", "rosa", "sale", "sole", "tana", "topo", "toro"];
var lastrng = 0;
var imagerng;


function newimage(){
    while(true){
        imagerng = Math.floor(Math.random() * 100);

        if(imagerng <= 20){
            if(imagerng != 0){
                if(imagerng != lastrng){
                    lastrng = imagerng;
                    document.getElementById('image').setAttribute("src", './res/images/' + imagenames[imagerng] + '.png');
                    break;
                }
            }
        }
    }
}

function check(){
    document.getElementById('text').value = document.getElementById('text').value.toUpperCase();
    if(document.getElementById('text').value.length == 4){
        if(document.getElementById('text').value.toLowerCase() == imagenames[imagerng]){
            hidecontrols(true);
            newimage();
            document.getElementById('text').value = null;
        }
        else{
            hidecontrols(false);
            document.getElementById('text').value = null;
        }
    }
}

function hidecontrols(correct){

    if(correct){
        document.getElementById('emo').setAttribute("src", './res/smiley/smile' + imagerng + '.jpg');
        console.log("si")
    }
    else{
        document.getElementById('emo').setAttribute("src", './res/ops.JPG');
        console.log("no")
    }


    document.getElementById('image').style.visibility = "hidden";
    document.getElementById('text').style.visibility = "hidden";
    document.getElementById('emo').style.visibility = "visible";

    setTimeout(showcontrols, 3000);
}

var showcontrols = function(){
    document.getElementById('image').style.visibility = "visible";
    document.getElementById('text').style.visibility = "visible";
    document.getElementById('emo').style.visibility = "hidden";
}