import React from 'react'

export interface SmallHeaderProps {
    
}
 
const SmallHeader: React.SFC<SmallHeaderProps> = () => {
    return (
        <div className="small_header">
            <style jsx>{`
                .small_header {
                    width: 100%;
                    overflow: hidden;
                    display: none;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 24px 0 24px;
                    border-bottom-color: rgba(255, 255, 255, 0.1);
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    height: 4.5rem;
                    position: sticky;
                    z-index: 999;
                    top: 0px;
                    background: rgb(18, 18, 18);
                }

                @media (max-width: 900px) {
                    .small_header {
                        display: flex;
                    }
                }
            `}</style>
        </div>
    );
}
 
export default SmallHeader;