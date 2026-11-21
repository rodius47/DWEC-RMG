window.onload = function() {
    let bicicleta = {
        codigo: 1,
        admin: false,
        componentes: {
            cuerpo: true,
            ruedas: 2 ,
            manillar: true,
            frenos: true,
        },
        insertarDatos(nombre, cuerpos, ruedas, manillar, frenos) {
            this.codigo=nombre;
            this.componentes.cuerpo=cuerpos;
            this.componentes.ruedas=ruedas;
            this.componentes.manillar=manillar;
            this.componentes.frenos=frenos;

        }   
    }

    function mostrarObjeto(objeto){
        for (let key in objeto){
            if(typeof objeto[key]== "object"){
                output.innerHTML +="Objeto anidado <br>";
                for (let subKey in objeto[key]){
                    output.innerHTML += `${subKey}: ${objeto[key][subKey]} <br>`;
                } 
            }else{
                output.innerHTML += `${key}: ${objeto[key]} <br>`
            }
        }
        output.innerHTML += "<br>";
    }


    // Crear variable para nombre
    let nom = undefined;
    // Conseguir el nombre del usuario
    let getNombre = document.getElementById("getNombre");
    getNombre.addEventListener("click", function(){
        let nombre = document.getElementById("nombre").value;
        nom = nombre // actualizar nombre
        if(nombre == "rodius47"){
            alert("Tú no necesitas comprobación");
            window.location.href = "pag2.html";
        }
        document.getElementById("hola").innerHTML = `Hola ${nombre}, sea bienvenido a la primera prueba.` 
        alert(`Hola ${nombre}, esta es la primera sala y para pasar debes saber como montar una bici.`);
    });
    mostrarObjeto(bicicleta);

    // Comprobar la respuesta
    let encuesta = document.getElementById("encuesta");
    
    encuesta.addEventListener("click", function(){
        if(nom != undefined){
            
            let cuerpo = document.querySelector("input[name='cuerpo']:checked").value;
            let ruedas = document.querySelector("input[name='rueda']:checked").value;
            let manillar = document.querySelector("input[name='manillar']:checked").value;
            let frenos = document.querySelector("input[name='frenos']:checked").value;
            let biciCreada = bicicleta;
            biciCreada.insertarDatos(nom, cuerpo, ruedas, manillar, frenos);

            mostrarObjeto(biciCreada);

            if(cuerpo == "true" && ruedas == 2 && manillar == "true" && frenos == "true"){
                window.location.href = "pag2.html";

            }else {
                alert(`Buen intento ${nom}, pero así no vas a llegar muy lejos (literalmente)`);
            }
        }else{
        alert("Primero introduzca el nombre porfavor");
        }
    });
    
    
}