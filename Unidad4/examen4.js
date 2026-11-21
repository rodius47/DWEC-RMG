window.onload = function() {
    let bicicleta = {
        codigo: 1,
        admin: false,
        componentes: {
            cuerpo: true,
            ruedas: 2 ,
            manillar: true,
            frenos: true,
        }
    }

    // Conseguir el nombre del usuario
    let getNombre = document.getElementById("getNombre");
    getNombre.addEventListener("click", function(){
        let nombre = document.getElementById("nombre").value;
        alert(`Hola ${nombre}, esta es la primera sala y para pasar debes saber como montar una bici.`);
    });
}