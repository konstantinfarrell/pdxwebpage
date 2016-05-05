$(document).ready(function(){
    function randColor(){
	return Math.round(Math.random()*255);
    }

    function getColor(r,g,b){
	return "rgb("+r+","+g+","+b+")";
    }
    
    var r_i = true;
    var g_i = true;
    var b_i = true;

    function amount(value){
    	var add = Math.pow(-1, Math.floor(value/255));
	if(add == 1){
	    return value%255;
	} 
	return 255-(value%255);
    }

    function dtor(d){
	return d * (Math.PI/180);
    }

    function rtod(r){
	return r * (180/Math.PI);
    }

    var r = randColor();
    var g = randColor();
    var b = randColor();

    var delay = 80;

    function gradiate(r,g,b){
	var color = getColor(amount(r), amount(g), amount(b));
	$('#background').css('background-color', color);
	setTimeout(function(){
	    gradiate(r+1,g+1,b+1);
	}, delay);
    }
    gradiate(r,g,b);
});
