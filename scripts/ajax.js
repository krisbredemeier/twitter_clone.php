//this function toggles on and off the new reply-forms
var toggle_reply_again = function () {
    var more_reply_links_array = document.querySelectorAll('#more_statuses .reply_link');
    console.log("Made new array for new reply forms.");
    console.log("New reply forms are stored in " + more_reply_links_array);
    var reply_id = null; //will be assigned val later
    var reply_form = null;

    for (var i = 0; i < more_reply_links_array.length; i++) {
        console.log("Loop thru array.");


        more_reply_links_array[i].addEventListener("click", function () {
            console.log("I see this click.");
            reply_id = this.getAttribute("data-form_no");
            reply_form = document.getElementById(reply_id);
            reply_form.toggle();
            this.style.display = "none"; //this is still the reply link
        })
    }
}

function ajaxGet(url, onSuccess) {

    // doStuff makes an Ajax request and runs script for toggling of more replies
    var doStuff = function (url, onSuccess) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                onSuccess(xhttp.responseText);
                var new_reply_forms = document.querySelectorAll("#more_statuses .reply_form");
                var new_reply_buttons = document.querySelectorAll("#more_statuses .reply_link");
                for (var i = 0; i < new_reply_forms.length; i++) {
                  new_reply_forms[i].style.display = "none";
                }
                for (var i = 0; i < new_reply_buttons.length; i++) {
                  new_reply_buttons[i].style.display = "block";
                }
                toggle_reply_again();
                document.body.style.cursor = "default";
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

        document.getElementById("see_more").style.display = 'none';
    };

    setTimeout(doStuff, 2000, url, onSuccess);
}

