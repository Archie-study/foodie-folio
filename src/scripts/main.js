function mainRestaurant () {
  const showResponseMessage = (message = 'File not found') => {
    alert(message)
  }
  const getRestaurant = async () => {
    try {
      const response = await fetch('/data/DATA.json')
      const responseJson = await response.json()
      if (responseJson.error) {
        showResponseMessage(responseJson.message)
      } else {
        renderAllRestaurant(responseJson.restaurants)
      }
    } catch (error) {
      showResponseMessage(error)
    }
  }

  const renderAllRestaurant = (restaurants) => {
    const listRestaurantElement = document.querySelector('.posts')
    listRestaurantElement.innerHTML = ''

    restaurants.forEach(restaurant => {
      listRestaurantElement.innerHTML +=
      `
        <article class='post-item'>
          <img class='post-item__thumbnail' src='${restaurant.pictureId}' alt='${restaurant.name}'>

          <div class='post-item__content'>
              <p class='post-item__date'>
                  ${restaurant.name} - ${restaurant.id}
              </p>

              <h1 class='post-item__title'>
                  <a href="#">${restaurant.name}</a>
              </h1>
              <a href='#' class='post-item__date__author'>Rating : ${restaurant.rating} - ${restaurant.city}</a>

              <p class='post-item__description'>
                  ${restaurant.description}
              </p>

          </div>
        </article>
      `
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    getRestaurant()
  })
}

export default mainRestaurant
