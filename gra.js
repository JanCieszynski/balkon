const lewyTrue = document.querySelector("#lewy");
const prawyTrue = document.querySelector("#prawy");
const dialogelse = document.querySelectorAll(".dialogelse");
const opcjeDialogowe = {
    "<Wsiądź": "intro()",
    "Gdzie ja jestem?": 'gdzieJestem()',


}
const plecak = document.querySelector(".plecak.item");
 plecak.addEventListener("click",function() {
    const prawydol = document.querySelector("#prawydol");
    prawydol.innerHTML = "";
    console.log("działa");
    for (let i = 0; i <4; i++) {
        const div = document.createElement("div");
        div.className = "plecakitem";
        prawydol.appendChild(div);
    }
});
function oknaDialogowe(){
    console.log("siema")
    dialogelse.forEach(dialog => {
        const options = dialog.getAttribute("data-options");
        console.log(options);
        prawydol.innerHTML = "";
        if(options){
            const optionList = options.split(",")
            optionList.forEach(options => {
            const div = document.createElement("div");
            div.className = "dialog";
            div.setAttribute("data-options",options);
            div.setAttribute("onclick", opcjeDialogowe[options]);
            div.innerHTML = options ;
            prawydol.appendChild(div);
        })
        }

    });
}