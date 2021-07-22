console.log("Script Loaded!")

var colorPicker = document.getElementById("color-picker");

colorPicker.oninput = function(e) {
    var color = e.target.value;
    console.log(color)
    document.body.style.backgroundColor = color;
}

