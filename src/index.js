import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/test.component';
import { Login } from './components/login.component';

let el = <div>

    <Welcome addr="tinkune" number={3333}/>
    <Login name="kishor" phone={333333} ></Login>
</div>

ReactDOM.render(el, document.getElementById('root'));