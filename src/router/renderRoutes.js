import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

let vueRoutes = renderRoutes(routes)

//递归routes配置 用于构建vue-router的配置
function renderRoutes(router){
    let routes =[];
    function render(router){
        router.forEach((item)=>{
            let {path,name,component,children} = item
            routes.push({
                path,
                name,
                component
            })
            if(children&&children.length){
                render(children)
            }
        })
    }
    render(router)
    return routes;
}

Vue.use(Router);
export default new Router({
    routes: vueRoutes
})
