var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

var key = "firstname";
var value = "Luke";


document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
        document.addEventListener("resume", onResume, false);
        document.addEventListener("pause", onPause, false);
        
        launched_count++;
        updateDisplay();
        
        alert("device ready");
        alert("Stored Key: ");
        alert("Stored Value: " + Value);
        
        window.localstorage.setItem(key, value);
        var Output = window.localstorage.getItem(key);
        
        alert(Output);
        
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
