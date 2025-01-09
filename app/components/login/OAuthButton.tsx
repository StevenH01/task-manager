'use client';

import React from 'react';

interface OAuthButtonProps {
  provider: 'google' | 'github' | 'facebook' | 'twitter'; // Add other providers as needed
  label: string; // Button label (e.g., "Sign in with Google")
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ provider, label }) => {
  const handleOAuthSignIn = async () => {
    try {
      const redirectUrl = `/api/auth/${provider}`;
      window.location.href = redirectUrl; // Redirect to the provider's auth URL
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
