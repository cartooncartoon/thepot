import { gql, useQuery } from '@apollo/client';
import { FUNDING, PayPalButtons } from '@paypal/react-paypal-js';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import Footer from './Footer';
import Header from './Header';
import SmallHeader from './SmallHeader';

export interface LayoutProps {
    
}

const GET_USER =  gql`
query MyQuery($user: String) {
  users(where: {user_id: {_eq: $user}}) {
    name
    user_id
  }
}
`

const CheckIcon = () => {
  return (
    <svg viewBox="0 0 14 11" fill="none" width="12" height="12" 
    xmlns="http://www.w3.org/2000/svg">
      <style jsx>{`
        svg {
          animation: fadeInText 200ms 0ms forwards;
        }

        @keyframes fadeInText { 
          from {
            transform: translate(0%, -5%);
            opacity: 0;
          } to {
            transform: translate(0%, 0%);
            opacity: 1;
          }
        }
      `}</style>
      
      <path d="M1 5L5 9L13 1" 
    stroke="rgba(255, 255, 255, 1)" stroke-width="2" stroke-linecap="round">
      </path></svg>
  )
}


function NextIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="white"
        viewBox="0 0 6.35 6.35"
      >
        <style jsx>{`
        svg {
          
        }
        `}</style>
        <g transform="translate(0 -290.65)">
          <path
            d="M2.258 291.965a.265.265 0 00-.174.469l1.619 1.387-1.62 1.386a.265.265 0 10.345.4l1.853-1.585a.265.265 0 000-.403l-1.853-1.587a.265.265 0 00-.17-.067z"
            vectorEffect="none"
          ></path>
        </g>
      </svg>
    );
  }

  

