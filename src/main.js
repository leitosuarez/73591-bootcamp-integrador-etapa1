import productos from './db/productos'
import './sass/main.scss'

let contenedorProductos = document.getElementById('card-container')

 let start = ()=> { // primera opcion (no tan segura)
    let html = ''

    productos.forEach(prod => {
        html += `<div class="card">
                  <article class="card__article">
                    <div class="card__image-container">
                      <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                    </div>
                    <div class="card__content">
                        <h2 class="card__heading">${prod.nombre}</h2>
                        <div class="card__description">
                          <p>${prod.descripcion}</p>
                        </div>
                    </div>
                  </article>
                </div> <!-- .card --> \n`

        
    })
    
    console.log(html)
    contenedorProductos.innerHTML = html
} 

const start2 = ()=> { //segunda opcion, mas segura ya que estoy creando todo dinamicamente
  productos.forEach(prod => {

    const card = document.createElement('div')
    card.classList.add('card')
    const article = document.createElement('article')
    article.classList.add('card__article')
    card.appendChild(article)
    const cardImageContainer = document.createElement('div')
    cardImageContainer.classList.add('card_image-container')
    article.appendChild(cardImageContainer)
    const cardImage = document.createElement('img')
    cardImage.classList.add('card__image')
    cardImage.src = prod.foto
    cardImage.alt = prod.nombre
    cardImageContainer.appendChild(cardImage)
    const cardContent = document.createElement('div')
    cardContent.classList.add('card__content')
    article.appendChild(cardContent)
    const cardHeadind = document.createElement('h2')
    cardHeadind.classList.add('card__headind')
    cardHeadind.textContent = prod.nombre
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card__description')
    cardContent.appendChild(cardHeadind)
    cardContent.appendChild(cardDescription)
    const descripcion = document.createElement('p')
    descripcion.textContent = prod.descripcion
    cardDescription.appendChild(descripcion)

    console.log(card)
    contenedorProductos.appendChild(card)
  })
  
  
}

const start3 = ()=> { //tercera opcion (LA MAS OPTIMA) ya que se agregan los elementos no manipulando e interviniendo todo el timepo el DOM (alta carga de recursos), si no que se asigna todo una vez a una variable que esta en memoria, y esta solo cambia el dom una vez, que es cuando se agrega al contenedor html en este caso

  const fragment = new DocumentFragment();

  productos.forEach(prod => {

    const card = document.createElement('div')
    card.classList.add('card')
    const article = document.createElement('article')
    article.classList.add('card__article')
    card.appendChild(article)
    const cardImageContainer = document.createElement('div')
    cardImageContainer.classList.add('card__image-container')
    article.appendChild(cardImageContainer)
    const cardImage = document.createElement('img')
    cardImage.classList.add('card__image')
    cardImage.src = prod.foto
    cardImage.alt = prod.nombre
    cardImageContainer.appendChild(cardImage)
    const cardContent = document.createElement('div')
    cardContent.classList.add('card__content')
    article.appendChild(cardContent)
    const cardHeadind = document.createElement('h2')
    cardHeadind.classList.add('card__headind')
    cardHeadind.textContent = prod.nombre
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card__description')
    cardContent.appendChild(cardHeadind)
    cardContent.appendChild(cardDescription)
    const descripcion = document.createElement('p')
    descripcion.textContent = prod.descripcion
    cardDescription.appendChild(descripcion)
    const precio = document.createElement('span')
    precio.textContent = prod.precio
    cardContent.appendChild(precio)

    fragment.appendChild(card)

  })

  contenedorProductos.appendChild(fragment)
  
  
}

window.addEventListener('DOMContentLoaded', start3)

