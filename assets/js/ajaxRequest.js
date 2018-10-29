const requestTimeOut = 1000*5;
function getData() {//function to display all data from server
  $.ajax ({
      url: "https://api.myjson.com/bins/izt2s",
      dataType: 'json',
      timeout: requestTimeOut,
      success: function(response) { 
        if(response.status == true) {
             $.each(response.roomsData, function(index, room) {
                $('#where-image-appear').append(
                '<div class= "col-sm-6 col-md-4 col-lg-3 image-container" id="id'+ room.id +'">'+
                    '<div class= "imagestyle">'+
                        '<img src="./assets/images/'+ room.image +'" class= "img-fluid image-filteration image-zoom" alt="'+ room.name +'" onclick="appearingModal(this)"/>'+ 
                    '</div>'+
                    '<h5 class= "image-capture white-font text-center no-margin">'+
                        room.name +
                    '</h5>'+
                '</div>'
                );
             });
        }
    },
        error: function(req, status,error) {
            if(status === "timeout") {
                alert("got timeout");
            }
            else{
                console.log(status);
            }
         }
  });
}
function validationData(){// function control the validation for the search bar and then call function to show data
    var selectedBy= $("#selected-option").val();
    var fillterdBy= $("#filterd-for").val();
    var textWillAddedToURL= '?searched-text=';
    switch(selectedBy) {
        case '0':
            {
                let data= parseInt($("#filterd-for").val()) || -1;
                if(data !== -1) {
                    FilterData(data, 'id');
                    textWillAddedToURL+= data+ "&type=id";
                    history.pushState({},"",textWillAddedToURL);
                    break;
                }
                else {
                    break;
                }
            }
        case '1':
            {
                FilterData(fillterdBy, 'style');
                textWillAddedToURL+= fillterdBy+ "&type=style";
                history.pushState({},"",textWillAddedToURL);
                break;
            }
            default :
                return;
    }
    //adding the needed text into url
}
function FilterData(wantedItems,filterdBy){ 
    $.ajax ({
      url: "https://api.myjson.com/bins/izt2s",
      dataType: 'json',
      timeout: requestTimeOut,
      success: function(response) { 
        if(response.status == true) {
            $('#where-image-appear').empty();
            $.each(response.roomsData, function(index, room) {
                if(filterdBy === 'id'){
                        if(wantedItems == room.id){
                            $('#where-image-appear').empty().append(
                            '<div class= "col-sm-6 col-md-4 col-lg-3 image-container" id="id'+ room.id +'">'+
                                '<div class= "imagestyle">'+
                                    '<img src="./assets/images/'+ room.image +'" class= "img-fluid image-filteration image-zoom" alt="'+ room.name +'" onclick="appearingModal(this)"/>'+ 
                                '</div>'+
                                '<h5 class= "image-capture white-font text-center no-margin">'+
                                    room.name +
                                '</h5>'+
                            '</div>'
                            );
                        }                    
                }
                else if(filterdBy === 'style') {
                    if(wantedItems.toLowerCase() == room.style.toLowerCase()){
                        $('#where-image-appear').append(
                        '<div class= "col-sm-6 col-md-4 col-lg-3 image-container" id="id'+ room.id +'">'+
                            '<div class= "imagestyle">'+
                                '<img src="./assets/images/'+ room.image +'" class= "img-fluid image-filteration image-zoom" alt="'+ room.name +'" onclick="appearingModal(this)"/>'+ 
                            '</div>'+
                            '<h5 class= "image-capture white-font text-center no-margin">'+
                                room.name +
                            '</h5>'+
                        '</div>'
                        );
                    }       
                }
             });
        }
    },
        error: function(req, status,error) {
            if(status === "timeout") {
                
                alert("got timeout");
            }
            else{
                console.log(status);
            }
         }
  });

}
function checkFilteredData(){// check if the url has the filtered item or not to change the variable
    var pageURL= $(location).attr("href").toString();
    var beenFiltered= pageURL.trim().split("?")[1] || false;
    if(beenFiltered === false) {
        getData();
    }
    else {
        var result= ((pageURL.trim().split("?")[1]).trim().split("&"));// splited it into two half data and url 
        var searchedText= result[0].split("=")[1].trim();// first part is the text
        var searchedBy= result[1].split("=")[1].trim();// secound part is the type 
        FilterData(searchedText, searchedBy);// call the function that show the apropriate images
    }
}