const Profile = ({setProfile, setDModal}: any) => {
    const [paymentSelect, setPaymentSelect] = React.useState(false);
    const {width, height} = useWindowDimensions();
    const [amount, setAmount] = React.useState({ten: false, twentyfive: false, fifty: false, custom: false});
    const [isDisabled, setIsDisabled] = React.useState(true);

    function onCheckboxChange() {
        setIsDisabled(!isDisabled);
    }
    return (
        <div className="overlay">
            <style jsx>{`
            .overlay {
                position: fixed;
                top: 0;
                width: 100vw;
                height: -webkit-fill-available;
                z-index: 999;
                background: rgba(0, 0, 0, 0.4);
            }

            .profile {
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

            .submit_btn {
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                height: 7rem;
            }

            input[type = "search"] {
                width: 100%;
                height: 10vh;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .checkmark {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 18px;
              margin-right: .5rem;
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.1);
              width: 18px;
              background: none;
            }

            .container {
              display: flex;
              align-items: center;
              overflow: hidden;
              margin-top: 1rem;
              font-size: 16px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }



            .payment_box {
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.5rem;
                margin-top: 1rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .payment_box:hover {
                cursor: pointer;
                border: 1px solid rgba(255, 255, 255, 1);
            }

            .active {
              border: 1px solid rgba(255, 255, 255, 1);
            }

            .submit_btn:hover {
                background: rgba(255, 255, 255, 0.1);
                cursor: pointer;
            }

            @media (max-width: 1050px) {
              .profile {
                width: 100vw;
                height: -webkit-fill-available;
                max-height: ${height}px;
              }
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
            `}</style>
        <div className="profile">
            {paymentSelect ||
            <div style={{padding: '2rem'}}>
            <div 
            onClick={() => setAmount({ten: !amount.ten, twentyfive: false, fifty: false, custom: false})}
            className={`payment_box ${amount.ten && 'active'}`}>$10 {amount.ten && <CheckIcon />}</div>
            <div 
            onClick={() => setAmount({ten: false, twentyfive: !amount.twentyfive, fifty: false, custom: false})}
            className={`payment_box ${amount.twentyfive && 'active'}`}>$25 {amount.twentyfive && <CheckIcon />}</div>
            <div 
            onClick={() => setAmount({ten: false, twentyfive: false, fifty: !amount.fifty, custom: false})}
            className={`payment_box ${amount.fifty && 'active'}`}>$50 {amount.fifty && <CheckIcon />}</div>
            <div 
            onFocus={() => setAmount({ten: false, twentyfive: false, fifty: false, custom: !amount.custom})}
            contentEditable className={`payment_box ${amount.custom && 'active'}`}>$XX {amount.custom && <CheckIcon />}</div>
            <p 
            style={{display: 'flex', justifyContent: 'flex-end', 
            alignItems: 'center', cursor: 'pointer',
            margin: '2rem 0 0 0'}}
            onClick={() => setPaymentSelect(true)}>Continue <NextIcon /></p>
            </div>
            }

            {paymentSelect &&
            <div style={{padding: '2rem', height: '100%'}}>
            <p 
            style={{display: 'flex',
            alignItems: 'center', cursor: 'pointer',
            }}
            onClick={() => setPaymentSelect(false)}><NextIcon /> Go Back</p>
            <div style={{ display: 'flex', marginTop: '2rem', flexDirection: 'column', justifyContent: 'center'}}>
            <h1>Deposit Terms</h1>
            <p>By adding funds you agree that you are over the age of 18 and you understand the your initial deposit will not be instantly withdrawn till your
              join a match/game. After such, you'll be able to withdraw any winnings you received. 
              </p>
              <label className="container">
            <span className="checkmark" onClick={onCheckboxChange}>
              {isDisabled || <CheckIcon />}
            </span>
            I agree 
              </label>
            <div style={{marginTop: '1rem'}}>
            <PayPalButtons
            disabled={isDisabled} 
            fundingSource={FUNDING.PAYPAL}
            style={{ layout: "vertical", color: 'black', shape: 'rect' }} />
            </div>
            </div>
            </div>
            
            }
                <div 
                onClick={() => setProfile(false)}
                className="submit_btn"
                style={{width: '100%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                display: 'flex'}}>
                    Close
                </div> 
        </div>
        </div>
    )
}


const GameSelect = ({children, onClick, active}: any) => {
  return (
    <li onClick={onClick}>
      <style jsx>{`
      li {
        font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 1.5rem;
          margin: 1rem;
          margin-top: 1rem;
          border: ${active ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 0.1);'}
      }

      li:hover {
        border: 1px solid rgba(255, 255, 255, 1);
      }

      `}</style>
      {children}
    </li>
  )
}


const Withdraw = ({setWithdraw}: any) => {
    const [tickets, setTickets] = React.useState(false);
    const {width, height} = useWindowDimensions();
    return (
        <div className="overlay">
        <style jsx>{`
        .overlay {
            position: fixed;
            top: 0;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            height: -webkit-fill-available;
            z-index: 999;
            background: rgba(0, 0, 0, 0.4);
        }

        .profile {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            width: 50vw;
            height: 85vh;
            z-index: 999;
            background: rgb(18, 18, 18);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeInText 300ms 0ms forwards;
        }

        .submit_btn {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
            height: 7rem;
            flex-shrink: 0;
        }

        input {
            width: 100%;
            height: 7rem;
            background: none;
            -webkit-border-radius: 0;
            color: white;
            font-size: 24px;
            outline: none;
            border-left: none;
            border-top: none;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-left: 1rem;
            padding-right: 1rem;
        }

        input::placeholder {
          color: white;
        }

        input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

        .payment_box {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            margin-top: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .payment_box:hover {
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 1);
        }

        .submit_btn:hover {
            background: rgba(255, 255, 255, 0.1);
            cursor: pointer;
        }

        @media (max-width: 1050px) {
          .profile {
            width: 100vw;
            height: -webkit-fill-available;
            max-height: ${height}px;
          }
        }

        @keyframes fadeInText {
            from {
              transform: translate(0%, -5%);
              opacity: 0;
            } to {
              transform: translate(0%, 0%);
              opacity: 1;
            }
          }
        `}</style>
    <div className="profile">
        {tickets ||
        <div>
        <input type="number" 
        step="0.01"
        max="50000"
        min="0" inputMode="numeric" pattern="[0-9]*" title="Non-negative integral number"></input>
        <div style={{padding: '2rem'}}>
        <p>Send to:</p>
        <p contentEditable>PayPal Email</p>
        <p>$100 is withdrawable. You still have $2.16 of unused money.</p>
        <p onClick={() => setTickets(true)}>Currently you have 2/5 Withdraw tickets open.</p>
        </div>
        </div>
        }
        { tickets &&
        <div style={{padding: '1rem 2rem 1rem 2rem'}}>
        <p onClick={() => setTickets(false)}><NextIcon />Go Back</p>
        </div>
        }
        {
          tickets &&
          <div style={{maxHeight: '100%', overflow: 'auto'}}>
          <GameSelect>Hello</GameSelect>
          <GameSelect>Hello</GameSelect>
          <GameSelect>Hello</GameSelect>
          <GameSelect>Hello</GameSelect>
          <GameSelect>Hello</GameSelect>
          </div>
        }
        <div>
            {tickets ||
            <div 
            onClick={() => setWithdraw(false)}
            className="submit_btn"
            style={{width: '100%',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            display: 'flex'}}>
                Withdraw
            </div> 
          }
            <div 
            onClick={() => setWithdraw(false)}
            className="submit_btn"
            style={{width: '100%',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            display: 'flex'}}>
                Close
            </div> 
            </div>
    </div>
    </div>
    )
}


const DepositModal = ({setDModal}: any) => {
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
      setTimeout(() => {
        setShow(false)
      }, 5000)
    }, [show])

  return (
      <div 
      onClick={() => setDModal(false)}
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
              z-index: 9999;
              height: -webkit-fill-available;
              background: rgb(0, 0, 0, 0.4);
          }

          .join__modal {
              width: 30rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              max-width: 90vw;
              height: 50vh;
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
 
const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const {width, height} = useWindowDimensions();
    const [profile, setProfile] = React.useState(false);
    const [ session ] = useSession();
    const { loading, error, data } = useQuery(GET_USER, 
     {variables: { 
        user: session?.user.uid,
      }},
      );
    const [withdraw, setWithdraw] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);
    const [dmodal, setDModal] = React.useState(false);

    if(loading) return null;
    if(error) return null;
    if(data) console.log(data);

    return (  
        <div style={{position: 'relative'}}>
          <Head>
          <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
          </Head>
          {dmodal && <DepositModal 
          setDModal={setDModal}
          />}
            <Header
            dropdown={dropdown} setDropdown={setDropdown}
            profile={profile} setProfile={setProfile}
            withdraw={withdraw} setWithdraw={setWithdraw}
            />
            {profile && <Profile 
            setProfile={setProfile}
            setDModal={setDModal}
            />}
            {withdraw && <Withdraw setWithdraw={setWithdraw} />}
            {children}
            <SmallHeader 
            setWithdraw={setWithdraw}
            setDeposit={setProfile}
            />
            <Footer />
        </div>
    );
}
 
export default Layout;