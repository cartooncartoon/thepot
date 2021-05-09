import React from 'react'
import Link from 'next/link';


export interface DiscoverItemProps {
    
}
 
const DiscoverItem: React.SFC<DiscoverItemProps> = () => {
    return (
        <div className="discoverItem">
            <style jsx>{`
            .discoverItem {
                width: 100%;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(
                    0deg
                    ) rotateY(
                    0deg
                    ) rotateZ(
                    0deg
                    ) skew(
                    0deg
                    , 
                    0deg
                    );
                transform-style: preserve-3d;
            }

            

            .card {
                height: 400px;
                transition: transform 350ms ease, -webkit-transform 350ms ease;
                box-shadow: 0 24px 17px 0 rgb(0 0 0 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                background: url('https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg');
                background-size: cover;
                background-position: center;
                cursor: pointer;
                margin-bottom: 1rem; 
            }

            h3 {
                font-weight: 600;
                font-size: 1rem;
            }
            .card:hover {
                transform: scale(1.02);
            }

            .info {
                margin-bottom: 2rem;
            }

            @media (max-width: 900px) {
                .card:hover {
                    transform: none;
                }

                .info {
                    padding: 0 16px 0 16px;
                }

            `}</style>
            <Link href="pot/hello">
            <div className="card">
            </div>
            </Link>
            <div className="info">
            <h3>1 v. 1 Death Match | Call of Duty: Modern Warfare <br />
                $400 Pot | $240 Fee</h3>
            </div>
        </div>
    );
}
 
export default DiscoverItem;