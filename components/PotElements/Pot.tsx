import useWindowDimensions from '@/../hooks/useWindowDimensions';
import React from 'react'
import BottomAction from '../BottomAction';
import Fab from '../Fab';

export interface PotProps {
    
}


const Join = ({setJoin}: any) => {
    return (
        <div className="overlay">
             <style jsx>{`

.overlay {
       position: fixed;
       top: 0;
       left: 0;
       width: 100vw;
       height: 100vh;
       z-index: 99;
       background: rgba(0, 0, 0, 0.4);
   }
.join {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 50vw;
   height: 85vh;
   z-index: 4;
   background: rgb(18, 18, 18);
   border: 1px solid rgba(255, 255, 255, 0.1);
   animation: fadeInText 300ms 0ms forwards;
}

@keyframes fadeInText {
   from {
     transform: translate(-50%, -55%);
     opacity: 0;
   } to {
     transform: translate(-50%, -5b0%);
     opacity: 1;
   }
 }

.info {
   padding: 2rem;
}

@media (max-width: 900px) {
   .join {
       width: 100vw;
       height: 100vh;
       height: -webkit-fill-available;
       z-index: 999;
   }
}

.submit_btn {
   background: rgba(255, 255, 255, 0.1);
}

h1 {
   font-size: 3rem;
}

p {
   margin: 1rem 0 0 0;
}

input {
   width: 100%;
   font-size: 1.25rem;
   color: white;
   margin: 1rem 0 1rem 0;
   background: rgba(255, 255, 255, .1);
   outline: none;
   border: none;
   height: 4rem;
   padding-left: 1rem;
   padding-right: 1rem;
}

.submit_btn:hover {
   background: rgba(255, 255, 255, 0.2);
   cursor: pointer;
}
`}</style>
        <div className="join">
            <div className="info">
            <h1>Join</h1>
            <p>You're one step forward towards the island of the beast! What we need from you is to sign up with your Discord 
            name and Email address to complete the transaction. </p>
            <input placeholder="Discord Username" />
            <input placeholder="email@example.com" />
            <p>By submiting you agree to the rules of the match and the site.</p>
            </div>
            <div style={{display: 'flex'}}>
                <div 
                className="submit_btn"
                onClick={() => setJoin(false)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    CLOSE
                </div>
                </div>
        </div>
        </div>
    )
}


const Battle = ({setBattle}: any) => {
    return (
        <div className="overlay">
             <style jsx>{`

.overlay {
       position: fixed;
       top: 0;
       left: 0;
       width: 100vw;
       height: 100vh;
       z-index: 99;
       background: rgba(0, 0, 0, 0.4);
   }
.join {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 50vw;
   height: 85vh;
   z-index: 4;
   background: rgb(18, 18, 18);
   border: 1px solid rgba(255, 255, 255, 0.1);
   animation: fadeInText 300ms 0ms forwards;
}

@keyframes fadeInText {
   from {
     transform: translate(-50%, -55%);
     opacity: 0;
   } to {
     transform: translate(-50%, -5b0%);
     opacity: 1;
   }
 }

.info {
   padding: 2rem;
}

@media (max-width: 900px) {
   .join {
       width: 100vw;
       height: 100vh;
       height: -webkit-fill-available;
       z-index: 99;
   }
}

.submit_btn {
   background: rgba(255, 255, 255, 0.1);
}

h1 {
   font-size: 3rem;
}

p {
   margin: 1rem 0 0 0;
}

input {
   width: 100%;
   font-size: 1.25rem;
   color: white;
   margin: 1rem 0 1rem 0;
   background: rgba(255, 255, 255, .1);
   outline: none;
   border: none;
   height: 4rem;
   padding-left: 1rem;
   padding-right: 1rem;
}

.submit_btn:hover {
   background: rgba(255, 255, 255, 0.2);
   cursor: pointer;
}
`}</style>
        <div className="join">
            <div style={{display: 'flex'}}>
                <div 
                className="submit_btn"
                onClick={() => setBattle(false)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    CLOSE
                </div>
                </div>
        </div>
        </div>
    )
}


const Game = ({setGame}: any) => {
    return (
        <div className="overlay">
             <style jsx>{`

.overlay {
       position: fixed;
       top: 0;
       left: 0;
       width: 100vw;
       height: 100vh;
       z-index: 99;
       background: rgba(0, 0, 0, 0.4);
   }
.join {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 50vw;
   height: 85vh;
   z-index: 4;
   background: rgb(18, 18, 18);
   border: 1px solid rgba(255, 255, 255, 0.1);
   animation: fadeInText 300ms 0ms forwards;
}

@keyframes fadeInText {
   from {
     transform: translate(-50%, -55%);
     opacity: 0;
   } to {
     transform: translate(-50%, -5b0%);
     opacity: 1;
   }
 }

.info {
   padding: 2rem;
}

@media (max-width: 900px) {
   .join {
       width: 100vw;
       height: 100vh;
       height: -webkit-fill-available;
       z-index: 99;
   }
}

.submit_btn {
   background: rgba(255, 255, 255, 0.1);
}

h1 {
   font-size: 3rem;
}

p {
   margin: 1rem 0 0 0;
}

input {
   width: 100%;
   font-size: 1.25rem;
   color: white;
   margin: 1rem 0 1rem 0;
   background: rgba(255, 255, 255, .1);
   outline: none;
   border: none;
   height: 4rem;
   padding-left: 1rem;
   padding-right: 1rem;
}

.submit_btn:hover {
   background: rgba(255, 255, 255, 0.2);
   cursor: pointer;
}
`}</style>
        <div className="join">
            <div className="info">
            <h1>Join</h1>
            <p>You're one step forward towards the island of the beast! What we need from you is to sign up with your Discord 
            name and Email address to complete the transaction. </p>
            <input placeholder="Discord Username" />
            <input placeholder="email@example.com" />
            <p>By submiting you agree to the rules of the match and the site.</p>
            </div>
            <div style={{display: 'flex'}}>
                <div 
                className="submit_btn"
                onClick={() => setGame(false)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    CLOSE
                </div>
                </div>
        </div>
        </div>
    )
}
 
const Pot: React.SFC<PotProps> = () => {
    const [join, setJoin] = React.useState(false);
    const [battle, setBattle] = React.useState(false);
    const [game, setGame] = React.useState(false);
    const [rules, setRules] = React.useState(false);

    return (
        <div className="pot">
            <style jsx>{`
            .pot {
                display: flex;
                justify-items: center;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
                position: relative;
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
        <PotCard 
        setBattle={setBattle}
        setGame={setGame}
        setJoin={setJoin} join={join}/>
        {join && <Join setJoin={setJoin}/>}
        {battle && <Battle setBattle={setBattle} />}
        {game && <Game setGame={setGame} />}
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
            width: 100%;
            position: relative;
            animation: fadeInText 300ms 0ms forwards;
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
            
            
            h3 {
                margin: 1rem 0 .25rem 0;
            }

            .img_wrapper {
                position: relative;
                padding-bottom: 56.2%;
            }

            .post_write {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
                background: rgba(255, 255, 255, .02);
                padding-bottom: 2rem;
            }

            img {
                position: absolute;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }


            p {
                font-size: 1.10rem;
                line-height: 2rem;
            }

            .JOIN_btn {
                background: rgba(255, 255, 255, 0.1);
            }

            .JOIN_btn:hover {
                background: rgba(255, 255, 255, 0.2);
                cursor: pointer;
            }

            @keyframes fadeInText {
                from {
                  transform: translate(0%, 10%);
                  opacity: 0;
                } to {
                  transform: translate(0%, 0%);
                  opacity: 1;
                }
              }
            `}</style>
            <div className="post_write">
            <div className="rules" style={{padding: '2rem'}}>
                <h1>Match Details</h1>
                <h3>Prizes 🏆: </h3>
                🥇 $400 <br />
                🥈 $200 <br />
                🥉 $50  <br />
            <h3>Game Settings:</h3> Unless otherwise specified, the following settings must be set to following:
<ul>
<li>Fatigue: ON</li>
<li>Even Teams: OFF</li>
<li>Game Speed: NORMAL</li>
<li>Weather: OFF</li>
</ul>
<h3>Lag/Settings/Teams:</h3>After 2 minutes of gameplay any complaints on lag, pre-game settings, or banned teams will not be taken into consideration. No exceptions. (Note: connection is much better if you use a LAN cable instead of WiFi.)

<h3>Disconnections:</h3> In the event of a disconnection, you and your opponent must finish the remaining time of the match, keeping the score the same as it was in the game that got disconnected. i.e. If the disconnection occurred in at the end of the 1st quarter, the new game should be played until the end of the 3rd quarter. We highly recommend recording video of all game footage in case of a dispute.

If you can't continue the match within 15 minutes of disconnecting, Players' Lounge may rule on the match using our discretion. If you were losing, you will be given the loss. If you were winning, the match may be canceled or you may be given the loss depending on the circumstances. It is up to the player who was losing to reach out and attempt to play the match again. If you were losing and no attempt is made to play again within 15 minutes, you will lose the match.

<h3>Show Playbook:</h3> Users must show and confirm playbooks before starting the match. Do not start the match until you’ve confirmed your opponents playbooks.

No Customs: The use of custom playbooks is NOT allowed. The actual "West Coast" and "Multiple-D" Playbooks are allowed. Custom playbooks show up as "West Coast" and "Multiple-D" in the pre-game match screen. If you get caught using a Custom playbook claiming to use the real "West Coast" or "Multiple-D" playbook, you will either forfeit or have the match canceled. If you ready up to play against "West Coast" or "Multiple-D", and suspect your opponent is using a Custom at any time, you must quit the match immediately. You need sufficient evidence of your opponent running a play/formation that is not in the "West Coast" and "Multiple-D" playbook to support your claim.

<h3>Accelerated vs Chew clock:</h3>
Accelerated clock is a PRE-game setting that is set by the match host. This will cause the play clock to consistently run down to 15/20/25 seconds for each player throughout the entire match. NOTE - the clock automatically runs time off in All-Madden difficulty after selecting a play or during a hurry-up offense. This is NOT Accelerated clock.

Chew clock is an IN-game option that's available to anyone picking an offensive play. Chew will bring the playclock down to 10 seconds after an offensive play is selected. It is legal to Chew at any time and is not disputable unless otherwise specified.

<h3>Pause Timer:</h3> If you are "Kicked for Excessive Griefing" when you are losing a match or the game is tied, you automatically lose. If you are kicked when you are winning a match, the match will be cancelled. If you're kicked prior to the end of the first quarter of game play and the score is tied, we will consider it a non issue and the game should be replayed.

<h3>Online Squads Only:</h3> Matches must be played with Online Squads only. You are not allowed to import a team or a franchise.
            </div>
            </div>
        </div>
    );
}


const PotCard = ({setJoin, setBattle, setGame, join}: any) => {
    const {width, height} = useWindowDimensions();
    return (
        <div className="discoverItem">
            <style jsx>{`
            
            .discoverItem {
                width: 100%;
                max-width: 500px;
                position: sticky;
                top: calc(72px + 24px);
                margin-left: auto;
                margin-right: auto;
                animation: fadeInText 300ms 0ms forwards;
                flex-shrink: 0;
                height: 100%;
            }

            @keyframes fadeInText {
                from {
                  transform: translate(0%, -10%);
                  opacity: 0;
                } to {
                  transform: translate(0%, 0%);
                  opacity: 1;
                }
              }

            

            .card {
                height: 240px;
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 24px 17px 0 rgb(0 0 0 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                background-size: cover;
                background-position: center;
                cursor: pointer;
            }

            h1 {
                font-size: 3rem;
            }

            .rules_btn {
                display: none;
            }

            .join_btn {
                background: rgba(255, 255, 255, 0.05);
            }

            img {
                object-fit: cover;
            }

            .join_btn:hover {
                cursor: pointer;
                background: rgba(255, 255, 255, 0.075);
            }

            h3 {
                font-weight: 600;
                font-size: 1rem;
            }

            .h_menu {
                height: calc(100% - 240px);
                height: -webkit-calc(100% - 240px);
                min-height: 300px;
                display: grid;
            }

            .info {
                margin-bottom: 2rem;
            }

            @media (max-width: 1050px) {
                .discoverItem:hover {
                    transform: none;
                }

                .discoverItem {
                    top: 0;
                    height: calc(${height}px - 72px);
                    max-height: -webkit-calc(-webkit-fill-available * 0.5);
                    position: relative;
                }

                .rules_btn {
                    display: flex;
                }

                .join_btn {
                    background: rgba(255, 255, 255, 0.025);
                }

                .info {
                    padding: 0 16px 0 16px;
                }

            `}</style>
            <div className="card">
                <img width="100%" height="100%" src="https://media.wired.com/photos/5c119aaa1d856b064de8472b/master/pass/SSB.jpg" />
                <div style={{position: 'absolute', 
                bottom: 0, background: 'rgba(18, 18, 18, 0.85)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', padding: '1.5rem', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>400 <PotIcon /></h1>
                    <p>5D: 6H: 54M Left</p>
                    <p>Fee: $220</p>
                    </div>
                </div>
            </div>
            <div className="h_menu">
            <div 
            onClick={() => setBattle(true)}
            style={{width: '100%', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>1 v. 1 Death Match</p>
            <p>Challenger: Dukes (1 - 0)</p>
            </div>
            <div 
            onClick={() => setGame(true)}
            style={{width: '100%', background: 'rgba(255, 255, 255, 0.025)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Super Smash Bros (Wii U)
            </div>
            <div 
            className="rules_btn"
            style={{width: '100%', background: 'rgba(255, 255, 255, 0.05)', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>Rules</p>
            </div>
            <div 
            className="join_btn"
            onClick={() => setJoin(!join)}
            style={{width: '100%', 
             display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Join
            </div>
            </div>
        </div>
    );
}
 
export default Pot;