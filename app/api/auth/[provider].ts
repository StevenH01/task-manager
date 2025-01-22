import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, Provider } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables are missing!');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query;

  if (!provider || typeof provider !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing provider parameter' });
  }

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`, // Replace with your callback URL
      },
    });

    if (data?.url) {
      return res.redirect(data.url); // Redirect the user to the OAuth provider's URL
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('OAuth redirect error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
