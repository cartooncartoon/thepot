import React from 'react'

export interface MatchProps {
    
}
 
const Match: React.SFC<MatchProps> = () => {
    return (
        <div className="post_desc">
            <style jsx>{`
            .post_desc {
                width: 100%;
                display: block;
                position: relative;
                animation: fadeInText 300ms 0ms forwards;
                }
    
                .description {
                    display: none;
                    overflow-x: hidden;
                }

                .rules {
                    display: flex;
                    flex-direction: column;
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
                
                
                h1 {
                    margin: 0 0 1rem 0;
                }
    
                .img_wrapper {
                    position: relative;
                    padding-bottom: 56.2%;
                }
    
                .post_write {
                    box-shadow: 8px 4px 16px 4px rgba(0,0,0,0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
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
            <div className="rules">
                <h1>Tournament</h1>
                  <div
                  style={{border: '1px solid rgba(255, 255, 255, 0.1)', height: '5rem', fontWeight: 'bold',
                  display: 'flex', alignItems: 'center', padding: '0 2rem 0 2rem', justifyContent: 'space-between',
                  }}
                  >sweet#0168
                  <p>WON</p>
                  </div>
                  <div
                  style={{border: '1px solid rgba(255, 255, 255, 0.1)', height: '5rem', fontWeight: 'bold',
                  display: 'flex', alignItems: 'center', padding: '0 2rem 0 2rem', justifyContent: 'space-between',
                  }}
                  >sweet#0168
                  <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                  <p>LOST</p>
                  <p style={{fontSize: 12}}>to sweet#0168</p>
                  </div>
                  </div>
            </div>
        </div>
    );
}
 
export default Match;