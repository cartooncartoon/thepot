import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'


export interface HeaderProps {
    setWithdraw: React.Dispatch<React.SetStateAction<boolean>>;
    profile: boolean;
    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
    dropdown: boolean;
    setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    withdraw: boolean;
}

function GoogleIcon() {
    return (
      <svg
        style={{margin: '0 .5rem 0 0'}}
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="26"
        height="26"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path
          fill="#FBBB00"
          d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
        ></path>
        <path
          fill="#518EF8"
          d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
        ></path>
        <path
          fill="#28B446"
          d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
        ></path>
        <path
          fill="#F14336"
          d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
        ></path>
      </svg>
    );
  }

function DiscordIcon() {
    return (
      <svg 
      style={{margin: '0 .25rem 0 0'}}
      width="36" height="36" fill="none" viewBox="0 0 18 13">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.55.004h.012V0l-.011.004zm-.04.014l.04-.014h-.025l-.014.014zm-.006.006l.007-.006-.02.006h.013zm0 0l-.23.223c2.57.729 3.814 1.868 3.814 1.868-1.656-.812-3.149-1.218-4.641-1.382C9.368.569 8.29.655 7.379.733H7.13c-.583 0-1.823.243-3.484.893-.579.247-.911.409-.911.409S3.978.817 6.716.167L6.547.002s-2.073-.077-4.31 1.544c0 0-2.238 3.821-2.238 8.532 0 0 1.24 2.115 4.64 2.195 0 0 .496-.648.998-1.218-1.91-.569-2.653-1.706-2.653-1.706s.166.08.415.243h.075c.035 0 .052.016.07.033.002 0 .003.002.004.003v.007c.02.02.037.037.075.037l.108.043c.372.15.74.299 1.044.443.578.245 1.32.49 2.232.651 1.153.165 2.474.244 3.98 0l.047-.01c.728-.16 1.456-.321 2.184-.64.133-.067.274-.134.423-.204.392-.185.835-.395 1.308-.692 0 0-.743 1.138-2.733 1.707.409.566.986 1.215.986 1.215 2.787-.06 4.177-1.49 4.63-1.956.1-.102.154-.158.167-.141 0-4.704-2.25-8.532-2.25-8.532C13.746.097 11.87.026 11.504.024zM6.139 5.367c.868 0 1.57.73 1.57 1.623 0 .899-.707 1.628-1.575 1.628S4.56 7.888 4.56 6.997c0-.9.706-1.626 1.574-1.626l.005-.004zm5.632 0c.871 0 1.574.73 1.574 1.623 0 .899-.707 1.628-1.574 1.628-.868 0-1.575-.73-1.575-1.621.003-.9.71-1.626 1.575-1.626v-.004z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }


const NavLi = ({children, active, onClick}: any) => {
    return (
        <li 
        onClick={onClick}
        className={active && 'active'}>
            <style jsx>{`
                li {
                    height: 72px;
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    padding: 0 24px 0 24px;
                    line-height: 20.7px;
                    font-family: inherit;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.8);
                }

                .active {
                    color: rgba(255, 255, 255, 1);
                    border-bottom: 2px solid #fff;
                    background: rgba(255, 255, 255, 0.05);
                }

                li:hover {
                    background: rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                }
            `}</style>
            {children}
        </li>
    )
}


function Logo() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 444 491"
      >
        <path

          d="M443.839 169.579v2.133c0 23.528-19.134 42.662-42.662 42.662H42.821C19.295 214.374.16 195.24.16 171.712v-2.133c0-23.528 19.134-42.661 42.662-42.661h358.355c23.528 0 42.662 19.133 42.662 42.661zM430.668 233.916c-1.467-4.498-6.297-6.964-10.789-5.479a59.656 59.656 0 01-18.702 3.001c-378.683-.154-359.383.74-368.605-.885a59.03 59.03 0 01-8.452-2.116c-4.492-1.485-9.322.981-10.79 5.479C-28.584 362.414 50.536 490.606 222 490.606c44.827 0 84.673-8.617 118.429-25.607 87.758-44.16 120.359-138.747 90.24-231.083zM77.75 335.105c6.09 22.782 18.782 42.918 36.689 58.244 3.573 3.061 4 8.447.928 12.031a8.508 8.508 0 01-12.02.927c-20.541-17.565-35.1-40.667-42.085-66.797-1.216-4.543 1.493-9.225 6.037-10.441 4.554-1.216 9.236 1.482 10.451 6.036zM56.57 297.19c.17-4.703 4.105-8.393 8.83-8.223 4.714.171 8.394 4.117 8.223 8.831-.021.768-.043 1.547-.053 2.314a8.54 8.54 0 01-8.533 8.383c-4.839 0-8.617-3.982-8.532-8.681.01-.875.032-1.749.064-2.624zM306.789 0c-26.622 0-51.298 10.64-69.238 29.219-3.283 3.399-8.664 3.393-12.083.133A71.451 71.451 0 00176.138 9.6c-33.838 0-62.346 23.75-69.65 55.462a8.541 8.541 0 01-7.654 6.615C80.777 73.18 64.594 82.323 53.92 96.133c-4.323 5.592-.286 13.728 6.782 13.728h333.96c4.488.002 8.265-3.463 8.517-7.944C406.289 46.909 362.303 0 306.789 0zm-31.58 79.617c-.117.341-.224.65-.309.917-1.472 4.457-6.277 6.894-10.783 5.429a8.548 8.548 0 01-5.429-10.783c.139-.395.288-.853.47-1.354 1.599-4.426 6.484-6.72 10.921-5.13a8.53 8.53 0 015.13 10.92zm32.561-24.168c-3.605.181-9.119 1.045-14.974 4.053-4.074 2.125-9.298.59-11.497-3.669a8.54 8.54 0 013.679-11.497 54.416 54.416 0 0121.896-5.93c4.725-.235 8.725 3.37 8.97 8.084a8.528 8.528 0 01-8.074 8.96z"
        ></path>
        <style jsx>{`
            svg {
                fill: inherit;
                margin: 0 0 0 .5rem;
            }

            svg:hover {
                fill: inherit;
            }

        `}</style>
      </svg>
    );
  }



