import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import BottomAction from './BottomAction';
import Fab from './Fab';
import Footer from './Footer';
import Header from './Header';
import SmallHeader from './SmallHeader';


export interface LayoutProps {
    
}

function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="24"
        height="24"
        fill="white"
        enableBackground="new 0 0 490.05 490.05"
        version="1.1"
        viewBox="0 0 490.05 490.05"
        xmlSpace="preserve"
      >
        <path d="M418.275 418.275c95.7-95.7 95.7-250.8 0-346.5s-250.8-95.7-346.5 0-95.7 250.8 0 346.5 250.9 95.7 346.5 0zm-261.1-210.7l55.1 55.1 120.7-120.6 42.7 42.7-120.6 120.6-42.8 42.7-42.7-42.7-55.1-55.1 42.7-42.7z"></path>
      </svg>
    );
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
        <g transform="translate(0 -290.65)">
          <path
            d="M2.258 291.965a.265.265 0 00-.174.469l1.619 1.387-1.62 1.386a.265.265 0 10.345.4l1.853-1.585a.265.265 0 000-.403l-1.853-1.587a.265.265 0 00-.17-.067z"
            vectorEffect="none"
          ></path>
        </g>
      </svg>
    );
  }

  

const Profile = ({setProfile}: any) => {
    const [paymentSelect, setPaymentSelect] = React.useState(false);
    return (
        <div className="profile">
            <style jsx>{`
            .profile {
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
            }

            .submit_btn {
                background: rgba(255, 255, 255, 0.025);
                height: 7rem;
            }

            input {
                width: 100%;
                height: 10vh;
                padding-left: 1rem;
                padding-right: 1rem;
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
            `}</style>
            {paymentSelect ||
            <div style={{padding: '2rem'}}>
            <div className="payment_box">$10 <CheckIcon /></div>
            <div className="payment_box">$25</div>
            <div className="payment_box">$50</div>
            <div contentEditable className="payment_box">$XX</div>
            <p 
            style={{display: 'flex', justifyContent: 'flex-end', 
            alignItems: 'center', cursor: 'pointer',
            margin: '2rem 0 0 0'}}
            onClick={() => setPaymentSelect(true)}>Continue <NextIcon /></p>
            </div>
            }

            {paymentSelect &&
            <div style={{padding: '2rem'}}>
            <p 
            style={{display: 'flex',
            alignItems: 'center', cursor: 'pointer',
            }}
            onClick={() => setPaymentSelect(false)}><NextIcon /> Go Back</p> 
            <div className="payment_box">Google Pay</div>
            <div className="payment_box">Apple Pay</div>
            <div className="payment_box">PayPal</div>
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
    )
}


const Withdraw = ({setWithdraw}: any) => {
    const [paymentSelect, setPaymentSelect] = React.useState(false);
    return (
        <div className="profile">
            <style jsx>{`
            .profile {
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
            }

            .submit_btn {
                background: rgba(255, 255, 255, 0.025);
                height: 7rem;
            }

            input {
                width: 100%;
                height: 10vh;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .payment_box {
                font-size: 1.5rem;
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
            `}</style>
            {paymentSelect ||
            <div style={{padding: '2rem'}}>
            <div className="payment_box">$10</div>
            <div className="payment_box">$25</div>
            <div className="payment_box">$50</div>
            <div contentEditable className="payment_box">$XX</div>
            <p 
            style={{display: 'flex', justifyContent: 'flex-end', 
            alignItems: 'center', cursor: 'pointer',
            margin: '2rem 0 0 0'}}
            >Continue <NextIcon /></p>
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
    )
}
 
const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const {width, height} = useWindowDimensions();
    const [profile, setProfile] = React.useState(false);
    const [withdraw, setWithdraw] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);

    return (  
        <div style={{position: 'relative'}}>
            <Header
            dropdown={dropdown} setDropdown={setDropdown}
            profile={profile} setProfile={setProfile}
            withdraw={withdraw} setWithdraw={setWithdraw}
            />
            {children}
            <SmallHeader />
            <Footer />
            {profile && <Profile setProfile={setProfile} />}
            {withdraw && <Withdraw setWithdraw={setWithdraw} />}
        </div>
    );
}
 
export default Layout;