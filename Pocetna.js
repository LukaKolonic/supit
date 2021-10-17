
$(function() {
$('.Dialog').dialog({
    autoOpen: false,
    resizable: false,
    modal: true
    
});


$('#clickMe').on('click', function(e) {
    e.preventDefault();
     $('.Dialog').dialog('open');
   
});

document.querySelector("#btnReset").addEventListener('click',
    function () {
        document.querySelector(".Dialog").style.display = "none";
    });

})








