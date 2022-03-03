var drop = document.querySelector(".drop");
drop.addEventListener("click", function() {
    var about = document.querySelector(".aboutme");

    if(this.id == "drop"){
        this.id = "up";
        this.className = "fa-solid fa-xmark drop";
        about.style.display = "initial";
        
    }else if(this.id == "up"){
        this.id = "drop";
        this.className = "fa-solid fa-angle-down drop";
        about.style.display = "none";
    }
    window.scrollY(0);
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}