import React from 'react';
import { getSession } from 'next-auth/react';

const ProfilePage = () => (
  <main className={`container`}>
      <h1 className='heading'>{`Profile page`}</h1>
      <p>
          {`Only for logged in users`}
      </p>
  </main>
)

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