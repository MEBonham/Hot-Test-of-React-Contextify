import React from 'react';
import { Menu, Item, Separator } from 'react-contextify';

const TestMenu = () => (
    <Menu id="only">
        <Item>Edit</Item>
        <Item>Open in New Tab</Item>
        <Separator />
        <Item>Copy link address</Item>
    </Menu>
)

export default TestMenu;