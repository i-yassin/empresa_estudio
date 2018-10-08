const requestTimeOut = 1000*5;
 function getData(){
  $.ajax({
      url: "https://api.myjson.com/bins/izt2s",
      dataType: 'json',
      timeout: requestTimeOut,

      success: function(response) { 
        
        if(response.status == true) {
            
            /*srcimage="./assets/images/"+response.roomsData[0].image
            imagename=response.roomsData[0].name;
            console.log(srcimage);*/
            //$('#where-image-appear').append('<img src="'+srcimage+'" class="img-fluid" alt="'+imagename+'" onclick="appearingModal(this)"  />');
             $.each(response.roomsData, function(index, room) {
                $('#where-image-appear').append(
                '<div class="col-sm-6 col-md-4 col-lg-3 image-container " >'+
                    '<div class="imagestyle" >'+
                        '<img src="./assets/images/'+room.image+'" class="img-fluid" alt="'+room.name+'" onclick="appearingModal(this)"/>'+  
                        '<div class="overlay">'+
                            '<div class="text">'+
                            'Hello World'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>');
             });
            
            /*
            for(i=0;i<response.roomsData.length;i++)
            console.log(response.roomsData[i].id+ response.roomsData[i].image+ response.roomsData[i].style+ response.roomsData[i].name);
                */
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
