import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link';
import React from 'react'

export interface SmallHeaderProps {
    setWithdraw: React.Dispatch<React.SetStateAction<boolean>>,
    setDeposit: React.Dispatch<React.SetStateAction<boolean>>,
}

const Profile = ({setDeposit, setProfile, setWithdraw}: any) => {
  const [wdraw, setWdraw] = React.useState(false);
  const [ session, loading ] = useSession();

  return (
    <div className="profile">
      <style jsx>{`
      .profile {
        display: flex;
        flex-direction: column;
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
        height: -webkit-fill-available;
        animation: fadeInText 300ms 0ms forwards;
        width: 100vw;
        background: rgb(18, 18, 18);
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

      .submit_btn {
    }

    .h_menu {
      height: 100%;
      min-height: 300px;
      display: grid;
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
      `}</style>
      <div className="h_menu">
            <div
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {!session && <p onClick={() => signIn("discord")}>Login with Discord</p>} 
            {session && <p>{session?.user?.name}#{session?.user?.id}</p> }
            </div>
            <div
            onClick={() => setDeposit(true)} 
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Deposit
            </div>
            <div 
            onClick={() => {
              setWdraw(true);
              setWithdraw(true)}}
            className="rules_btn"
            style={{width: '100%',  
            display: 'flex',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>Withdraw</p>
            </div>
            <div 
            className="join_btn"
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
             display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Log Out
            </div>
            </div>
      <div 
                className="submit_btn"
                onClick={() => setProfile(false)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.05rem', 
                display: 'flex'}}>
                    Close
                </div>
    </div>
  )
}

const Settings = ({setSettings}: any) => {
  return (
    <div className="profile">
      <style jsx>{`
      .profile {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        height: -webkit-fill-available;
        animation: fadeInText 300ms 0ms forwards;
        width: 100vw;
        background: rgb(18, 18, 18);
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

      .submit_btn {
    }

    .h_menu {
      height: 100%;
      min-height: 300px;
      display: grid;
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
      `}</style>
      <div className="h_menu">
            <div
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            
            </div>
            <div 
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Deposit
            </div>
            <div 
            className="rules_btn"
            style={{width: '100%',  
            display: 'flex',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>Withdraw</p>
            </div>
            <div 
            className="join_btn"
            style={{width: '100%', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
             display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Log Out
            </div>
            </div>
      <div 
                className="submit_btn"
                onClick={() => setSettings(false)}
                style={{width: '100%', height: '15vh',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.05rem', 
                display: 'flex'}}>
                    Close
                </div>
    </div>
  )
}


  function SearchIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          fillRule="evenodd"
          d="M11.421 12.6a6.667 6.667 0 111.178-1.178l4.49 4.49a.833.833 0 01-1.178 1.178l-4.49-4.49zm.912-5.266a5 5 0 11-10 0 5 5 0 0110 0z"
          clipRule="evenodd"
        ></path>
        <style jsx>{`
            svg {
                fill: rgba(255, 255, 255, 0.25);
            }

            svg:hover {
                fill: rgba(255, 255, 255, 1);
            }

        `}</style>
      </svg>
    );
  }

function Logo() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 444 491"
      >
        <path
          d="M443.839 169.579v2.133c0 23.528-19.134 42.662-42.662 42.662H42.821C19.295 214.374.16 195.24.16 171.712v-2.133c0-23.528 19.134-42.661 42.662-42.661h358.355c23.528 0 42.662 19.133 42.662 42.661zM430.668 233.916c-1.467-4.498-6.297-6.964-10.789-5.479a59.656 59.656 0 01-18.702 3.001c-378.683-.154-359.383.74-368.605-.885a59.03 59.03 0 01-8.452-2.116c-4.492-1.485-9.322.981-10.79 5.479C-28.584 362.414 50.536 490.606 222 490.606c44.827 0 84.673-8.617 118.429-25.607 87.758-44.16 120.359-138.747 90.24-231.083zM77.75 335.105c6.09 22.782 18.782 42.918 36.689 58.244 3.573 3.061 4 8.447.928 12.031a8.508 8.508 0 01-12.02.927c-20.541-17.565-35.1-40.667-42.085-66.797-1.216-4.543 1.493-9.225 6.037-10.441 4.554-1.216 9.236 1.482 10.451 6.036zM56.57 297.19c.17-4.703 4.105-8.393 8.83-8.223 4.714.171 8.394 4.117 8.223 8.831-.021.768-.043 1.547-.053 2.314a8.54 8.54 0 01-8.533 8.383c-4.839 0-8.617-3.982-8.532-8.681.01-.875.032-1.749.064-2.624zM306.789 0c-26.622 0-51.298 10.64-69.238 29.219-3.283 3.399-8.664 3.393-12.083.133A71.451 71.451 0 00176.138 9.6c-33.838 0-62.346 23.75-69.65 55.462a8.541 8.541 0 01-7.654 6.615C80.777 73.18 64.594 82.323 53.92 96.133c-4.323 5.592-.286 13.728 6.782 13.728h333.96c4.488.002 8.265-3.463 8.517-7.944C406.289 46.909 362.303 0 306.789 0zm-31.58 79.617c-.117.341-.224.65-.309.917-1.472 4.457-6.277 6.894-10.783 5.429a8.548 8.548 0 01-5.429-10.783c.139-.395.288-.853.47-1.354 1.599-4.426 6.484-6.72 10.921-5.13a8.53 8.53 0 015.13 10.92zm32.561-24.168c-3.605.181-9.119 1.045-14.974 4.053-4.074 2.125-9.298.59-11.497-3.669a8.54 8.54 0 013.679-11.497 54.416 54.416 0 0121.896-5.93c4.725-.235 8.725 3.37 8.97 8.084a8.528 8.528 0 01-8.074 8.96z"
        ></path>
        <style jsx>{`
            svg {
                fill: rgba(255, 255, 255, 1);
            }

            svg:hover {
                fill: rgba(255, 255, 255, 1);
            }

        `}</style>
      </svg>
    );
  }

const Avi = () => {
    return (
        <div className="avi">
            <style jsx>{`
            .avi {
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.25);
                border-radius: 100%;
            }
            `}</style>
        </div>
    )
}


const SettingsIcon = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 32 32"
      >
        <path
          d="M29.21 11.84a3.92 3.92 0 01-3.09-5.3 1.84 1.84 0 00-.55-2.07 14.75 14.75 0 00-4.4-2.55 1.85 1.85 0 00-2.09.58 3.91 3.91 0 01-6.16 0 1.85 1.85 0 00-2.09-.58 14.82 14.82 0 00-4.1 2.3 1.86 1.86 0 00-.58 2.13 3.9 3.9 0 01-3.25 5.36 1.85 1.85 0 00-1.62 1.49A14.14 14.14 0 001 16a14.32 14.32 0 00.19 2.35 1.85 1.85 0 001.63 1.55A3.9 3.9 0 016 25.41a1.82 1.82 0 00.51 2.18 14.86 14.86 0 004.36 2.51 2 2 0 00.63.11 1.84 1.84 0 001.5-.78 3.87 3.87 0 013.2-1.68 3.92 3.92 0 013.14 1.58 1.84 1.84 0 002.16.61 15 15 0 004-2.39 1.85 1.85 0 00.54-2.11 3.9 3.9 0 013.13-5.39 1.85 1.85 0 001.57-1.52A14.5 14.5 0 0031 16a14.35 14.35 0 00-.25-2.67 1.83 1.83 0 00-1.54-1.49zM21 16a5 5 0 11-5-5 5 5 0 015 5z"
          data-name="Layer 2"
        ></path>

        <style jsx>{`
            svg {
                fill: rgba(255, 255, 255, 0.25);
            }

            svg:hover {
                fill: rgba(255, 255, 255, 1);
            }

        `}</style>
      </svg>
    )
}
 
