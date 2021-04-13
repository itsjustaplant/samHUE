const div_left = document.getElementById('half-left')
const div_right = document.getElementById('half-right')

let picker_left = new iro.ColorPicker("#picker-left", {
    width: 350,
    color: "#bada55"
});

let picker_right = new iro.ColorPicker("#picker-right", {
    width: 350,
    color: "#1d1075"
});

picker_left.on('color:change', function (color) {
    div_left.style.backgroundImage = `linear-gradient(0deg, ${color.hexString}, #fafafa)`
});

picker_right.on('color:change', function (color) {
    div_right.style.backgroundImage = `linear-gradient(0deg, ${color.hexString}, #fafafa)`
});
