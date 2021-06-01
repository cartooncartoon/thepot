import useWindowDimensions from '@/../hooks/useWindowDimensions';
import { ApolloClient, gql, HttpLink, InMemoryCache, useMutation } from '@apollo/client';
import React from 'react'
import Match from './Match';

import Rules from './Rules';

export interface PotProps {
    post: [],
}

const ADD_USER = gql`
  mutation AddUser {
    insert_user_stats_one(object: {post_id: "d98b23fa-4b1d-4ce1-8f04-abe4af722daf", prize: "185", result_text: "1h 20m", id: "7", result_proof_url: "Video", rank: 7, user_name: "sweet#0004"}) {
      prize
    }
  }
`;



function DetailsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      style={{margin: '0 .5rem 0 0'}}
      height="18"
      fill="white"
      viewBox="0 0 64 64"
    >
      <path d="M59.5 18.5h-55c-1.1 0-2-.9-2-2s.9-2 2-2h55c1.1 0 2 .9 2 2s-.9 2-2 2zM31.5 34.5h-27c-1.1 0-2-.9-2-2s.9-2 2-2h27c1.1 0 2 .9 2 2s-.9 2-2 2zM31.5 50.5h-27c-1.1 0-2-.9-2-2s.9-2 2-2h27c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
    </svg>
  );
}

function JoinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="white"
      style={{margin: '0 .5rem 0 0'}}
      viewBox="0 0 24 24"
    >
      <path d="M21 3a1 1 0 00-1 1v16a1 1 0 002 0V4a1 1 0 00-1-1zM2 12a1 1 0 001 1h11.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a.99.99 0 00.217-.326 1 1 0 000-.764.99.99 0 00-.217-.326l-4-4a1 1 0 10-1.414 1.414L14.586 11H3a1 1 0 00-1 1z"></path>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      fill="white"
      style={{margin: '0 .5rem 0 0'}}
      height="18"
      viewBox="0 0 512.003 512.003"
    >
      <path d="M445.038 266.377c12.773 0 25.049-3.691 35.874-10.957 17.944-12.129 30.399-34.131 30.883-57.012.557-11.631 0-23.95-1.699-37.676-.956-7.853-7.875-13.936-16.787-13.052-15.233 1.961-30.844 9.192-43.858 20.513a193.622 193.622 0 00-2.43-15.081c14.438-7.152 25.6-18.638 31.371-32.972 8.364-20.068 5.742-44.854-6.87-64.688-7.017-11.06-14.575-21.211-22.441-30.205-5.464-6.226-14.897-6.87-21.152-1.406-13.564 11.851-22.705 29.048-26.44 49.878-3.377 19.993-.75 36.851 6.804 55.118 31.394 74.584 2.563 159.864-62.747 201.522-4.623 2.884-8.275 6.872-10.776 11.514H271v-61.278l52.793 27.411a14.997 14.997 0 0015.732-1.187 14.97 14.97 0 005.977-14.59l-12.524-75.352 54.419-53.599a14.984 14.984 0 003.735-15.308 15.025 15.025 0 00-12.026-10.21l-75.176-11.32-34.263-75.747c-4.863-10.752-22.471-10.752-27.334 0L208.07 126.44l-75.176 11.323a15.023 15.023 0 00-12.026 10.21 14.985 14.985 0 003.735 15.308l54.419 53.599-12.524 75.352a14.965 14.965 0 005.977 14.59 15.027 15.027 0 0015.732 1.187L241 280.597v61.278h-64.241c-5.554-9.311-14.041-13.533-21.991-19.746-42.13-34.071-63.475-83.141-63.475-130.254 0-59.894 27.65-69.403 19.468-118.33C107.026 52.876 97.9 35.693 84.35 23.843c-6.196-5.449-15.718-4.834-21.152 1.406-7.925 9.053-15.483 19.219-22.441 30.19-12.612 19.834-15.264 44.619-6.958 64.541 5.832 14.467 17.02 25.984 31.472 33.142a193.424 193.424 0 00-2.43 15.092c-13.057-11.342-28.937-18.574-44.154-20.533-3.955-.425-7.969.586-11.118 3.047a14.939 14.939 0 00-5.669 10.02C.215 174.488-.327 186.822.186 198.16c.63 23.716 13.529 45.776 31.312 57.378 10.415 7.178 22.734 10.854 35.61 10.854 3.003 0 6.053-.363 9.102-.765 1.899 4.634 3.799 9.258 6.041 13.735-13.495-1.745-30.374-1.318-46.901 6.879-7.622 3.78-10.52 13.059-6.621 20.435 5.259 10.005 11.528 21.563 18.984 31.655 12.707 18.548 33.604 31.304 58.286 31.304 14.932 0 29.286-5.722 41.131-15.992 1.837 1.311 3.563 2.6 3.869 3.234v105h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h240c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15V358.488c.181-.93.571-1.802.571-2.77 1.17-.747 2.181-1.664 3.331-2.433 31.208 27.53 75.39 19.077 100.014-14.866 7.035-10.711 13.9-20.905 19.204-32.417 3.398-7.368.308-16.113-6.973-19.717-13.689-6.78-29.229-8.771-47.173-6.568 2.325-4.616 4.616-9.252 6.568-14.053 2.846.357 5.692.713 8.497.713zM286 431.875h-60c-8.291 0-15-6.709-15-15s6.709-15 15-15h60c8.291 0 15 6.709 15 15s-6.709 15-15 15z"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="18"
      height="18"
      style={{margin: '0 .5rem 0 0'}}
      fill="white"
      enableBackground="new 0 0 16.644 16.644"
      version="1.1"
      viewBox="0 0 16.644 16.644"
      xmlSpace="preserve"
    >
      <g fill="white">
        <path d="M13.804 4.661l.659-.66.196.195a.464.464 0 00.657 0 .463.463 0 000-.658l-.986-.987a.465.465 0 10-.658.659l.218.216-.648.648a7.227 7.227 0 00-4.203-1.89v-.605h.469a.79.79 0 000-1.579H7.14a.79.79 0 000 1.579h.52v.602h-.029a7.228 7.228 0 00-4.4 2.058l-.403.435a7.215 7.215 0 00-1.755 4.721 7.25 7.25 0 0014.498 0 7.208 7.208 0 00-1.767-4.734zM8.313 15.404a6.022 6.022 0 110-12.044 6.022 6.022 0 010 12.044z"></path>
        <path d="M8.79 8.843V5.048l-.438-.702-.498.702v3.795a.922.922 0 00.467 1.72c.51 0 .926-.414.926-.925a.917.917 0 00-.457-.795z"></path>
      </g>
    </svg>
  );
}

