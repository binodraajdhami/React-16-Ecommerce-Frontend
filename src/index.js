import React from 'react';
import ReactDOM from 'react-dom';

// import Welcome from './components/test.component';
import { Auth } from './components/login/login.component';
import { Register } from './components/register/register.component';

let el = <div>

    {/* <Welcome addr="tinkune" number={3333} /> */}
    {/* <Auth /> */}
    <Register></Register>
</div>

ReactDOM.render(el, document.getElementById('root'));