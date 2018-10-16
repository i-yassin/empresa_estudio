function appearingModal(imageElement){
    var modal = document.getElementById('imagemodal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = imageElement;
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("model-captions");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = imageElement.alt;
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
    $('#imagemodal').modal('show');
    $('.modal-backdrop').hide();
}