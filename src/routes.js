
import PostDetails from './components/shopping-cards/PostDetails';
import ShoppingPosts from "./components/shopping-cards/Posts";
import Estimations from "./components/Estimations";
import AboutUs from './components/aboutus';
import App from '../src/App';

const routes = [
    {

        path: "/",
        component: App,
        exact: true
    },
    {
        path: "/posts",
        component: ShoppingPosts,
        exact: true,
        /*  routes: [
             {
                 path: "/posts/:id",
                 component: AboutUs,
                 exact: true,
             },
 
         ] */
    },
    {
        path: "/posts/:id",
        component: PostDetails,
        exact: true,
    },
    {
        path: "/estimations",
        component: Estimations
    },
    {
        path: "/aboutus",
        component: AboutUs
    },
];

export default routes;