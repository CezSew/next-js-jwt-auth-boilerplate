import { useEffect } from 'react';
import { connectToDatabase } from '../lib/database';

const Tests = props => {
    useEffect(() => {
        console.log(props)
    })

    return (
        <div>
            <h1>Tests</h1>

        </div>
    )
}

export async function getServerSideProps() {
    const client = await connectToDatabase();
    const db = client.db().collection('tests');

    const tests = await db.find().toArray();

    const response = JSON.stringify(tests);

    return {
      props: {
        tests: response
      },
    };
  }

export default Tests;