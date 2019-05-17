import React from 'react';
import { MenuProvider } from 'react-contexify';
import TestMenu from './TestMenu';

const TestEmitter = () => (
    <div>
        <MenuProvider id="onlyProvider">Special Context Menu</MenuProvider>
        <TestMenu />
    </div>
)

export default TestEmitter;