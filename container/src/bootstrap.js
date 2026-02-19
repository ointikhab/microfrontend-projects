(async () => {
  try {
    const { mount } = await import('products/ProductsIndex')

    mount(document.querySelector('#products-root'))

    console.log('Product mounted')
  } catch (err) {
    console.error('Failed loading products:', err)
  }
})();

(async () => {
  try {
    const { mount } = await import('cart/CartShow')

    mount(document.querySelector('#cart-root'))

    console.log('cart mounted')
  } catch (err) {
    console.error('Failed loading cart:', err)
  }
})();



console.log('Container started')

