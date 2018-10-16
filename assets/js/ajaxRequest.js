const requestTimeOut = 1000*5;
function getData() {
  $.ajax ({
      url: "https://api.myjson.com/bins/izt2s",
      dataType: 'json',
      timeout: requestTimeOut,
      success: function(response) { 
        if(response.status == true) {
                var pageURL= $(location).attr("href").toString();
             $.each(response.roomsData, function(index, room) {
                $('#where-image-appear').append(
                '<div class= "col-sm-6 col-md-4 col-lg-3 image-container" >'+
                    '<div class= "imagestyle">'+
                        '<img src="./assets/images/'+room.image+'" class= "img-fluid image-filteration image-zoom" alt="'+room.name+'" onclick="appearingModal(this)"/>'+ 
                    '</div>'+
                    '<h5 class= "image-capture white-font text-center no-margin">'+
                        room.name+
                    '</h5>'+
                '</div>'
                );
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
