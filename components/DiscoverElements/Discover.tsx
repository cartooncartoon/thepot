import React from 'react'
import DiscoverItem from './DiscoverItem'


export interface DiscoverProps {
    
}
 
const Discover: React.SFC<DiscoverProps> = () => {
    return (
        <div className="discover">
            <style jsx>{`
            .discover {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }
            
            @media (max-width: 1140px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }
            }

            @media (max-width: 800px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1rem;
                }
            }
            `}</style>
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
        </div>
    );
}
 
export default Discover;