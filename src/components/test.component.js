// component is basic building block of react
// funtional component
// class based component

// types of component
// stateful component
// stateless component

// props 
// states

// life cycle of component

// parent child components

// higher order components(HOC)

import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
    // in function based component parameters of function are props
    console.log('proprs >>', props);
    return (
        <div>
            <h2>Welcome {props.name}</h2>
            <p> Welcome to Broadway and MERN stack course</p>
        </div>
    );

}
Welcome.defaultProps = {
    name: 'Tinkune'
}
Welcome.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
}

export default Welcome;