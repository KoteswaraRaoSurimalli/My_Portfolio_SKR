var tabslinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function openTab(tabname){
    for(tabslink of tabslinks){
        tabslink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
openTab();





































// window.onload = function() {
//   var sidemenu = document.getElementById("sidemenu");

//   window.openMenu = function () {
//     sidemenu.style.right = "0";
//   };

//   window.closeMenu = function () {
//     sidemenu.style.right = "-200px";
//   };
// };



// var sidemenu = document.getElementById("sidemenu");

// function openMenu(){
//     sidemenu.style.right = "0";
// }

// function closeMenu(){
//     sidemenu.style.right = "-200px";
// }