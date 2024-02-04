const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
// function myfunc(){
//     document.getElementById("demo").innerHTML = car;
// } Doesn't work

function myfunc() {
    document.getElementById("demo").innerHTML = "The car name is " + car.type;
}