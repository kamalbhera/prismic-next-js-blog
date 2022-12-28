import React from 'react';
import Footer from './Footer';
import Header from './Header';
const Layout = ({ navigation, settings, children}) => {

    return (
        <>
         <Header navigation={navigation} settings={settings} />
            <main>{children}</main>
         <Footer settings={settings}/>
        </>
    );
}
export default Layout;