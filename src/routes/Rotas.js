import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Contato from '../Pages/Contato/Contato'

function Rotas() {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contato' component={Contato} />
            </Switch>
        </BrowserRouter>

    )
}

export default Rotas