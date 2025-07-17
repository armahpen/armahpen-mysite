import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: 'white',
      fontFamily: 'DM Sans, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '500px',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>404</h1>
        
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          marginBottom: '1rem',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>Page Not Found</h2>
        
        <p style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: '1.6'
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
