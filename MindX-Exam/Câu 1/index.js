function showNumber(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    for(var result=a;result<=b;result++){
       
        console.log(Math.abs(result));
    }
}