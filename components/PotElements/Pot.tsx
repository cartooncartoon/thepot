import useWindowDimensions from '@/../hooks/useWindowDimensions';
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react'
import BottomAction from '../BottomAction';
import Fab from '../Fab';
import Match from './Match';

import Rules from './Rules';

export interface PotProps {
    post: [],
}

function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        fill="white"
        height="80"
        viewBox="0 0 24 24"
        style={{margin: '0 0 1rem 0'}}
      >
        <path d="M20.285 2L9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z"></path>
      </svg>
    );
  }


const JoinModal = ({setJModal}: any) => {
    const [show, setShow] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
          setShow(false)
        }, 2000)
      }, [show])

      React.useEffect(() => {
        setTimeout(() => {
          setJModal(false)
        }, 3000)
    })

    return (
        <div 
        onClick={() => setJModal(false)}
        className="overlay">
            <style jsx>{`
            .overlay {
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                width: 100vw;
                z-index: 999;
                height: -webkit-fill-available;
                background: rgba(0, 0, 0, 0.4);
            }

            .join__modal {
                width: 30rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                max-width: 90vw;
                height: 20rem;
                animation: fadeInText 300ms 0ms forwards;
                background: rgb(18, 18, 18);
            }

            .check {
                animation: bounceIn 450ms 0ms forwards;
            }

            @keyframes bounceIn{
                0%{
                  opacity: 0;
                  transform: scale(0.3) translate3d(0,0,0);
                }
                50%{
                  opacity: 0.9;
                  transform: scale(1.1);
                }
                80%{
                  opacity: 1;
                  transform: scale(0.89);
                }
                100%{
                  opacity: 1;
                  transform: scale(1) translate3d(0,0,0);
                }
              }

            .lds-ring {
                display: inline-block;
                margin-bottom: 2rem;
                position: relative;
                width: 80px;
                height: 80px;
              }
              .lds-ring div {
                box-sizing: border-box;
                display: block;
                position: absolute;
                width: 64px;
                height: 64px;
                margin: 8px;
                border: 8px solid #fff;
                border-radius: 50%;
                animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                border-color: #fff transparent transparent transparent;
              }
              .lds-ring div:nth-child(1) {
                animation-delay: -0.45s;
              }
              .lds-ring div:nth-child(2) {
                animation-delay: -0.3s;
              }
              .lds-ring div:nth-child(3) {
                animation-delay: -0.15s;
              }
              @keyframes lds-ring {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              
              @keyframes fadeInText {
                from {
                  transform: translate(0%, -10%);
                  opacity: 0;
                } to {
                  transform: translate(0%, -0%);
                  opacity: 1;
                }
              }

            .submit_btn {
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .submit_btn:hover {
                background: rgba(255, 255, 255, 0.2);
                cursor: pointer;
             }

             .loading {
                font-size: 24px;
                font-weight: 600;
              }
              
              .loading:after {
                overflow: hidden;
                display: inline-block;
                vertical-align: bottom;
                -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
                animation: ellipsis steps(4,end) 900ms infinite;
                width: 0px;
              }
              
              @keyframes ellipsis {
                to {
                  width: 1.25em;    
                }
              }
              
              @-webkit-keyframes ellipsis {
                to {
                  width: 1.25em;    
                }
              }
            `}</style>
            <div className="join__modal">
                { show &&
                <div style={{display: 'flex', alignItems: 'center',
                height: '100%',
                justifyContent: 'center', flexDirection: 'column'}}>
                <div className="lds-ring"><div></div><div></div></div>
                <p className="loading">Joining The Match ⚔️</p>
                </div>
                }
                {
                 !show &&
                 <div style={{display: 'flex', alignItems: 'center',
                height: '100%',
                justifyContent: 'center', flexDirection: 'column'}}>
                <div className="check">{CheckIcon()}</div>
                <p className="loading">Joined The Match 🎉</p>
                </div>
                }
            </div>
        </div>
    )
}


const Join = ({setJoin, jmodal, setJModal}: any) => {
    const {width, height} = useWindowDimensions();
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
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 35rem;
   height: 35rem;
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
     transform: translate(-50%, -50%);
     opacity: 1;
   }
 }

.info {
   padding: 2rem;
}

@media (max-width: 900px) {
   .join {
       width: 100vw;
       left: 50%;
       top: 50%;
       height: -webkit-fill-available;
       z-index: 999;
   }
}

