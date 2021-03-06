$(document).ready(function(){

    $("h1").click(function(){
        alert("javascript is connected");
        console.log("Checking connection");
    })
    
    // hide all questions except the first one
    $(".question-form").hide()
    $("#form1").show()
    
})

// //Initialise map function
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         disableDefaultUI: true,
//         center: {
//             lat: 53.35001680243868, //Dublin
//             lng: -6.262019153232362
//         }
//     });
// };