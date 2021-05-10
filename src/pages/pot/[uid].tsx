import Pot from '@/../components/PotElements/Pot'
import React from 'react'


export interface PotPageProps {
    
}
 
const PotPage: React.SFC<PotPageProps> = () => {
    return (
        <div>
            <style jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
            `}</style>
            <Pot />
        </div>
    );
}
 
export default PotPage;