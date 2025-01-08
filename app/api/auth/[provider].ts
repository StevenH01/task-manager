import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, Provider } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query; // Get provider name from URL

  if (!provider) {
    return res.status(400).json({ error: 'Missing provider parameter' });
  }

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider, // e.g., 'google', 'github'
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`, // Replace with your callback URL
      },
    });

    if (data?.url) {
      return res.redirect(data.url); // Redirect to the OAuth provider's URL
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('OAuth redirect error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
