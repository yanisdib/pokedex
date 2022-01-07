import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import { Pokedex } from '../pages';


function AppRouter() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path='/' element={<App />} exact />
                    <Route path='/pokedex' element={<Pokedex />} />
                </Routes>
            </main>
        </Router>
    );
}


export default AppRouter;