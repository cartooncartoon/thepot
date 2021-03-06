import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import DiscoverItem from './DiscoverItem'


export interface DiscoverProps {
    
}

let useClickOutside = (handler: () => void) => {
  let domNode = React.useRef<any>();

  React.useEffect(() => {
    let maybeHandler = (event: { target: any; }) => {
      if (!domNode?.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const JSONData = [
  {
    name: 'George',
  },
  {
    name: 'Pam',
  },
  {
    name: 'Leon',
  },
  {
    name: 'Brad',
  },
  {
    name: 'Chris',
  },
  {
    name: 'George',
  },
  {
    name: 'Pam',
  },
  {
    name: 'Leon',
  },
  {
    name: 'Brad',
  },
  {
    name: 'Chris',
  },
  {
    name: 'George',
  },
  {
    name: 'Pam',
  },
  {
    name: 'Leon',
  },
  {
    name: 'Brad',
  },
  {
    name: 'Chris',
  },
]

const FilterData = [
  {
    name: 'Recent',
    active: false,
  },
  {
    name: 'Oldest',
    active: false,
  },
  {
    name: 'Min Amount',
    active: false,
  },
  {
    name: 'Max Amount',
    active: false,
  },
  {
    name: 'Most Expensive',
    active: false,
  },
  {
    name: 'Least Expensive',
    active: false,
  },
  { 
    name: 'Contains',
    active: false,
  }
]


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

const GameSelect = ({children, onClick, active}: any) => {
  return (
    <li onClick={onClick}>
      <style jsx>{`
      li {
        font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 1rem;
          margin-top: 1rem;
      }

      `}</style>
      {children}
      {active && <CheckIcon />}
    </li>
  )
}


const FilterSelect = ({children, onClick, active, setActive}: any) => {
  const [amount, setAmount] = React.useState(false);

  let node = React.useRef<any>(null);
  
  return (
    <li 
    onClick={onClick}>
      <style jsx>{`
      li {
        font-size: 1.25rem;
          display: flex;
          align-items: center;
          overflow: hidden;
          justify-content: space-between;
          cursor: pointer;
          padding: 1.5rem;
          margin: 1rem;
          margin-top: 1rem;
          border: ${active ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 0.1);'}
      }

      input {
        background: none;
        color: inherit;
        font-size: 16px;
        border: none;
        width: 100px;
        outline: none;
      }

      span {
        opacity: .25;
      }

      [contentEditable=true]:empty:not(:focus):before{
        content:attr(data-ph);
        color:grey;
        font-style:italic;
      }

      span:focus {
        outline: none;
        opacity: 1;
        border: none;
      }

      li:hover {
        border: 1px solid rgba(255, 255, 255, 1);
      }

      `}</style>
      {children}
      <div
      style={{display: 'flex', alignItems: 'center'}}>
      { (children.includes('Contains') || children.includes('Max Amount') || children.includes('Min Amount')) &&
      <span
      contentEditable
      ref={node}
      style={{margin: '0 1rem 0 0'}}>{`${children.includes('Contains') ? 'Keyword' : 'Amount'}`}</span>
      }
      {active && <CheckIcon />}
      </div>
    </li>
  )
}

const Dropdown = ({setGame}: any) => {
  const [active, setActive] = React.useState('');
    const [query, setQuery] = React.useState('');
    console.log(JSON);
    return (
      <div className="overlay">
        <style jsx>{`

          .overlay {
            width: 100vw;
            height: 100vh;
            background: rgba(18, 18, 18, .7);
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
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

          .dropdown {
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 90vh;
            overflow: hidden;
            background: rgb(18, 18, 18);
            animation: fadeInText 300ms 0ms forwards;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 900px) {
            .dropdown {
                width: 100vw;
                height: 100vh;
                height: -webkit-fill-available;
                max-height: -webkit-fill-available;
                z-index: 99;
            }
        }
  
          .apply_btn {
            background: rgba(255, 255, 255, 0.1);
        }

        ul {
          font-size: 1.5rem;
          height: 100%;
          color: white;
          overflow-y: auto;
        }
  
  
        .close_btn {
          
      }
  
        .suggestions {
          height: 100%;
          widht: 100%;
          overflow-x: hidden;
          overflow-y: auto;
        }
  
        input {
            width: 100%;
            appeareance: none;
            border: none;
            border-radius: 0px;
            outline: none;
            background: none;
            color: white;
            padding-left: 2rem;
            padding-right: 1rem;
            font-size: 1.5rem;
            height: 7rem;
        }

        input[type="search"] {
          -webkit-appearance: none;
        }

  
        .apply_btn:hover {
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
        }
  
        .close_btn:hover {
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
      }
          `}</style>
      <div 
      className="dropdown">
          <div>
          <input 
          placeholder="Game?"
          onChange={(e) => setQuery(e.target.value)}
          type="search" />
          </div>
          <div className="suggestions">
          <ul id="myUL">
          {JSONData.filter((value)=> {
            if(query === "") {
              return value
            } else if (value.name.toLowerCase().includes(query.toLowerCase())) {
              return value
            }
          }).map((value) => {
            return <GameSelect 
            active={active == value.name ? true : false}
            onClick={() => setActive(active == value.name ? '' : value.name)}>{value.name}</GameSelect>
          })}
          </ul>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div 
                  onClick={() => setGame(false)}
                  className="close_btn"
                  style={{width: '100%', height: '7rem', flexShrink: 0,
                  alignItems: 'center', justifyContent: 'flex-end', marginRight: '2rem',
                  fontSize: '1.25rem', 
                  display: 'flex'}}>
                      Apply
            </div>
            </div>
      </div>
      </div>
    )
  }

const GTDropdown = ({setGT}: any) => {
 
  const [active, setActive] = React.useState('');
  const [query, setQuery] = React.useState('');
  console.log(JSON);
  return (
    <div className="overlay">
      <style jsx>{`

        .overlay {
          width: 100vw;
          height: 100vh;
          background: rgba(18, 18, 18, .7);
          position: fixed;
          z-index: 9999;
          left: 0;
          top: 0;
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

        .dropdown {
          width: 50vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 90vh;
          overflow: hidden;
          background: rgb(18, 18, 18);
          animation: fadeInText 300ms 0ms forwards;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 900px) {
          .dropdown {
              width: 100vw;
              height: 100vh;
              height: -webkit-fill-available;
              max-height: -webkit-fill-available;
              z-index: 99;
          }
      }

        .apply_btn {
          background: rgba(255, 255, 255, 0.1);
      }

      ul {
        font-size: 1.5rem;
        height: 100%;
        color: white;
        overflow-y: auto;
      }


      .close_btn {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

      .suggestions {
        height: 100%;
        widht: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }

      input {
          width: 100%;
          appeareance: none;
          border: none;
          border-radius: 0px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          outline: none;
          background: none;
          color: white;
          padding-left: 2rem;
          padding-right: 1rem;
          font-size: 1.5rem;
          height: 7rem;
      }

      input[type="search"] {
        -webkit-appearance: none;
      }


      .apply_btn:hover {
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
      }

      .close_btn:hover {
        background: rgba(255, 255, 255, 0.05);
        cursor: pointer;
    }
        `}</style>
    <div 
    className="dropdown">
        <div className="suggestions">
        <ul id="myUL">
        {JSONData.filter((value)=> {
          if(query === "") {
            return value
          } else if (value.name.toLowerCase().includes(query.toLowerCase())) {
            return value
          }
        }).map((value) => {
          return <GameSelect 
          active={active == value.name ? true : false}
          onClick={() => setActive(active == value.name ? '' : value.name)}>{value.name}</GameSelect>
        })}
        </ul>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div 
                onClick={() => setGT(false)}
                className="close_btn"
                style={{width: '100%', height: '7rem', flexShrink: 0,
                alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
                display: 'flex'}}>
                    Apply
          </div>
          </div>
    </div>
    </div>
  )
  }
  
  
  const FilterDropdown = ({setFilter}: any) => {
    const [active, setActive] = React.useState<any>([]);
    const [query, setQuery] = React.useState('');

    const handleRemoveItem = (name: any) => {
      active.filter((item: any) => name == item ? item = null : item)
  }

    if(active.includes("Recent")) {
      setActive(active.filter((item: any) => "Oldest" == item ? item = null : item));
    }

    console.log(active[0]);
    return (
      <div className="overlay">
        <style jsx>{`
  
          .overlay {
            width: 100vw;
            height: 100vh;
            background: rgba(18, 18, 18, .7);
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
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
  
          .dropdown {
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 90vh;
            overflow: hidden;
            background: rgb(18, 18, 18);
            animation: fadeInText 300ms 0ms forwards;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
  
          @media (max-width: 900px) {
            .dropdown {
                width: 100vw;
                height: 100vh;
                height: -webkit-fill-available;
                max-height: -webkit-fill-available;
                z-index: 99;
            }
        }
  
          .apply_btn {
            background: rgba(255, 255, 255, 0.1);
        }
  
        ul {
          font-size: 1.5rem;
          height: 100%;
          color: white;
          overflow-y: auto;
        }
  
  
        .close_btn {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
  
        .suggestions {
          height: 100%;
          widht: 100%;
          overflow-x: hidden;
          overflow-y: auto;
        }
  
        input {
            width: 100%;
            appeareance: none;
            border: none;
            border-radius: 0px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            outline: none;
            background: none;
            color: white;
            padding-left: 2rem;
            padding-right: 1rem;
            font-size: 1.5rem;
            height: 7rem;
        }
  
        input[type="search"] {
          -webkit-appearance: none;
        }
  
  
        .apply_btn:hover {
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
        }
  
        .close_btn:hover {
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
      }
          `}</style>
      <div 
      className="dropdown">
          <div className="suggestions">
          <ul id="myUL">
          {FilterData.map((value) => {
            return <FilterSelect
            onClick={() => setActive(
              active.includes(value.name) 
              ? active.filter((item: any) => value.name == item ? item = null : item)
              : (prev:any) => [...prev, value.name])}
            value={value} 
            active={active.includes(value.name) ? true : false}
            setActive={setActive}
            >{value.name}</FilterSelect>
          })}
          </ul>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div 
                  onClick={() => setFilter(false)}
                  className="close_btn"
                  style={{width: '100%', height: '7rem', flexShrink: 0,
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  display: 'flex'}}>
                      Apply
            </div>
            </div>
      </div>
      </div>
    )
  }
  
  
  function Select() {
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
        <path d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM139.327 287.82l-21.213 21.213L65.081 256l53.033-53.033 21.213 21.213L107.508 256l31.819 31.82zM256 446.919l-53.033-53.033 21.213-21.213L256 404.492l31.82-31.819 21.213 21.213L256 446.919zm31.82-307.592L256 107.508l-31.82 31.819-21.213-21.213L256 65.081l53.033 53.033-21.213 21.213zm106.066 169.706l-21.213-21.213L404.492 256l-31.819-31.82 21.213-21.213L446.919 256l-53.033 53.033z"></path>
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
  
  
  function Logo() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
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
                fill: white;
                margin: 0 .5rem 0 0;
            }
  
            svg:hover {
                fill: inherit;
            }
  
        `}</style>
      </svg>
    );
  }
  
  const MenuItem = ({children, onClick}: any) => {
    return (
        <li 
        onClick={onClick}
        className="menuItem">
            <style jsx>{`
            .menuItem {
                font-weight: 500;
                border: 1px solid rgba(255, 255, 255, 0.1);
                cursor: pointer;
                display: flex;
                font-size: 14px;
                justify-content: center;
                align-items: center;
                min-width: 120px;
                padding: 16px 36px 16px 36px;
                margin-left: 1rem;
                transition: transform 350ms ease, -webkit-transform 350ms ease;
            }
  
            .menuItem:hover {
                transform: scale(0.94);
                font-weight: 500;
            }
            `}</style>
            {children}
        </li>
    )
  }
 
const Discover: React.SFC<DiscoverProps> = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
    const [game, setGame] = React.useState(false);
    const [gt, setGT] = React.useState('');
    const [filter, setFilter] = React.useState(false);

    let domNode = useClickOutside(() => {
      
    });

    let posts = [];

    if(data) {
    posts = data.Post;
    console.log(data.Post);
    }

    if(error) return null
    if (loading) return null
  
    return (
        <div style={{position: 'relative'}}>
          {game && <Dropdown setGame={setGame}/>}
          {gt == 'gt' && <GTDropdown setGT={setGT}/>}
          {filter && <FilterDropdown setFilter={setFilter} />}
            <style jsx>{`
            .discover {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                padding-bottom: 8rem;
                gap: 1rem;
                overflow: hidden;
            }


            .navbar {
                display: flex;
                justify-content: flex-end;
                margin: 0 0 1rem 0;
                z-index: 1;
                padding: 2rem 0 1.20rem 0;
                top: 72px;
              }
              
              @media (max-width: 900px) {
                .navbar {
                    display: flex;
                    justify-content: flex-end;
                    z-index: 99;
                    margin: 0 0 0 0;
                    padding: 1rem 0 1rem 0;
                    top: 0;
                }
              }
            
            @media (max-width: 1280px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }
            }

            @media (max-width: 800px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1rem;
                }
            }

            
            `}</style>
            <div 
      className="navbar"
      style={{alignItems: 'center',
      background: 'rgb(18, 18, 18)', 
      position: 'sticky', }}>
        <div 
        style={{alignItems: 'center', display: 'flex', overflow: 'auto'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}><MenuItem onClick={() => setGame(game == false ? true : false)}><Joystick /> Game</MenuItem>
        </div>
        <div 
        style={{display: 'flex', flexDirection: 'column'}}><MenuItem onClick={() => setGT(gt == 'gt' ? '' : 'gt')}><Select /> Type</MenuItem>
        </div>
        <div><MenuItem onClick={() => setFilter(!filter)}><svg 
        style={{margin: '0 .5rem 0 0'}}
        viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 16L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 16L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 8L18 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8L4 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="9" cy="16" r="3" fill="currentColor"></circle><circle cx="15" cy="8" r="3" fill="currentColor"></circle></svg> Filter</MenuItem>
        </div>
        </div>
        </div>
        <div className="discover">
            { posts.map((post: any) => {
              return <DiscoverItem 
              prize={post.Pot_Amount}
              type={post.Game_Type}
              img={post.background_image}
              user={post.user.name}
              game={post.Game}/>
            })}
        </div>
        </div>
    );
}

const GET_POSTS =  gql`
query MyQuery {
  Post {
    Game
    user {
      name
    }
    Pot_Amount
    background_image
    Game_Type
  }
}
`
 
export default Discover;