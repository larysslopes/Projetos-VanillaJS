const turnOn = document.querySelector ("#turnOn");

const turnOff = document.querySelector('#turnOff');

const lamp = document.querySelector('#lamp');


function checkLamp(){
    return lamp.src.indexOf("quebrada") > -1

}
function lampOn(){
    if(!checkLamp () ) {
    lamp.src = 'ligada.jpg';
    }
}
turnOn.addEventListener ('click', lampOn);

function lampOff(){
    if(!checkLamp () ) {
    lamp.src = 'desligada.jpg';
    }
}

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);



function broken(){
    lamp.src = 'quebrada.jpg';
}

lamp.addEventListener('dblclick', broken);