const Login = ({setLogin}: any) => {
    return (
        <div className="login">
            <style jsx>{`
            .login {
                position: fixed;
                display: flex;
                flex-direction: column;
                box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
                align-items: center;
                justify-content: space-between;
                top: 50%;
                left: 50%;
                /* bring your own prefixes */
                transform: translate(-50%, -50%);
                background: rgb(18, 18, 18);
                min-width: 500px;
                height: 80vh;
            }

            .submit_btn {
                background: rgba(255, 255, 255, 0.1);
            }

            input {
                width: 100%;
                height: 100%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .submit_btn:hover {
                background: rgba(255, 255, 255, 0.2);
                cursor: pointer;
            }

            h1 {
                font-size: 3rem;
            }
            `}</style>
                <div style={{padding: '2rem', width: '100%'}}>
                <h1>LOG IN</h1>
                <div style={{width: '100%', height: '4rem', background: 'white', margin: '1rem 0 0 0'}}>
                <input 
                style={{border: 'none', outline: 'none'}}
                type="email" placeholder="example@example.com" />
                </div>
                    <div style={{width: '100%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    height: '4rem', 
                    cursor: 'pointer',
                    background: '#7289DA', margin: '1rem 0 0 0'}}>
                        <DiscordIcon />
                        <p style={{fontSize: 20, fontWeight: 'bold'}}>with Discord</p>
                    </div>
                    <div style={{width: '100%', 
                    display: 'flex', cursor: 'pointer', alignItems: 'center', color: 'black',justifyContent: 'center',
                    height: '4rem', background: '#fff', margin: '1rem 0 0 0'}}>
                        <GoogleIcon />
                        <p style={{fontSize: 20, fontWeight: 'bold'}}>with Google</p>
                    </div>
                    <p style={{margin: '1rem 0 0 0'}}>Don't have an account? Sign Up</p>
                </div>
                <div 
                className="submit_btn"
                style={{width: '100%', height: '15%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    SUBMIT
                </div>
                <div 
                className="submit_btn"
                onClick={() => setLogin(false)}
                style={{width: '100%', height: '15%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', fontWeight: 'bold', 
                display: 'flex'}}>
                    CLOSE
                </div>
        </div>
    )
}

const Dropdown = ({setWithdraw, setProfile, setDropdown}: any) => {
    return (
        <div 
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className="dropdown">
            <style jsx>{`
            .dropdown {
                width: 18rem;
                height: 24rem;
                background: rgb(18, 18, 18);
                display: flex;
                flex-direction: column;
                position: fixed;
                justify-content: space-between;
                border: 1px solid rgba(255, 255, 255, 0.1);
                top: 72px;
                right: 24px;
                z-index: 3;
            }

            .submit_btn {
                background: rgba(255, 255, 255, 0.025);
            }

            input {
                width: 100%;
                height: 100%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .submit_btn:hover {
                background: rgba(255, 255, 255, 0.05);
                cursor: pointer;
            }
            `}</style>
            <div 
                onClick={() => setProfile(true)}
                className="submit_btn"
                style={{width: '100%', 
                height: '25%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', 
                display: 'flex'}}>
                    Deposit
                </div>
            <div 
                onClick={() => setWithdraw(true)}
                className="submit_btn"
                style={{width: '100%', height: '25%',
                background: 'rgba(255, 255, 255, 0.005)',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', 
                display: 'flex'}}>
                    Withdrawl
                </div>
                <div 
                className="submit_btn"
                style={{width: '100%', height: '25%',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', 
                display: 'flex'}}>
                    Support
                </div>           
            <div 
                className="submit_btn"
                onClick={() => signOut()}
                style={{width: '100%', height: '25%',
                background: 'rgba(255, 255, 255, 0.005)',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', 
                display: 'flex'}}>
                    Log Out
                </div>
        </div>
    )
}



 
const Header: React.SFC<HeaderProps> = ({setWithdraw, setProfile}) => {
    const [discover, setDiscover] = React.useState(true);
    const [ session, loading ] = useSession();
    const [leaderboard, setLeaderboard] = React.useState(false);
    const [login, setLogin] = React.useState(false)
    const [dropdown, setDropdown] = React.useState(false);
    console.log(session);
    return (
        <div className="header">
            <style jsx>{`

                .logo {
                    fill: rgba(255,255,255, 0.9);
                    color: rgba(255, 255, 255, 0.9);
                }

                .logo:hover {
                    fill: rgba(255,255,255, 1);
                    color: rgba(255, 255, 255, 1);
                }

                .divider {
                    margin: 0 16px 0;
                    height: 24px;
                    width: 1px;
                    background-color: #494d52;
                }

                li {
                    height: 72px;
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    position: relative;
                    z-index: 1;
                    padding: 0 24px 0 24px;
                    line-height: 20.7px;
                    font-family: inherit;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.7);
                }

                .active {
                    color: rgba(255, 255, 255, 0.9);
                    border-bottom: 2px solid #fff;
                    background: rgba(255, 255, 255, 0.05);
                }

                ul {
                    height: 100%;
                }

                li:hover {
                    background: rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                }

                input {
                    background: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding-left: 1rem;
                    color: white;
                }

                input::placeholder {
                    font-family: inherit;
                    font-size: 1.05rem;
                }

                .header {
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 24px 0 24px;
                    border-bottom-color: rgba(255, 255, 255, 0.1);
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    height: 4.5rem;
                    position: sticky;
                    z-index: 3;
                    top: 0px;
                    background: rgb(18, 18, 18);
                }


                @media (max-width: 900px) {
                    .header {
                        display: none;
                    }
                }
            `}</style>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <Link href="/">
                <div 
                className="logo"
                style={{display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', fontSize: '2.25rem'}}>
                The Pot. <Logo />
                </div>
                </Link>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <ul style={{display: 'flex'}}>
                <NavLi onClick={() => {setDiscover(true); setLeaderboard(false)}} active={discover}>DISCOVER</NavLi>
                <NavLi>WATCH</NavLi>
            {!session && <li onClick={() => signIn("discord")}>LOGIN</li>}    
           {session && <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            {session?.user?.name}#{session?.user?.id}
            <div style={{border: '1px solid rgba(255, 255, 255, 0.2)', 
            fontSize: '.75rem',
            padding: '.5rem', margin: '0 0 0 .75rem'}}>$1000.55</div>
            </li> }
            </ul>
            </div>
            {login && <Login setLogin={setLogin} />}
            {dropdown && <Dropdown 
            setWithdraw={setWithdraw}
            setDropdown={setDropdown} setProfile={setProfile}/>}
        </div>
    );
}
 
export default Header;

