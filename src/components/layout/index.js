import React from 'react';

function Layout({ children }) {
    return (
        <div>
            <header> Header </header>
           {children}
        </div>
    );
}

export default Layout;
