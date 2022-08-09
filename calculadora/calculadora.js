function criaBotaoNumero(val) {
    var button = document.createElement("input");
        button.setAttribute("value", val);
        button.setAttribute("type", "button");
        button.setAttribute("class", "col p-3");
        button.setAttribute("onclick", `input('${val}')`);

    return button;
}

var btnDel = document.createElement("input");
    btnDel.setAttribute("id", "del");
    btnDel.setAttribute("value", "DEL");
    btnDel.setAttribute("type", "button");
    btnDel.setAttribute("onclick", "del()");

var btnReset = document.createElement("input");
    btnReset.setAttribute("id", "reset");
    btnReset.setAttribute("value", "RESET");
    btnReset.setAttribute("type", "button");
    btnReset.setAttribute("onclick", "reset()");

var btnEquals = document.createElement("input");
    btnEquals.setAttribute("id", "equals");
    btnEquals.setAttribute("value", "=");
    btnEquals.setAttribute("type", "button");
    btnEquals.setAttribute("onclick", "calc()");



{
    var tela = document.createElement("input");
        tela.setAttribute("id", "result");
        tela.setAttribute("type", "text");
        tela.setAttribute("disabled", "");
        tela.setAttribute("placeholder", "0");
}


{
    var linha0 = document.createElement("div");
        linha0.setAttribute("class", "row");
        linha0.appendChild(tela);


    var linha1 = document.createElement("div");
        linha1.setAttribute("class", "row");
        linha1.appendChild(criaBotaoNumero(7));
        linha1.appendChild(criaBotaoNumero(8));
        linha1.appendChild(criaBotaoNumero(9));
        linha1.appendChild(btnDel);


    var linha2 = document.createElement("div");
        linha2.setAttribute("class", "row");
        linha2.appendChild(criaBotaoNumero(4));
        linha2.appendChild(criaBotaoNumero(5));
        linha2.appendChild(criaBotaoNumero(6));
        linha2.appendChild(criaBotaoNumero('+'));


    var linha3 = document.createElement("div");
        linha3.setAttribute("class", "row");
        linha3.appendChild(criaBotaoNumero(1));
        linha3.appendChild(criaBotaoNumero(2));
        linha3.appendChild(criaBotaoNumero(3));
        linha3.appendChild(criaBotaoNumero('-'));


    var linha4 = document.createElement("div");
        linha4.setAttribute("class", "row");
        linha4.appendChild(criaBotaoNumero('.'));
        linha4.appendChild(criaBotaoNumero(0));
        linha4.appendChild(criaBotaoNumero('/'));
        linha4.appendChild(criaBotaoNumero('*'));

    var linha5 = document.createElement("div")
        linha5.setAttribute("class", "row");
        linha5.appendChild(btnReset);
        linha5.appendChild(btnEquals);
}

var div = document.getElementById("container");
    div.setAttribute("class", "container");
    div.appendChild(linha0);
    div.appendChild(linha1);
    div.appendChild(linha2);
    div.appendChild(linha3);
    div.appendChild(linha4);
    div.appendChild(linha5);


let result = document.getElementById("result");

function input(num) {
    let number = result.value;
    result.value = number + num;
}

function calc() {
    if (result.value != "") {
        let result2 = result.value;
        result.value = eval(result2)
    } 
}

function reset() {
    result.value = "";
}

function del() {
    let result2 = result.value;
    result.value = result2.substring(0, result2.length - 1);
}