const details = {
    fname: "Digbijoy",
    lname: "Sonowal",
    age: 21,
    fullname: function() {
        return this.fname + " " + this.lname;
    }
};
document.getElementById("demo").innerHTML = details.fullname();