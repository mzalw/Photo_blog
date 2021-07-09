import './scss/App.scss';
import Header from "./components/header";
import Main from './components/main_page';
import Admin from './components/admin';
import Post from './components/post'
import Footer from "./components/footer";
import NotFound from "./components/err404";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return <HashRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/post:id' component={Post}/>
            <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </HashRouter>
}

export default App;
