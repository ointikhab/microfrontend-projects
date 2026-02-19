import faker from 'faker'

const mount = (el)=>{
let cartText = `<div>You have ${faker.random.number()} in your cart</div>`

el.innerHTML = cartText
}

export {mount}