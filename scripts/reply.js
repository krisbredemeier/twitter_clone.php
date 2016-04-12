//enables toggle fucntion for statuses
function toggle_reply() {
    var reply_links_array = document.querySelectorAll('.reply_link');
    var reply_forms = document.querySelectorAll('.reply_form');
    var reply_id = null; //will be assigned val later
    var reply_form = null;

    for (var i = 0; i < reply_forms.length; i++) {
      reply_forms[i].style.display = "none";
    }

    for (var i = 0; i < reply_links_array.length; i++) {
        reply_links_array[i].style.display = "block";
        reply_links_array[i].addEventListener("click", function () {
            reply_id = this.getAttribute("data-form_no");
            reply_form = document.getElementById(reply_id);
            reply_form.toggle();
            this.style.display = "none"; //this is still the reply link
        })
    }
}
document.addEventListener("DOMContentLoaded", toggle_reply);