function Joystick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="#fff"
      style={{margin: '0 .5rem 0 0'}}
      width="18"
      height="18"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M325.414 322.194h-39.95V205.229c43.447-12.759 75.264-52.981 75.264-100.502C360.728 46.98 313.747 0 256 0S151.272 46.98 151.272 104.728c0 47.52 31.816 87.743 75.264 100.502v116.964h-39.95c-8.284 0-15 6.716-15 15v34.888h168.828v-34.888c0-8.284-6.716-15-15-15zM418.343 402.082H93.657c-16.568 0-30 13.431-30 30V482c0 16.569 13.431 30 30 30h324.686c16.569 0 30-13.431 30-30v-49.918c0-16.569-13.431-30-30-30z"></path>
    </svg>
  );
}

function SwordIcon() {
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="white"
      style={{margin: '0 .5rem 0 0'}}
      viewBox="0 0 512 512"
    >
      <path d="M99.871 290.224c-8.704-52.186 20.92-103.802 70.44-122.732l14.659-5.604c9.451-51.393 46.842-93.136 95.948-108.814-16.554-24.261-42.392-41.733-72.456-47.243A363.96 363.96 0 00152.735 0a364.58 364.58 0 00-56.752 6.063C50.487 14.561 14.748 50.93 7.051 96.561c-9.401 55.736-9.401 112.255 0 167.99 4.834 28.654 20.431 53.77 43.509 70.733h58.965c-.561-1.922-7.465-31.948-9.654-45.06zM165.501 416.253c-24.813-17.983-44.19-50.976-44.19-50.976v70.81h87.13c-14.809-2.324-29.683-10.226-42.94-19.834zM54.997 365.277h36.321v70.81H54.997z"></path>
      <path d="M416.017 77.459c-31.917-5.664-76.518-6.767-111.925-.335l-.555.101c-46.318 8.488-82.633 45.353-90.365 91.732-7.854 47.125-5.961 85.511 6.757 136.671h-29.833c-9.62-40.876-12.598-74.56-9.43-111.049-36.708 14.033-58.645 52.176-52.191 90.871a503.039 503.039 0 007.652 37.129c6.638 27.011 23.784 52.776 47.047 70.682 3.815 2.936 25.905 13.28 39.492 13.419H461.44c23.078-16.964 38.674-42.079 43.509-70.733 9.401-55.735 9.401-112.254 0-167.99-7.697-45.632-43.361-82.411-88.932-90.498zM238.358 436.672h152.33V512h-152.33zM420.682 436.672h36.321V512h-36.321z"></path>
    </svg>
  );
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


