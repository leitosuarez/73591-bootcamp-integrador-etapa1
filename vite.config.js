import {resolve} from 'path'

export default {
    //config options
    css: {
        devSourcemap: true //configuramos para ver la linea donde esta escrita la regla css
    },
    build: {
        rollupOptions: {
            input:{
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, '/pages/contacto.html'),
            } //es para trabajar con multipages y que para cuando lo buildiaramos y lo subamos a netlify no apareciera error de notfound (es una configuracion interna que necesita vite)
        }
    }
}