import { getSession, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'

const Layout = props => {
  const { data: session, status } = useSession()

  console.log(session)
  return (
    <>
        <ul>
            <li>
              {status === `authenticated`
              ? (
                <>
                  {`Hello ${session.user.email}`}
                  <button onClick={() => signOut({ callbackUrl: '/' })}>Log out</button>
                </>
              )
              : (
                <>
                <Link href="/login">
                  <a>Sign in</a>
                </Link>
                <Link href="/register">
                  <a>Sign up</a>
                </Link>
                </>
                // <button onClick={() => signOut({ callbackUrl: '/' })}>Log out</button>
              )}
            </li>
        </ul>
        <main>{props.children}</main>
    </>
  );
}

export async function getInitialProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
}
  

export default Layout;