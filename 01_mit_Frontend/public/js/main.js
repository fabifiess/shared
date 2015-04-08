$(document).ready(function () {
    //loadDropdown();
    $('.fancybox').fancybox();
});



var videocounter = 0;



/*
 index.html
 */


// Sub-Page wird per Klick in #main_content geladen: maincontent_new.html oder maincontent_new.html

// "+" Icon

$('#header_new').unbind("click").click(function(){
    $("#maincontainer").load("./maincontent_new.html");
    $("#sidebarcontainer").load("./sidebarcontent_new.html");
});



// Lupen-Icon
$('#header_search').unbind("click").click(function(){
    $("#maincontainer").load("./maincontent_search.html");
    $("#sidebarcontainer").load("./sidebarcontent_search.html");
});







//try {
//    var triggered = false;
//    $('#header_new').click(function () {
//        if (triggered == false) {
//            triggered = true;
//            $("#maincontainer").load("./maincontent_new.html");
//            $("#sidebarcontainer").load("./sidebarcontent_new.html");
//        }
//    });
//}
//catch (e) {
//}
//
//
//
//// Lupen-Icon
//
//try {
//    var triggered = false;
//    $('#header_search').click(function () {
//        if (triggered == false) {
//            triggered = true;
//            $("#maincontainer").load("./maincontent_search.html");
//            $("#sidebarcontainer").load("./sidebarcontent_search.html");
//        }
//    });
//}
//catch (e) {
//}















/*
 maincontent HTML pages
 */


// table dimensions depend on screen dimension
$('#maincontent_table_left').css("width", (($(document).width() - 175) / 2));
$('#maincontent_table_left').css("height", ($(document).height() - 190));
$('#maincontent_table_right').css("width", (($(document).width() - 175) / 2));
$('#maincontent_table_right').css("height", ($(document).height() - 190));



// Socket.io-Verbindung
var socket = io();


//socket.on('chat message', function (msg) {
//    $('#messages').append($('<li>').text("Received from socketio: " + msg));
//});


/*
 maincontent_new.html
 */






/*
 maincontent_search.html
 */





/*
 upload-form.html
 */





<!--Upload Form-->



//document.getElementsByClassName("navicon").onclick = (function () {
//    var state = false;
//    $("#upload_file").hide();
//    return function (e) {
//        if (state == false) {
//            state = true;
//            $('#addVisual').text('No visual');
//            function makeFileUploader(callback) {
//                $("#upload_file").html('<input type="file" name="img2">');
//                callback();
//            }
//
//            makeFileUploader(function () {
//                $("#upload_file").slideDown('fast');
//            });
//        }
//        else {
//            state = false;
//            $('#addVisual').text('Add a visual');
//            $("#upload_file").slideUp('fast', function () {
//                $("#upload_file").empty();
//            });
//
//        }
//    };
//})();










