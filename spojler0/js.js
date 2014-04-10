//Countdown function by charrllie all internets and money and bitches reserved
$( document ).ready(function(){
    setInterval( function() {
        var d1=new Date();
        var d2 = new Date(2014, 3, 14,3,45);
        
        var chuj = d2.getTime() - d1.getTime();
        
        var days = Math.floor(chuj/(1000*60*60*24));
        chuj -= days*(1000*60*60*24)
        var hours = Math.floor(chuj/(1000*60*60));
        chuj -= hours*(1000*60*60)
        var mins = Math.floor(chuj/(1000*60));
        chuj -= mins*(1000*60)
        var secs = Math.floor(chuj/(1000));
        
        if(hours <10) hours= "0" + hours;
        if(mins <10) mins= "0" + mins;
        if(secs <10) secs= "0" + secs;
        
        $( "#countdown" ).html(days + " days " + hours + ":" + mins + ":" + secs);
    }, 1000);
    
});
