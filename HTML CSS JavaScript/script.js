let getDropMenuBKButton = document.querySelector("#dropMenuBKButton");
let getDropMenuCSButton = document.querySelector("#dropMenuCSButton");
let getDropMenuBK = document.querySelector("#dropMenuBK");
let getDropMenuCS = document.querySelector("#dropMenuCS");

function toggleDropMenu() {
    getDropMenuBKButton.addEventListener("click", event => {
        if(getDropMenuBK.style.visibility==hidden) {
            getDropMenuBK.style.visibility=visible;
        }
    });
    // if(getDropMenuBKButton.onmouseover) { 
    //     getDropMenuBK.style.visibility = visible;
    // }
    // if(getDropMenuCSButton.onmouseover) {
    //     getDropMenuCS.style.visibility = visible;
    // }
}