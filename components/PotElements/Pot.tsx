import React from 'react'
import BottomAction from '../BottomAction';
import Fab from '../Fab';

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
                height: 100%;
                padding: 24px;
                margin: auto;
            }

            @media (max-width: 1050px) {
                .pot {
                    grid-template-columns: repeat(1, 1fr);
                    padding: 0px;
                }
            }
            `}</style>
        <PotDesc />
        <PotCard/>
        <BottomAction />
        </div>
    );
}

function PotIcon() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="white"
        viewBox="0 0 444 491"
      >
        <path
          fill="white"
          d="M443.839 169.579v2.133c0 23.528-19.134 42.662-42.662 42.662H42.821C19.295 214.374.16 195.24.16 171.712v-2.133c0-23.528 19.134-42.661 42.662-42.661h358.355c23.528 0 42.662 19.133 42.662 42.661zM430.668 233.916c-1.467-4.498-6.297-6.964-10.789-5.479a59.656 59.656 0 01-18.702 3.001c-378.683-.154-359.383.74-368.605-.885a59.03 59.03 0 01-8.452-2.116c-4.492-1.485-9.322.981-10.79 5.479C-28.584 362.414 50.536 490.606 222 490.606c44.827 0 84.673-8.617 118.429-25.607 87.758-44.16 120.359-138.747 90.24-231.083zM77.75 335.105c6.09 22.782 18.782 42.918 36.689 58.244 3.573 3.061 4 8.447.928 12.031a8.508 8.508 0 01-12.02.927c-20.541-17.565-35.1-40.667-42.085-66.797-1.216-4.543 1.493-9.225 6.037-10.441 4.554-1.216 9.236 1.482 10.451 6.036zM56.57 297.19c.17-4.703 4.105-8.393 8.83-8.223 4.714.171 8.394 4.117 8.223 8.831-.021.768-.043 1.547-.053 2.314a8.54 8.54 0 01-8.533 8.383c-4.839 0-8.617-3.982-8.532-8.681.01-.875.032-1.749.064-2.624zM306.789 0c-26.622 0-51.298 10.64-69.238 29.219-3.283 3.399-8.664 3.393-12.083.133A71.451 71.451 0 00176.138 9.6c-33.838 0-62.346 23.75-69.65 55.462a8.541 8.541 0 01-7.654 6.615C80.777 73.18 64.594 82.323 53.92 96.133c-4.323 5.592-.286 13.728 6.782 13.728h333.96c4.488.002 8.265-3.463 8.517-7.944C406.289 46.909 362.303 0 306.789 0zm-31.58 79.617c-.117.341-.224.65-.309.917-1.472 4.457-6.277 6.894-10.783 5.429a8.548 8.548 0 01-5.429-10.783c.139-.395.288-.853.47-1.354 1.599-4.426 6.484-6.72 10.921-5.13a8.53 8.53 0 015.13 10.92zm32.561-24.168c-3.605.181-9.119 1.045-14.974 4.053-4.074 2.125-9.298.59-11.497-3.669a8.54 8.54 0 013.679-11.497 54.416 54.416 0 0121.896-5.93c4.725-.235 8.725 3.37 8.97 8.084a8.528 8.528 0 01-8.074 8.96z"
        ></path>
      </svg>
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

            .description {
                display: none;
                overflow-x: hidden;
            }


            @media (max-width: 1050px) {
                .post_desc {
                    max-width: 100%;
                    width: 100%;
                    overflow: auto;
                    display: none;
                }

                .rules {
                    display: none;
                }
                
                .description {
                    display: flex;
                }
            }
            

            .img_wrapper {
                position: relative;
                padding-bottom: 56.2%;
            }

            .post_write {
                height: 100%;
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
            <div className="rules" style={{padding: '2rem'}}>
            <h3>Match Details</h3>
            <p>
                Cash Pool Split:

1st Place: 44% | 2nd Place: 14% | 3rd Place: 12% | 4th Place: 10% | 5th Place: 8% | 6th Place: 6% | 7th Place: 4% | 8th Place: 2%

Cash pool fluctuates by each tournament, dependent on entrants and entry fees. Visit #registration in the Finesse Gaming Club Discord Server for up-to-date cash pools.

Ruleset:

Bracket Type: Single Elimination - Best of Three | Style: 1 v 1 | Stock: 3 Lives | Time Limit: 8:00 | Items: Off | Damage Handicap: Off | Stages (Random): Final Destination, Battlefield, Pokémon Stadium 2, Smashville, and Town and City | Stage Hazards: Off | Launch Rate: 1.0x | Show Damage: Yes | amiibo: Off | Spirits: Off | Mii Fighters: Not Allowed

The loser of the finals will get 3rd place, while the winner of the finals will get 2nd place. In order for the winner of the finals to get 1st place, they must win against the Champion in a best of five matchup -- the Champion won't be on the bracket. In the case there is no Champion or a Champion fails to compete, the losers of the semi-finals compete for 3rd place, the loser of the finals get 2nd place, and the winner of the finals get 1st place.

If a player disconnects or lags constantly, they will get one chance to correct this issue. If the issue persists, they will be disqualified and their opponent will be given an automatic win. 2. If a player isn’t available to compete within three minutes of their match being ready, they will be disqualified and their opponent will be given an automatic win. 3. If a player fails to join the tournament (no-show), they will be disqualified and their opponent will be given an automatic win.
            </p>
            </div>
            <div className="description">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '0 0 0 0', padding: '1rem 2rem 2rem 0'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0 0 1rem 1rem'}}>
                <h1 style={{fontSize: 24, margin: 0}}>Call of Duty: Modern Warfare</h1>
                <p style={{margin: 0,}}>Game</p>
                </div>
                <div style={{display: 'flex', 
                background: 'rgb(18, 18, 18)',
                width: '100vw',
                flexDirection: 'column', alignItems: 'flex-start', padding: '1rem 0 1rem 1rem'}}>
                <h1 style={{fontSize: 24, margin: 0}}>Tourney</h1>
                <p style={{margin: 0,}}>Game Type</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0 0 0', padding: '1rem 0 1rem 1rem'}}>
                <h1 style={{fontSize: 24, margin: 0}}>1,552,485 USD</h1>
                <p style={{margin: 0,}}>Pot Amount</p>
                </div>
                <div style={{display: 'flex', 
                background: 'rgb(18, 18, 18)',
                width: '100vw',
                flexDirection: 'column', alignItems: 'flex-start', padding: '1rem 0 1rem 1rem'}}>
                <h1 style={{fontSize: 24, margin: 0}}>2,279</h1>
                <p style={{margin: 0}}>Players</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', 
                padding: '1rem 0 1rem 1rem',
                alignItems: 'flex-start', margin: '1rem 0 0 0',}}>
                <h1 style={{fontSize: 24, margin: 0}}>65 days</h1>
                <p style={{margin: 0}}>Left to Join</p>
                </div>
                <div style={{display: 'flex', 
                background: 'rgb(18, 18, 18)',
                width: '100vw',
                flexDirection: 'column', alignItems: 'flex-start', padding: '1rem 0 1rem 1rem'}}>
                <h1 style={{fontSize: 24, margin: 0}}>20 USD</h1>
                <p style={{margin: 0}}>Fee</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}


const PotCard = () => {
    return (
        <div className="discoverItem">
            <style jsx>{`
            .discoverItem {
                flex-shrink: 0;
                position: sticky;
                top: 72px;
                max-width: 100%;
                margin: auto;
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
                -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
                
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
            <div className="card">
                <img width="100%" height="100%" src="https://www.cnet.com/a/img/MbiDRXBQETPXgQV1ttOQC-w9jNw=/940x0/2018/06/12/79cc03c2-a7c1-4687-9254-adb72a5f55a0/super-smash-bros-ultimate-nintendo.png" />
                <h1>400 <PotIcon /></h1>
                <div style={{position: 'absolute', bottom: 0, background: 'rgba(18, 18, 18, 0.9)', width: '100%', height: '2rem', display: 'flex', justifyContent: 'space-between', padding: '1.5rem', alignItems: 'center'}}>
                    <p>Entry Fee:</p>
                    <p>$220</p>
                </div>
            </div>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>1 v. 1 Death Match</p>
            <p>Challenger: Dukes (1 - 0)</p>
            </div>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.025)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Super Smash Bros (Wii U)
            </div>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            65 Days Left
            </div>
            <div style={{width: '100%', height: '4rem', background: 'rgba(255, 255, 255, 0.025)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            JOIN
            </div>
        </div>
    );
}
 
export default Pot;