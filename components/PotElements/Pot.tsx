import React from 'react'

export interface PotProps {
    
}
 
const Pot: React.SFC<PotProps> = () => {
    return (
        <div className="pot">
            <style jsx>{`
            .pot {
                display: flex;
                justify-items: center;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
                padding: 24px;
                margin: auto;
            }
            `}</style>
        <PotDesc />
        <PotCard/>
        </div>
    );
}


const PotDesc = () => {
    return ( 
        <div className="post_desc">
            <style jsx>{`
            .post_desc {
            max-width: 900px;
            background: rgba(255, 255, 255, 0.01);
            }

            @media (max-width: 1400px) {
                .post_desc {
                    max-width: 700px;
                }
            }

            @media (max-width: 1200px) {
                .post_desc {
                    max-width: 600px;
                }
            }
            
            

            .img_wrapper {
                position: relative;
                padding-bottom: 56.2%;
            }

            .post_write {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
                background: rgba(255, 255, 255, .02);
            }

            img {
                position: absolute;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            p {
                font-size: 1.10rem;
            }

            .JOIN_btn {
                background: rgba(255, 255, 255, 0.1);
            }

            .JOIN_btn:hover {
                background: rgba(255, 255, 255, 0.2);
                cursor: pointer;
            }
            `}</style>
            <div className="post_write">
            <div className="img_wrapper">
                <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" />
            </div>
            <div style={{padding: '2rem'}}>
            <h3>Metal Skin Panic: MADOX-01 Unobtanium Edition</h3>
            <p>
            The following changes have been made to the GB Variant Ruleset effective 12:00 PM ET 5/7 on Ladder Matches & Online Tournaments

Restrictions Added
Tactical Rifles
CARV.2
Special
R1 Shadowhunter
Due to issues with the in-game CDL Game Mode, the following change has been made for CDL Variant Ladder Matches effective 12:00 PM ET 5/7

Lobby Setup Instructions Changed
Lobby modes must be manually setup by the hosting player & the in-Game CDL game modes must not be used.
We suggest hosting players save each Game Mode to enable quicker lobby setup.
            </p>
            </div>
            </div>
        </div>
    );
}


const PotCard = () => {
    return (
        <div className="pot_card">
            <style jsx>{`
            .pot_card {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: sticky;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
                top: 90px;
                height: 600px;
                background: rgba(255, 255, 255, 0.025);
            }

            @media (max-width: 1050px) {
                .pot_card {
                   display: none;
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
            <div>
            <h3></h3>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0', padding: '1rem 2rem 2rem 2rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <h1 style={{fontSize: 24, margin: 0}}>Call of Duty: Modern Warfare</h1>
                <p style={{margin: 0,}}>Game</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0'}}>
                <h1 style={{fontSize: 24, margin: 0}}>Tourney</h1>
                <p style={{margin: 0,}}>Game Type</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0'}}>
                <h1 style={{fontSize: 24, margin: 0}}>1,552,485 USD</h1>
                <p style={{margin: 0,}}>Pot Amount</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0',}}>
                <h1 style={{fontSize: 24, margin: 0}}>2,279</h1>
                <p style={{margin: 0}}>Players</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0',}}>
                <h1 style={{fontSize: 24, margin: 0}}>65 days</h1>
                <p style={{margin: 0}}>Left to Join</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0',}}>
                <h1 style={{fontSize: 24, margin: 0}}>20 USD</h1>
                <p style={{margin: 0}}>Fee</p>
                </div>
                </div>
            </div>
            <div 
                className="JOIN_btn"
                style={{width: '100%', height: '15%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    JOIN
            </div>
        </div>
    );
}
 
export default Pot;