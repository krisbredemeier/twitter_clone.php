//when page loads, enable toggle for statuses
window.onload = function toggle_status(){
    var status_form = document.getElementById('status_form');
    var post_link = document.getElementById('post_link');
    status_form.style.display = "none";
    post_link.style.display = "block";

    post_link.onclick = function () {

        status_form.toggle();
    };

}

