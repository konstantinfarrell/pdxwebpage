<?php
    $title = "Man, just look at that.";
    include('lib/header.php');
?>
<body>
    <script type="text/javascript" src="quotes.js"></script>
    <script type="text/javascript" src="colors/colors.js"></script>
    <div class='push'></div>
    <div id='contents'>
	<div class='text-center'><h2><strong id='quote'></strong> - You, probably.</h2></div>
	<br />
	<script type="text/javascript" src="http://konstantinfarrell.github.io/static/js/credit.js"></script>
    </div>
    <br />
    <div>
	<div class='text-center'>
	    <span id='visibility' class='glyphicon glyphicon-eye-close' title='Hide Text'></span>&nbsp;
	    <span id='fullscreen' class='glyphicon glyphicon-fullscreen' title='Full Screen'></span>
	</div>
    </div>
    <script>
	$(document).ready(function(){
	$('#fullscreen').click(function(e){
	    toggleFullScreen();
	});

	function toggleFullScreen() {
	  if (!document.fullscreenElement &&    // alternative standard method
	      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
	    if (document.documentElement.requestFullscreen) {
	      document.documentElement.requestFullscreen();
	    } else if (document.documentElement.msRequestFullscreen) {
	      document.documentElement.msRequestFullscreen();
	    } else if (document.documentElement.mozRequestFullScreen) {
	      document.documentElement.mozRequestFullScreen();
	    } else if (document.documentElement.webkitRequestFullscreen) {
	      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	    } else if (typeof window.ActiveXObject !== "undefined") {
    		// Older IE.
    		var wscript = new ActiveXObject("WScript.Shell");

    		if (wscript !== null) {
      		    wscript.SendKeys("{F11}");
    		}
  	    }
	  } else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.msExitFullscreen) {
	      document.msExitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	      document.webkitExitFullscreen();
	    }
	  }
	}	
	});
    </script>
</body>
