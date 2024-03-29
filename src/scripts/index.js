import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import '../styles/skip-link.css'
import mainRestaurant from '../scripts/main.js'

const menu = document.querySelector('#menu')
const hero = document.querySelector('.hero')
const main = document.querySelector('main')
const drawer = document.querySelector('#drawer')

menu.addEventListener('click', event => {
  drawer.classList.toggle('open')
  event.stopPropagation()
})

hero.addEventListener('click', () => {
  drawer.classList.remove('open')
})

main.addEventListener('click', () => {
  drawer.classList.remove('open')
})

mainRestaurant()
