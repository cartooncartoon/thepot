import React from 'react'


export interface BottomActionProps {
    
}
 
const BottomAction: React.SFC<BottomActionProps> = () => {
    return (
        <div className="bottom_action">
            <style jsx>{`
            .bottom_action {
                width: 100%;
                display: none;
                height: 4rem;
                background: black;
                bottom: 72px;
                position: fixed;
            }

            @media (max-width: 900px) {
                 .bottom_action {
                     display: block;
                 }
            }

            .JOIN_btn {
                background: rgba(255, 255, 255, 0.1);
            }

            h1 {
                font-size: 1.75rem;
            }

            .JOIN_btn:hover {
                background: rgba(255, 255, 255, 0.2);
                cursor: pointer;
            }
            `}</style>
            <div 
                className="JOIN_btn"
                style={{width: '75%', height: '100%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    JOIN
            </div>
        </div>
    );
}
 
export default BottomAction;