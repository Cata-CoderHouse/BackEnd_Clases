let admin = require("firebase-admin"); //importo libreria en admin

let serviceAccount = require("./cata-coder-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


CRUD()

async function CRUD(){
  const db = admin.firestore(); //me conecto a firestore
  const query = db.collection('usuarios'); //especifico a cual collecion me voy a conectar

  try {
    //create
    let id = '2';
    const doc = query.doc(`${id}`);
    await doc.create({
      nombre:"Juan",
      apellido:"Perez",
      edad:30,
      email:"cata@gmail.com"
    }) //creo el documento
  } catch (error) {
    console.log(error);
  }

  try {
  //leer todos los documentos
  const queryUsuarios = await query.get();
  let docs = queryUsuarios.docs; //para extraer la info -> resp.docs.map(doc=>doc.data()) estraer la data de cada obj
  const respuesta= docs.map(doc => ({id:doc.id, ...doc.data()})); //el map crea un nuevo array
  console.log(respuesta);
    
  } catch (error) {
    console.log(error);
  }

  try {
    //leer un documento por id
    let id = '2';
    const queryUsuario = await query.doc(`${id}`); 
    const item = await queryUsuario.get();
    const respuesta = {id:item.id,...item.data()};
    console.log(respuesta);
  }catch(error){
    console.log(error);
  }

  try{
    //update
    let id = '2';
    const doc = query.doc(id);
    const item = await doc.update({
      //campos que quiero cambiar
      nombre:'Fedad',
      apellido:'Casas',
    });
    console.log('item actualizado'+item);
  }catch(error){
    console.log(error);
  }

  try{
    //delete
    let id = '1';
    const doc = query.doc(id);
    const item = await doc.delete();
    console.log('item eliminado'+item);
  }catch(error){
    console.log(error);
  }
}