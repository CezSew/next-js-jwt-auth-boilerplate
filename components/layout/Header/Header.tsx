import styles from './Header.module.css';
import { getSession, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'

const Header = () => {
    const { data: session, status } = useSession()

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {status === `authenticated`
                ? (
                    <>
                        <li className={styles.nav__listItem}>
                            {`Hello ${session.user.email}`}
                        </li>
                        <li className={styles.nav__listItem}>
                            <button
                                type={`button`}
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className={styles.nav__logOut}    
                            >
                                {`Log out`}
                            </button>
                        </li>
                    </>
                )
                : (
                    <>
                        <li className={styles.nav__listItem}>
                            <Link href="/login">
                                <a>Sign in</a>
                            </Link>
                        </li>
                        <li className={styles.nav__listItem}>
                            <Link href="/register">
                                <a>Sign up</a>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export async function getInitialProps(context) {
    const session = await getSession({ req: context.req });
  
    return {
      props: { session },
    };
  }

export default Header;