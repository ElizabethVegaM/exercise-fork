window.onload = function() {
   
    var userName = document.getElementById("button-name"); 
    var btnBB = document.getElementById("infoBB");
    var txtBB = document.getElementById("breakingBad");

    userName.addEventListener("click", function() {
        var name = document.getElementById("input-name").value;
        document.getElementById("show-name").innerHTML = "Bienvenid@: " + name;
    })

    btnBB.addEventListener("click", function() {
        if(txtBB.style.display === 'none') {
            txtBB.style.display = "block";
        } else {
            txtBB.style.display = "none";
        }
        
    })





}