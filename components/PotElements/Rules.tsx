import { gql, useQuery, useSubscription } from '@apollo/client';
import React from 'react'


export interface RulesProps {
    
}

const GET_STATS = gql`
subscription MySubscription {
  Post(where: {Game: {_eq: "Call of Duty:  Cold War"}}) {
    user_stats {
      id
      post_id
      prize
      rank
      result_proof_url
      result_text
      user_name
    }
  }
}
`
 
const Rules: React.SFC<RulesProps> = () => {
  const { loading, error, data } = useSubscription(GET_STATS);

  if (loading) return null
  if (error) return <div>Hello</div>
  if(data) console.log(data)
  
    return (
        <div className="post_desc">
            <style jsx>{`
            .post_desc {
            width: 100%;
            position: relative;
            animation: fadeInText 300ms 0ms forwards;
            }

            .description {
                display: none;
                overflow-x: hidden;
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
            
            
            h3 {
                margin: 1rem 0 .25rem 0;
            }

            .img_wrapper {
                position: relative;
                padding-bottom: 56.2%;
            }

            .post_write {
                padding-bottom: 2rem;
            }

            .btn {
                cursor: pointer;
            }

            .btn:hover {
                background: rgba(255, 255, 255, 0.1);
            }

            img {
                position: absolute;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }


            p {
                font-size: 1rem;
                line-height: 1rem;
            }

            td {
                font-size: 14px;
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
            <div className="post_write">
            <div className="rules">
                <table>
  <tr>
    <th>Rank</th>
    <th>Name</th>
    <th>Result</th>
    <th>Prize</th>
  </tr>
  { data &&
    data?.Post[0]?.user_stats.map((val: any) => {
      return (<tr>
        <td>{val.rank}</td>
        <td>{val.user_name}</td>
        <td>{val.result_text}</td>
        <td>${val.prize}</td>
        </tr>)
    })
  }
  <tr
  >
      <td 
      className="btn"
      style={{textAlign: 'center'}}
      colSpan={4}>View More</td>
  </tr>
</table>

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
            </div>
        </div>
    );
}
 
export default Rules;