/*const socket = io.connect();

console.log("Connecting")

const render = (arrayMensajes)=>{ //ponemos lo que recibimos
    console.log('se recibieron los mensajes desde el servidor1')
    const html = arrayMensajes.map((elem) => {
            return(`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em> </div>`)
        }).join(" ");
        document.getElementById('messages').innerHTML = html;
    }
    
socket.on('messages', function(data) { render(data); });
    

socket.on('mensajes',(data)=>{ //escucho mensajes desde el srvidor
    console.log('se recibieron los mensajes desde el servidor')
    console.log(data);
    render(data)
})

*/
const socket = io.connect();

console.log('Hello World  Cata')
document.getElementById('messages').innerHTML = `<p>Hola</p>`;

const addMessage = (e)=>{
    const text = document.querySelector('#texto').value;
    const author = document.querySelector('#username').value;
    console.log(author);
    console.log(text);
    socket.emit('new-message', {text:text,author:author})
    return false;
}

const render = (arraMensajes) => {
    const html = arraMensajes.map((elem) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('mensajes', (data)=>{
    console.log('Se recibieron los mensajes')
    console.log(data)
    render(data)
})
