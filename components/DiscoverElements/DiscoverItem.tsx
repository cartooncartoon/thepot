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
                transition: transform 350ms ease, -webkit-transform 350ms ease;
                margin-bottom: 1rem;
            }

            

            .card {
                height: 340px;
                position: relative;
                display: flex;
                -webkit-filter: grayscale(75%); /* Safari 6.0 - 9.0 */
                
                align-items: center;
                justify-content: center;
                box-shadow: 0 24px 17px 0 rgb(0 0 0 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                background-size: cover;
                background-position: center;
                cursor: pointer;
            }

            h1 {
                font-size: 3rem;
                position: absolute;
            }

            img {
                object-fit: cover;
                filter: grayscale(50%);
                filter: brightness(40%);
            }

            h3 {
                font-weight: 600;
                font-size: 1rem;
            }
            .discoverItem:hover {
                transform: scale(1.02);
            }

            .info {
                margin-bottom: 2rem;
            }

            @media (max-width: 900px) {
                .discoverItem:hover {
                    transform: none;
                }

                .info {
                    padding: 0 16px 0 16px;
                }

            `}</style>
            <Link href="pot/hello">
            <div className="card">
                <img width="100%" height="100%" src="https://www.cnet.com/a/img/MbiDRXBQETPXgQV1ttOQC-w9jNw=/940x0/2018/06/12/79cc03c2-a7c1-4687-9254-adb72a5f55a0/super-smash-bros-ultimate-nintendo.png" />
                <h1>400</h1>
                <div style={{position: 'absolute', bottom: 0, background: 'rgba(0, 0, 0, 0.75)', width: '100%', height: '2rem', display: 'flex', justifyContent: 'space-between', padding: '1.5rem', alignItems: 'center'}}>
                    <p>Entry Fee:</p>
                    <p>$220</p>
                </div>
            </div>
            </Link>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>1 v. 1 Death Match</p>
            <p>Challenger: Dukes (1 - 0)</p>
            </div>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Super Smash Bros (Wii U)
            </div>
        </div>
    );
}
 
export default DiscoverItem;