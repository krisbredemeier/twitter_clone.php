//swaps between display null and dispaly block
HTMLElement.prototype.toggle = function () {
    console.log("The display is", this.style.display);
    if (this.style.display != "block") {
        this.style.display = "block";
    console.log("The display is now", this.style.display);
    } else {
        console.log("I can see that this is not display none");
        this.style.display = "none";
    }
};

