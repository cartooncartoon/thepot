import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import Footer from './Footer';
import Header from './Header';
import SmallHeader from './SmallHeader';


export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const {width, height} = useWindowDimensions();
    return (  
        <div>
            <Header />
            <SmallHeader />
            <div>
            {children}
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;