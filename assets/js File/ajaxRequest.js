const requestTimeOut = 1000*5;

function getData(url){
  $.ajax({
      url:url,
      dataType: 'json',
      timeout: requestTimeOut,
      success: function(resp) { 
        if(resp.status == true) {
            alert("its loaded fine");
          }
        },
        error: function(req, status,error) {
            if(status==="timeout") {
                alert("got timeout");
                
            }
            else
                console.log(status);
         }
  });
}