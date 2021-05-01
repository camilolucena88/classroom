import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return <div>
        <Header/>
            {children}
        <Footer
            brandName="Escuela Uno"
            logo="https://escuelauno.com/wp-content/uploads/2020/09/untitled-1.png"
        />
    </div>
}

export default Layout;