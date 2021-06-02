import Discover from '@/../components/DiscoverElements/Discover';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';






export default function Home({ session }: any) {
  console.log(session)
  return (
    <div style={{position: 'relative'}}>
      <Head>
        <title>The Pot.</title>
      </Head>
      <style jsx>{`
      .discover {
        padding: 0 24px 0 24px;
      }
      .navbar {
        display: flex;
        justify-content: flex-end;
        z-index: 1;
        margin: 0 0 1rem 0;
        padding: 2rem 30px 1.20rem 30px;
        top: 72px;
      }
      
      @media (max-width: 900px) {
        .navbar {
            display: flex;
            justify-content: flex-end;
            margin: 0 0 0 0;
            padding: 1rem 0 1rem 0;
            top: 0;
        }

        .discover {
          padding: 0 0 0 0;
        }
        }
      `}
      </style>
      <div 
      className="discover">
      <Discover />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context)
    }
  }
}
