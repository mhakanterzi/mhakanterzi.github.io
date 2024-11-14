function toggleText() {
    const para2 = document.getElementById("para2");
    const para3 = document.getElementById("para3");
    const button = document.getElementById("toggleBtn");

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
