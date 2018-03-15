import React from 'react';

import Header from './Header';
import BinsList from './bins/BinsList';

export default (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};