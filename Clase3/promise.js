const accion = (num) => { //encapsular promesa en fn permite enviarme parametroa
    return new Promise ( ( resolve , reject ) => { //instancio obj de tipo promesa
    //accion a realizar -> preste plata
    resolve(3)
    //reject('Nunca mas veo la plata que preste')
}) 
}

//accion tiene metodos para manejar el resolve y el reject
console.log(accion);

accion(3)
.then((resp)=>{ // then -> callback para caprutar el string del resolve (primera parte), el segundo param es para el reject
    //throw new Error('error en el then') //captura errores del reject y response, no es necesario
    //console.log(resp)
    return resp+2
}) 
.then(resp => console.log(resp)) //cada then haga un proceso es lo ideal
.catch(err=>console.log(err))




function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
      if (divisor == 0) {
        reject('no se puede dividir por cero')
      } else {
        resolve(dividendo / divisor)
      }
    })
   }

dividir(10, 0)
.then(resultado => {
    console.log(`resultado: ${resultado}`)
})
.catch(error => {
    console.log(`error: ${error}`)
})

// muestra por pantalla:
// error: no se puede dividir por cero

//************************************************************ */
Promise.resolve(20)
.then( x => x + 1 ) //21
.then( x => x * 2 ) //42
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )

Promise.resolve(10)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )


Promise.reject(30)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )
