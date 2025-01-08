import React from 'react';
import { useRouter } from 'next/router';

interface OAuthButtonProps {
  provider: 'google' | 'github' | 'facebook' | 'twitter'; // Add other providers as needed
  label: string; // Button label (e.g., "Sign in with Google")
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ provider, label }) => {
  const router = useRouter();

  const handleOAuthSignIn = async () => {
    try {
      // Redirect to the dynamic API route for the OAuth provider
      const redirectUrl = `/api/auth/${provider}`;
      router.push(redirectUrl);
    } catch (error) {
      console.error(`Error initiating ${provider} OAuth:`, error);
    }
  };

  return (
    <button
      onClick={handleOAuthSignIn}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm flex items-center justify-center gap-2"
    >
      {label}
    </button>
  );
};

export default OAuthButton;