const JoinModal = ({setJModal, jmodal}: any) => {
    const [show, setShow] = React.useState(true)

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    const [addTodo] = useMutation(ADD_USER,
      {onCompleted() {
        setShow(false);
        setTimeout(() => setJModal(false), 1500)
      }
      }
      );

    React.useEffect(() => {
      if(jmodal) addTodo()
    }, [jmodal])

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
                <p className="loading">Joining The Match</p>
                </div>
                }
                {
                 !show &&
                 <div style={{display: 'flex', alignItems: 'center',
                height: '100%',
                justifyContent: 'center', flexDirection: 'column'}}>
                <div className="check">{CheckIcon()}</div>
                <p className="loading">Joined The Match!</p>
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
padding: 1rem;
max-height: 50%;
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
       <div style={{display: 'flex'}}>
           <div 
           className="submit_btn"
           onClick={() => setGame(false)}
           style={{width: '100%', height: '15vh', background: 'rgb(18, 18, 18)',
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
        setJModal={setJmodal}
        jmodal={jmodal}
        setJoin={setJoin} join={join}/>
        {jmodal && <JoinModal 
        jmodal={jmodal}
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


const PotCard = ({setJoin, setBattle, setGame, jmodal, setJModal, post}: any) => {
    const {width, height} = useWindowDimensions();
    const [w, setW] = React.useState(0);
    const [pressed, setPressed] = React.useState(false);

    React.useEffect(() => {
      if (w < 100 && pressed == true) {
      setW(w + .05);
      }
    }, [w, pressed])

    console.log(w);

    if(w > 0 && pressed == false) {
      setW(0);
    }

    if(w >= 100 && jmodal == false) {
      setJModal(true);
      setW(0);
    }

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
                background: rgba(255, 255, 255, 0.0075);
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
                    border-right: none;
                border-top: none;
                border-left: none;
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
                    <p>Fee: ${post.Pot_Amount * .45}</p>
                    </div>
                </div>
            </div>
            <div className="h_menu">
            <div 
            onClick={() => setBattle(true)}
            style={{width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {post.Game_Type == 'Speedrun' && <ClockIcon />}{post.Game_Type == 'Tournament' && <TrophyIcon />}{post.Game_Type == 'Peer v. Peer' && <SwordIcon />}{post.Game_Type}
            </div>
            <div 
            style={{width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Joystick />{post.Game}
            </div>
            <div 
            className="rules_btn"
            onClick={() => setGame(true)}
            style={{width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', justifyContent: 'center', alignItems: 'center'}}>
            <DetailsIcon /> Details
            </div>
            <div 
            className="join_btn"
            onTouchStart={() => {jmodal == false && setPressed(true)}}
            onTouchCancel={() => setPressed(false)}
            onTouchEnd={() => setPressed(false)}
            onMouseDown={() => 
              setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            style={{width: '100%', position: 'relative', 
             display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><JoinIcon />Click & Hold To Join</div>
               <div 
               unselectable="on"
               style={{position: 'absolute', width: `${w}%`, height: '100%', background: 'rgba(255, 255, 255, 0.025)', left: 0}} />
            </div>
            </div>
        </div>
    );
}



 
export default Pot;