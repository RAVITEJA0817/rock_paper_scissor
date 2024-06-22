var var1 = Math.floor((Math.random() * 3) + 1);
var cc = ''
if (var1 === 1) {
    var cc = "rock"
}
else if (var1 === 2) {
    var cc = "paper"
}
else {
    var cc = "scissor"
}

document.getElementById('btn4').addEventListener('click', funct1)
function funct1() {
    window.location.reload();

}

var className = document.getElementsByClassName('btn1')
for (var i = 0; i <= className.length; i++) {
    var res2 = className[i].innerHTML;
    className[i].addEventListener('click', myfunct)

    function myfunct() {
        var fres = " "
        if (res2 === cc) {
            fres += "tie"
        }
        else if (res2 === "rock" && cc === "paper") {
            fres += "computer won"
        }
        else if (res2 === "rock" && cc === "scissor") {
            fres += "you won"
        }
        else if (res2 === "paper" && cc === "rock") {
            fres += "you won"
        }
        else if (res2 === "paper" && cc === "scissor") {
            fres += "computer won"
        }
        else if (res2 === "scissor" && cc === "rock") {
            fres += "computer won"
        }
        else if (res2 === "scissor" && cc === "paper") {
            fres += "you won"
        }
        document.getElementById('r1').innerHTML += `You choosen ${res2} and computer choosen ${cc}`
        document.getElementById('result').innerHTML = `${fres}`
    }
}
