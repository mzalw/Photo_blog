import './scss/App.css';
import Main from './components/main_page/main_page';
import Admin from './components/admin/admin';
import Post from './components/post/post'
import NotFound from "./components/err404";
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
    return <HashRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/admin' component={Admin}/>
            <Route exact path='/post' component={Post}/>
            <Route exact path='/post:id' component={Post}/>
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>
}

export default App;
