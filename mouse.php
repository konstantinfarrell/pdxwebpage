<div id="origin" class="text-muted"><span class="glyphicon glyphicon-info-sign"></span></div>
<div id="thing-script">
<script>
// Refresh this "well" div,
// and the coordinates shown above.
function refreshValues(){
    var thingCode = $("#thing-script").html();
    var thingHook = $("#thing-hook").html();

    $("#thing-hook").html(thingHook);
    $("#thing-script").html(thingCode);
    $("#code").text(thingCode + thingHook);
}

// Get current mouse coordinates.
// Called every mouse movement.
function getCoordinates(event){
    var x = event.clientX;
    var y = event.clientY;
    var coordinates = "X: " + x + "<br />Y: " + y;

    $("#thing").html(coordinates);
    refreshValues();
}
</script>
</div>
<div id="main-container" onmousemove="getCoordinates(event)">
<div class="container">
    <div class="text-center">
	<h1>Where's The Mouse?</h1>
	<div id="thing-hook">
<h4 class="text-success" id="thing">MOVE THE MOUSE<br />do it</h4>
	</div>
	<h3>Want that code? Get that code</h3>
    </div>
    <pre id="code"></pre>
    <br />
</div>
</div>
<script>
refreshValues();
$("#origin").click(function(){
    $("#origin").toggle("fade").promise().done(function(){
	$("#origin").html("<span class='glyphicon glyphicon-info-sign'></span> (0,0) <span class='glyphicon glyphicon-arrow-left'></span> Remember, the origin is here.");
	$("#origin").css("opacity", 1.0);
	$("#origin").toggle("fade");
    });
});
</script>
