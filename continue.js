let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;