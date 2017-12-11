init();

function init() {
  document.getElementsByTagName("html")[0].style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementsByTagName("html")[0].style.visibility = "initial";

    var elementLeft = document.getElementsByClassName("dashboard-left");
    elementLeft[0].style.display = "none";

    var elementRight = document.getElementsByClassName("dashboard-right");
    elementRight[0].style.visibility = "hidden";

    var elementMain = document.getElementsByClassName("content-main");
    elementMain[0].style.float = "unset";
    elementMain[0].style.margin = "0 auto";
  });
}
