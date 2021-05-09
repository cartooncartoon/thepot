import React from 'react'
import Link from 'next/link'

export interface HeaderProps {
    
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
        fill="none"
        viewBox="0 0 128 128"
      >
        <path
          d="M115.05 55.61c-.65-1.96-1.36-3.78-2.05-5.43-2.28-5.39-4.54-8.96-5.4-10.23.47-.42.91-.86 1.33-1.31 1.15-1.25 2.15-2.65 2.87-4.28 2.78-6.24.34-14.72-4.57-19.37C95.7 4.13 79.31 1 63.55.84 47.54.67 27.81 6.98 19.33 21.85c-3.02 5.29-2.31 11.58-.01 16.71.25.55.6 1.04.98 1.52-.9 1.38-3.09 4.9-5.3 10.1-2.84 6.69-5.68 16.12-5.69 27.16 0 3.68.33 7.54 1.06 11.53 1.37 7.32 4.01 13.45 7.61 18.48 5.39 7.54 12.83 12.52 20.91 15.58 8.09 3.06 16.83 4.24 25.1 4.24 11.04 0 22.92-2.09 32.93-7.96 5-2.93 9.5-6.83 13.09-11.86 3.59-5.03 6.24-11.16 7.6-18.48.75-3.98 1.07-7.84 1.07-11.53 0-8.32-1.62-15.72-3.63-21.73zM20 52.31c1.31-3.1 2.63-5.56 3.6-7.23.3-.52.56-.93.79-1.3.83.62 1.67.8 2.69 1.18 1.58.59 3.29 1.34 5.01 1.42.86.04 2.98-.31 3.33-1.32.02-.05.05-.09.05-.14.14-.93-.77-1.77-1.88-2.5-1.2-.78-2.63-1.42-3.27-1.88-.18-.12-.34-.26-.51-.39a19.35 19.35 0 01-2.64-2.41c-.64-.71-1.22-1.47-1.68-2.28-.39-.65-.7-1.34-.94-2.05-1.54-4.68.65-9.25 3.57-12.88C36.2 10.47 51.89 8.18 63.55 7.58c9.52-.5 21.99 2.13 30.7 5.93 4.31 1.89 7.73 5.53 9.95 9.6 1.94 3.54 1.7 7.46-.27 10.9-.04.08-.08.17-.13.25-.73 1.22-1.57 2.41-2.49 3.53-.72.87-1.48 1.69-2.29 2.45-.08.07-.14.15-.23.22-.55.51-1.77 1.28-2.6 2.16-.51.54-.86 1.12-.83 1.7.01.16.01.32.09.48 1.15 2.53 5.47-.05 7.46-1.35l.57.07c.96 1.52 2.89 4.78 4.77 9.36.91 2.2 1.81 4.71 2.58 7.46-4.3 2.08-9.93.23-14.53.09-16.95-.53-6.71 21.27-11.72 29.98-2.38 4.12-6.26 5.15-10.53 2.84-2.05-1.11-3.04-4.49-3.33-6.56-.72-5.09.79-11.6-2.11-16.2-3.92-6.25-14.07.37-19.53.16-4.45-.17-8.04-2.95-9.58-7.11-.18-.49-.38-.94-.59-1.35-3.79-7.05-12.79-1.94-17.81-7.42a7.46 7.46 0 01-1.28-2.01c.07-.14.12-.31.18-.45z"
        ></path>
        <path
          d="M45.95 35.24c.12.04.24.07.35.11 2.1.76 4.35 1.4 6.66 1.91 3.27.72 6.7 1.14 10.12 1.27l.62.03c.21 0 .41.02.61.02.1 0 .21.01.32.01 3.94.05 7.81-.34 11.38-1.21.26-.06.55-.1.8-.17 1.73-.46 3.54-1.03 5.21-1.81 2.52-1.18 4.73-2.87 5.9-5.53.24-.51.4-1.01.53-1.5 2.27-8.12-7.96-12-15.93-13.51-2.07-.39-3.99-.63-5.5-.74-4.68-.34-9.93.16-14.51 1.04-5.2 1-10.87 3.54-13.08 8.72-.93 2.2-.84 4.17-.1 5.86 1.11 2.52 3.7 4.41 6.62 5.5zm5.2-5.01c-.76-.26-1.67-.66-2.52-1.19.03-.41.25-.79.6-1.14 1.12-1.11 3.52-1.9 4.8-2.24 4.87-1.3 10.06-1.66 15.13-1.05 2.22.27 4.47.52 6.62 1.11 1.21.33 2.95.91 3.91 1.82.45.43.74.92.69 1.5l-.06.52c-2.88 2.04-8.65 2.35-11.63 2.67-5.84.64-11.99-.13-17.54-2zM31.34 31.67c-1.1-.81-1.95-1.99-2.11-3.16-.26-1.91.55-3.72 1.7-5.21.97-1.28 1.89-2.4 3.35-3.1.64-.3 1.25-.56 1.95-.22.83.41-.33 2.15-.62 2.6-1.33 2.11-2.12 3.95-1.47 6.47.18.71.98 2.22.59 2.94-.68 1.24-2.58.26-3.39-.32z"
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
 
const Header: React.SFC<HeaderProps> = () => {
    const [discover, setDiscover] = React.useState(true);
    const [leaderboard, setLeaderboard] = React.useState(false);
    const [login, setLogin] = React.useState(false)
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
                    overflow: hidden;
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
                    z-index: 999;
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
                <NavLi>SEARCH</NavLi>
                <NavLi onClick={() => {setDiscover(true); setLeaderboard(false)}} active={discover}>DISCOVER</NavLi>
                <NavLi>WATCH</NavLi>
            <li onClick={() => setLogin(!login)}>
                LOGIN
            </li>
            </ul>
            </div>
            {login && <Login setLogin={setLogin} />}
        </div>
    );
}
 
export default Header;

