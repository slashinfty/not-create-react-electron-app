import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
 
const Root = () => {
    return <div>Hello React!</div>;
};
 
ReactDOMClient.createRoot(document.getElementById('app')).render(
    <Root />
);