.submit_btn {
   border-top: 1px solid rgba(255, 255, 255, 0.1);
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
            <p>By submiting you agree to the rules of the match and the site.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div 
                className="submit_btn"
                onClick={() => setJModal(true)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    Join
                </div>
                <div 
                className="submit_btn"
                onClick={() => setJoin(false)}
                style={{width: '100%', height: '15vh', borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    Close
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
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 75vw;
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
transform: translate(-50%, -50%);
opacity: 1;
}
}

.info {
    min-width: 40rem;
    overflow-x: ;
}

@media (max-width: 900px) {
.join {
  width: 100vw;
  left: 50%;
  top: 50%;
  height: -webkit-fill-available;
  z-index: 999;
}
}

.submit_btn {
border-top: 1px solid rgba(255, 255, 255, 0.1);
}

h1 {
font-size: 3rem;
}

p {
margin: 1rem 0 0 0;
}

table {
    
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
       <div style={{overflow: 'auto'}}>
       <div className="info">
       <table>
  <tr>
    <th>Rank</th>
    <th>Name</th>
    <th>Result</th>
    <th>Prize</th>
  </tr>
  <tr>
    <td>1</td>
    <td>🏆 Peter</td>
    <td>1h 38m 21s <br/> Video</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>2</td>
    <td>🥈 Lois</td>
    <td>1h 38m 21s <br/> Video</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>3</td>
    <td>🥉 Joe</td>
    <td>1h 38m 21s <br/> Video</td>
    <td>$300</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Cleveland</td>
    <td>1h 38m 21s <br/> Video</td>
    <td>$250</td>
  </tr>
</table>
       </div>
       </div>
       <div style={{display: 'flex'}}>
           <div 
           className="submit_btn"
           onClick={() => setBattle(false)}
           style={{width: '100%', height: '15vh',
           alignItems: 'center', justifyContent: 'center',
           fontSize: '1.5rem', fontWeight: 'bold', 
           display: 'flex'}}>
               Close
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
position: fixed;
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
transform: translate(-50%, -50%);
opacity: 1;
}
}

.info {
padding: 2rem;
}

@media (max-width: 900px) {
.join {
  width: 100vw;
  left: 50%;
  top: 50%;
  height: -webkit-fill-available;
  z-index: 999;
}
}

.submit_btn {
border-top: 1px solid rgba(255, 255, 255, 0.1);
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
               Close
           </div>
           </div>
   </div>
   </div>
    )
}
 
const Pot: React.SFC<PotProps> = ({post}) => {
    const [join, setJoin] = React.useState(false);
    const [battle, setBattle] = React.useState(false);
    const [game, setGame] = React.useState(false);
    const [jmodal, setJmodal] = React.useState(false);
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
                    z-index: ${join || battle || game ? 999 : 99};
                }
            }
            `}</style>
        <PotDesc />
        <PotCard
        post={post} 
        setBattle={setBattle}
        setGame={setGame}
        setJoin={setJoin} join={join}/>
        {jmodal && <JoinModal 
        setJModal={setJmodal}
        />}
        {join && <Join 
        jmodal={jmodal} setJModal={setJmodal}
        setJoin={setJoin}/>}
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
        <Rules />
    );
}


const PotCard = ({setJoin, setBattle, setGame, join, post}: any) => {
    const {width, height} = useWindowDimensions();
    return (
        <div className="discoverItem">
            <style jsx>{`
            
            .discoverItem {
                width: 100%;
                max-width: 500px;
                position: sticky;
                top: calc(72px + 24px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: none;
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
                height: 300px;
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
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
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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

                .card {
                    max-height: 240px;
                }

                .discoverItem {
                    top: 0;
                    height: calc(${height}px - 72px);
                    position: relative;
                }

                .h_menu {
                    min-height: 0px;
                }

                .rules_btn {
                    display: flex;
                }

                .join_btn {
                    border-bottom: none;
                }

                .info {
                    padding: 0 16px 0 16px;
                }

            `}</style>
            <div className="card">
                <img width="100%" height="100%" src={post && post.background_image} />
                <div style={{position: 'absolute', 
                bottom: 0, background: 'rgba(18, 18, 18, 0.85)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', padding: '1.5rem', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>${post.Pot_Amount}</h1>
                    <p>5D: 6H: 54M Left</p>
                    <p>Fee: $220</p>
                    </div>
                </div>
            </div>
            <div className="h_menu">
            <div 
            onClick={() => setBattle(true)}
            style={{width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {post.Game_Type}
            </div>
            <div 
            onClick={() => setGame(true)}
            style={{width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {post.Game}
            </div>
            <div 
            className="rules_btn"
            style={{width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
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