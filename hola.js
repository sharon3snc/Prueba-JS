function calculator(name1,name2) {
    var n= math.random() *100;
    var msg;

    if (n>80) {msg= "Genial! Sois el amor de vuestra vida!";}
    else if (n>50) {msg= "Hay posibilidades";}
    else {msg= "No hay manera";}

    return{
        value:n,
        message:msg,
        name1:name1,
        name2:name2,
    };
}

function calcular(){
    document.getElementById("loading").classList.remove('hidden');

    setTimeout(function(){
        document.getElementById("loading").classList.add('hidden');

        var comment= document.getElementById ("result_comment");
        comment.innerHTML=afinidad.message;
        comment.classList.remove('hidden');

        var value= document.getElementById("result_value");
        value.classList=remove('hidden');
        value.innerHTML= "Vuestra afinidad es: " + afinidad.value.toFixed(1) + "% " },3000);


    var name1= document.getElementById('name1').value;
    var name2= document.getElementById('name2').value;

    var afinidad=calculator(name1,name2);
    console.log(name1,name2,afinidad);
}

console.log ("Hola");



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
        console.log(response);
    })
    .then(function(data) {
        console.log(data.title);
    })
    .catch(function(err){
        console.log(err);
    })