const SmallHeader: React.SFC<SmallHeaderProps> = ({setWithdraw, setDeposit}) => {
  const [profile, setProfile] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
    return (
      <div>
        {profile && <Profile
          setDeposit={setDeposit} 
          setWithdraw={setWithdraw}
          setProfile={setProfile}/>}
          {settings && <Settings
          setSettings={setSettings} />}
        <div className="small_header">
            <style jsx>{`
                .small_header {
                    width: 100%;
                    overflow: hidden;
                    display: none;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 16px 0 16px;
                    border-top-color: rgba(255, 255, 255, 0.1);
                    border-top-style: solid;
                    border-top-width: 1px;
                    height: 4.5rem;
                    position: fixed;
                    z-index: 9;
                    bottom: 0px;
                    background: rgb(18, 18, 18);
                }

                @media (max-width: 900px) {
                    .small_header {
                        display: flex;
                        z-index: 9;
                    }
                }
            `}</style>

            <Link href="/">
                <div 
                className="logo"
                style={{display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', fontSize: '2.25rem'}}>
                <Logo />
                </div>
            </Link>
            <SearchIcon />
            <div onClick={() => setProfile(!profile)}>
            <Avi />
            </div>
            <div 
            style={{height: 36}}
            onClick={() => setSettings(!settings)}>
            <SettingsIcon />
            </div>
        </div>
        </div>
    );
}
 
export default SmallHeader;