import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import BottomAction from './BottomAction';
import Fab from './Fab';
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
            <div>
            {children}
            </div>
            <SmallHeader />
            <Footer />
        </div>
    );
}
 
export default Layout;