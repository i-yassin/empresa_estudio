const requestTimeOut = 1000*5;
 function getData(){
  $.ajax({
      url: "https://api.myjson.com/bins/izt2s",
      dataType: 'json',
      timeout: requestTimeOut,

      success: function(response) { 
        
        if(response.status == true) {           
             $.each(response.roomsData, function(index, room) {
                $('#where-image-appear').append(
                '<div class="col-sm-6 col-md-4 col-lg-3 image-container " >'+
                    '<div class="imagestyle" >'+
                        '<img src="./assets/images/'+room.image+'"  class="img-fluid image-filteration" alt="'+room.name+'" onclick="appearingModal(this)"/>'+  
                        '<div class="overlay">'+
                            '<div class="text">'+
                            room.name+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>');
             });
        }
        },

        error: function(req, status,error) {
            if(status==="timeout") {
                alert("got timeout");
            }
            else{
                console.log(status);
            }
         }
  });
}
