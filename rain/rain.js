$('head').append("<link rel='stylesheet' type='text/css' href='rain/rain.css' />");
$(document).ready(function(){
    var size = 10;
    var timeout = 15;
    var num = 6;
    var max_speed = 4;
    var max_lines = Math.round(Math.random()*4)+3;
    var start_y = -1 * num * size;    
    
    $('body').append('<div id="background"></div>');
    $('#background').css('top', 0);
    var html = "<div id='cell-container'></div>";
    $('#background').append(html);

    function drip(cell, x, speed){
	var tops = $("#"+cell).position().top + speed;
	$("#"+cell).css('top', tops);
	if($("#"+cell).position().top > $(window).height()){
	    var next_x = Math.round(Math.random()*($(window).width()/size))*size;
	    var opacity = Math.random() * (0.75) + 0.15;
	    $("#"+cell).css('opacity', opacity);
	    $("#"+cell).css('left', next_x);
	    $("#"+cell).css('top', start_y);
	    speed = Math.round(Math.random()*4+1);
	    x = next_x;
	}
	setTimeout(function(){
	    drip(cell, x, speed);
	}, 17);
    }

    for(i = 0; i < max_lines; i++){
        var speed = Math.random()*max_speed+1;
        var next_x = Math.round(Math.random()*($(window).width() - 2 * size) + size);
        var cell_name = "cell_"+i;
        var cell_html = '<div id="'+cell_name+'" class="cell"></div>';
        $('#cell-container').append(cell_html);
        $("#"+cell_name).css('left', next_x);
        $("#"+cell_name).css({'width': size, 'height': num * size });
        $("#"+cell_name).css('top', start_y - next_x);
        drip(cell_name, next_x, speed);
    }    

});
