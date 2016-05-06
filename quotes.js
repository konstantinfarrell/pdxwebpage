$(document).ready(function(){
    var quotes = [
	"Huh. Cool.",
	"Neato.",
	"Ohh. 'Making it rain'. I get it now.",
	"This guy deserves copious amounts of money.",
	"Neat.",
	"This is calming.",
	"Does it work on mobile? It DOES??",
	"Well this is a strange mix of pointless and interesting.",
	"Ooooo! Colors!",
	"I like it.",
	"It's like The Matrix...during Easter.",
	"What? The words change? Nice.",
    ];
    var numquotes = quotes.length;
    var index = Math.round(Math.random()*numquotes) % (numquotes-1);
    var quote = '"' + quotes[index] + '"';
    $("#quote").text(quote);
    function newQuote(){
	var numquotes = quotes.length;
	var new_index = Math.round(Math.random()*numquotes) % numquotes;
	while(new_index == index){
	    new_index = Math.round(Math.random()*numquotes) % numquotes;
	}
	index = new_index;
	var quote = '"' + quotes[index] + '"';
	$("#quote").hide(1000).promise().done(function(){
	    $("#quote").text(quote).promise().done(function(){
	        $("#quote").show(750);
	    });
	});
	if(Math.round(Math.random()*10000) == 666){
	    $("#quote").text("Sieze the means of production.");
	}
	setTimeout(function(){
	    newQuote();
	}, 20000)
    }
    newQuote();

    var visible = true;
    $('#visibility').click(function(){
	if(visible){
	    $('#visibility').attr('title', 'Show Text');
	    $('#visibility').toggleClass("glyphicon-eye-close").toggleClass("glyphicon-eye-open");
	    $('#contents').hide(1200).promise().done(function(){
	        $('.push').animate({'height': '1%'});
	        visible = false;
	    });
	} else {
	    $('#visibility').toggleClass("glyphicon-eye-close").toggleClass("glyphicon-eye-open");
	    $('#visibility').attr('title', 'Hide Text');
	    $('.push').animate({'height': '33%'}).promise().done(function(){
	        $('#contents').show(600);
	        visible = true;
	    });
	}
    });
});
