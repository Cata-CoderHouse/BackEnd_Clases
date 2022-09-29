const template = Handlebars.compile(`<h1>{{titulo1}}</h1>
                        <h1>{{titulo2}}</h1>
                        <p>Hola mi nombre es {{nombre}} {{apellido}}</p>`)
    
    document.querySelector("div").innerHTML = template({
        titulo1: 'Primera plantilla',
        titulo2: 'HANDLEBARS',
        nombre:'Catalina',
        apellido:'Perez'
    })