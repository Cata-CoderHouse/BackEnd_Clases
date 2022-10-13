const options = {
    mysql:{
        client: 'mysql',
        connection:{
            host: '127.0.0.1',
            port:'3317',
            user:'root',
            password:'',
            database:'codercata', //ya debe  estar creada, mysql n crea nada
        }
    },
    sqlite:{
        client: 'sqlite3',
        connection:{
            filename: './mydb.sqlite'
        },
        useNullAsDefault: true
    }
}

module.exports = {options}