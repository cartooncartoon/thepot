import React from 'react'


export interface FabProps {
    
}
 
const Fab: React.SFC<FabProps> = () => {
    return (
        <div className="fab">
            <style jsx>{`
            .fab {
                width: 75px;
                height: 75px;
                background: black;
                border-radius: 100%;
                display: none;
                position: fixed;
                bottom: calc(1rem + 72px);
                right: 1.5rem;
            }

            @media (max-width: 1050px) {
                .fab {
                    box-shadow: 0 24px 17px 0 rgb(0 0 0 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                    display: block;
                }
            }
            
            `}</style>
        </div>
    );
}
 
export default Fab;