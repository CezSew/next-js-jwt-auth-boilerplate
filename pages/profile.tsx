import React, { useEffect } from "react";
import { getSession } from 'next-auth/react';

const ProfilePage = props => {
    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <>
            <h1>Profile</h1>
            
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
  
    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }
  

export default ProfilePage;