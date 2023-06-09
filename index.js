(function () {
    var dragged, listener;

    console.clear();

    dragged = null;

    //Below functions are responsible for drag and drop
    listener = document.addEventListener;

    listener("dragstart", (event) => {
        console.log("start !");
        return dragged = event.target;
    });

    listener("dragend", (event) => {
        return console.log("end !");
    });

    listener("dragover", function (event) {
        return event.preventDefault();
    });

    listener("drop", (event) => {
        console.log("drop !");
        event.preventDefault();
        if (event.target.className === "dropzone") {
            dragged.parentNode.removeChild(dragged);
            return event.target.appendChild(dragged);
        }
    });
    //This function is responsible to resetting the page
    $(document).ready(function () {
        $(".reset").click(function () {
            // Reset the page to its initial state
            location.reload();
        });
    });

}).call(this);