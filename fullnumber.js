document.addEventListener("DOMContentLoaded", function() {
    function formatInputToUpperAndSpaces(inputElement) {
        inputElement.addEventListener("input", function() {
            this.value = this.value.toUpperCase();
            this.value = this.value.replace(/[^a-zA-Z\s@.]/g, "");
        });
    }   
    var numeroInput = document.getElementById("numero");
    var letrasnomeInput = document.getElementById("nome");
    var letrascursoInput= document.getElementById("curso");
    var letrasemailInput = document.getElementById("email");

    formatInputToUpperAndSpaces(letrascursoInput);
    formatInputToUpperAndSpaces(letrasemailInput);
    formatInputToUpperAndSpaces(letrasnomeInput);

    numeroInput.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "")
        if (this.value.length > 15) {
            this.value = this.value.slice(0, 15);
        }

    });

});
