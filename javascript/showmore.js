function toggleText() {
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");
    var button = document.getElementById("toggleBtn");

    // Metni açma veya kapama
    if (para2.style.display === "none") {
        para2.style.display = "block";
        para3.style.display = "block";
        button.innerHTML = "Show Less"; 
    } else {
        para2.style.display = "none";
        para3.style.display = "none";
        button.innerHTML = "Show More"; 
    }
}
