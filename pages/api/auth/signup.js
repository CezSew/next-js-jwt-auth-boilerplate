import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/database';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Wrong request method!' });
    return;
  }

  const data = JSON.parse(req.body);

  const { email, password, nickname } = data;

  if (!nickname) {
    res.status(422).json({
      message:
        'Invalid input - no nickname specified.',
    });
    return;
  }

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      error:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ error: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
    nickname: nickname
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;