import Link from 'next/link';
import React from 'react'

export interface SmallHeaderProps {
    
}

function UpArrow() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        x="0"
        y="0"
        enableBackground="new 0 0 970.504 970.503"
        version="1.1"
        viewBox="0 0 970.504 970.503"
        xmlSpace="preserve"
      >
        <path d="M120.027 962.802c26.6 0 53.5-8.801 75.7-27l288.1-234.7 290.899 237c22.301 18.1 49.101 27 75.7 27 34.8 0 69.4-15.101 93.101-44.2 41.899-51.4 34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6 0l-363.8 296.5c-51.4 41.8-59.1 117.399-17.3 168.8 23.8 29.1 58.3 44.2 93.1 44.2z"></path>
        <path d="M120.027 541.902c26.6 0 53.5-8.8 75.7-27l288.1-234.7 290.899 237c22.301 18.101 49.101 27 75.7 27 34.8 0 69.4-15.1 93.101-44.2 41.899-51.399 34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6 0l-363.8 296.4c-51.4 41.9-59.1 117.5-17.3 168.9 23.8 29.1 58.3 44.2 93.1 44.2z"></path>
        <style jsx>{`
            svg {
                fill: rgba(255, 255, 255, 1);
                margin: 0 0 0 .5rem;
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
        width="42"
        height="42"
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
                fill: rgba(255, 255, 255, 1);
                margin: 0 0 0 .5rem;
            }

            svg:hover {
                fill: rgba(255, 255, 255, 1);
            }

        `}</style>
      </svg>
    );
  }
 
const SmallHeader: React.SFC<SmallHeaderProps> = () => {
    return (
        <div className="small_header">
            <style jsx>{`
                .small_header {
                    width: 100%;
                    overflow: hidden;
                    display: none;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 24px 0 24px;
                    border-bottom-color: rgba(255, 255, 255, 0.1);
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    height: 4.5rem;
                    position: fixed;
                    z-index: 999;
                    bottom: 0px;
                    background: rgb(18, 18, 18);
                }

                @media (max-width: 900px) {
                    .small_header {
                        display: flex;
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
        </div>
    );
}
 
export default SmallHeader;