import faker from 'faker'

const mount = (el) =>{
let products = ''

for (let i=0; i<5; i++){
    products +=  `<div>${faker.commerce.productName()}</div>`
}

console.log('products', products)

el.innerHTML = products
}

export {mount}