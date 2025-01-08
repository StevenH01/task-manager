import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Parse the request for query parameters (e.g., access_token, provider_token)
    const { access_token, refresh_token, provider_token } = req.query;

    if (!access_token) {
      return res.status(400).json({ error: 'Missing access_token in callback' });
    }

    // Optionally, store tokens or use them as needed
    const sessionData = {
      accessToken: access_token,
      refreshToken: refresh_token,
      providerToken: provider_token,
    };

    console.log('OAuth session data:', sessionData);

    // Set the session in Supabase (if needed)
    const { data, error } = await supabase.auth.setSession({
      access_token: access_token as string,
      refresh_token: refresh_token as string,
    });

    if (error) {
      console.error('Error setting Supabase session:', error);
      return res.status(500).json({ error: 'Failed to set session in Supabase' });
    }

    // Redirect the user to the dashboard or home page after successful login
    res.redirect('/dashboard'); // Adjust the redirect path as needed
  } catch (error) {
    console.error('Error handling OAuth callback:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
