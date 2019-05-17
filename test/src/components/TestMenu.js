import React from 'react';
import { Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const TestMenu = () => (
    <Menu id="onlyProvider">
        <Item>Edit</Item>
        <Item>Open in New Tab</Item>
        <Separator />
        <Item>Copy link address</Item>
    </Menu>
)

export default TestMenu;