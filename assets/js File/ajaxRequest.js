

function getData(url){
    var roomsData;
    
  $.getJSON( url, {
    tags: "Rooms",
    tagmode: "any",
    format: "json",
    timeout:10000,
    success: function(resp) { 
        alert("its loaded fine ");
    },
    error: function(req, status,error) {
        if(status==="timeout") {
            alert("got timeout");
        }
        
     }
  })
}