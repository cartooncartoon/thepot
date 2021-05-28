import Pot from '@/../components/PotElements/Pot'
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'


export interface PotPageProps {
    
}
 
const PotPage: React.SFC<PotPageProps> = ({ post }: any) => {
    let router = useRouter();
    const uid = router.query.uid;
    console.log(post);
    return (
        <div>
            <style jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
            `}</style>
            <Pot post={post[0]}/>
        </div>
    );
}


export async function getServerSideProps(ctx: any) {

    console.log(ctx.query.uid);
    const link = new HttpLink({
        uri: "https://novel-monkey-94.hasura.app/v1/graphql",
        headers: {
          'x-hasura-admin-secret': 'YAfDVV13QSPbCWKjRsi2spWbyEJBYCbDb9U8OarAm1loz2OmtxlJs9ubp9TRkDF0',
        }
      });
      
    const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache(),
    });
    
    const { data } = await client.query({
        query: gql`
        query MyQuery($game: String) {
            Post(where: {Game: {_eq: $game}}) {
              Game
              Pot_Amount
              background_image
              Game_Type
            }
          } `,
        variables: {
            game: ctx.query.uid,
        }
    });
    
    return {
        props: {
            post: data.Post,
        }
    }
}
 
export default PotPage;