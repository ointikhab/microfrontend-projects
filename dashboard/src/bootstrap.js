
import  {createApp} from 'vue'
import Dashboard from './Dashboard.vue'
// Mount the main App component to the DOM

const mount = (el)=>{
    const app = createApp(Dashboard);
    app.mount(el);
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dashboard-dev-root');
    if(el){
        mount(el);
    }
}
console.log('hi there from dashboard page');

export {mount}