const cars = ["Volvo", "BMW", "Saab", "Ford"];
let text = "";
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "\n";
    text += cars[3] + "\n";
}
document.getElementById("demo").innerHTML = text;