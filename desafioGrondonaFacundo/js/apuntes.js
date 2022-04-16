const paises = ["Argentina", "Colombia", "Mexico", "Chile"];


function agregarPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais)
        callback();
    }, 2000)
}

function verPaises(){
    setTimeout(()=>{
        for(let pais of paises){
            console.log(pais)
        }
    }, 1000)
}

//verPaises()
agregarPais('Venezuela', verPaises)



const paises = [];


function agregarPais(pais, callback){
        paises.push(pais)
        callback();
}

function verPaises(){
    console.log(paises)
}

//verPaises()
//agregarPais('Venezuela', verPaises)
//agregarPais('Colombia', verPaises)

function agregandoPaises(){
    setTimeout(()=>{
        agregarPais('Canada', verPaises)  
            setTimeout(()=>{
                agregarPais('Mexico', verPaises)
                setTimeout(()=>{
                    agregarPais('Peru', verPaises)        
                }, 3000)        
            }, 3000)      
    }, 3000)
}


function agregandoNaciones(){
    setTimeout(()=>{
        agregarPais('Canada', verPaises)  
    },3000)
    setTimeout(()=>{
        agregarPais('Argentina', verPaises)  
    },3000)
    setTimeout(()=>{
        agregarPais('Uruguay', verPaises)  
    },3000)

}




agregandoNaciones()



let p = document.querySelector("p");

p.addEventListener('click', ()=>{
/*     let xhr = new XMLHttpRequest()
    console.log(xhr)
    xhr.open('GET', 'archivo.txt')
    console.log(xhr)
    xhr.send()
    console.log("respuesta: " + xhr.response)    

    setTimeout(()=>{
        console.log("respuesta: " + xhr.response)    
    }, 2000) */


    fetch('data/archivo.txt')
        .then((res)=>{
            console.log(res)
            console.log(res.headers.get("Content-Type"))
            console.log(res.status)
            console.log(res.url)
            console.log(res.type)

            //console.log(res.text())
            return res.text()

        })
        .then((res)=>{
            console.log(res)
            document.querySelector('#respuesta').innerHTML =`<h2>
                ${res}
            </h2>`

        })
        .catch((err)=>{
            console.log(err)
        })
    
})



        fetch('data/datos.json')
        .then((res)=>{
            return res.json()
        })
        .then((resJson)=>{
            //console.log(resJson)
            //console.log(resJson.nombre)
            //console.log(resJson.apellido)
            //console.log(resJson.edad)
            mostrarHTML(resJson)
        })
        .catch((err)=>{
            console.error(err)
        })
 
})



function mostrarHTML({nombre, apellido, edad}){
    //const {nombre, apellido, edad} = obj
    let respuesta = document.querySelector("#respuesta")


    respuesta.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Edad: ${edad}</p>

    `

}






let p = document.querySelector("p");

p.addEventListener('click', ()=>{

    fetch('data/masdatos.json')
        .then((res)=>{
            return res.json()
        })
        .then((resJson)=>{

            mostrarHTML(resJson)
        })
        .catch((err)=>{
            console.error(err)
        }) 
})


function mostrarHTML(datos){
    //const {nombre, apellido, edad} = obj
    let respuesta = document.querySelector("#respuesta")
    console.log(datos)

    let html = '';

    datos.forEach(element => {
        const {nombre, apellido, edad} = element

        html += `
            <p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>
            <p>Edad: ${edad}</p>
            <hr>
        `
    });

    respuesta.innerHTML = html;

/*     respuesta.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Edad: ${edad}</p>

    ` */

}




























