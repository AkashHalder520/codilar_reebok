import React from 'react';

const OfflinePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>You are Offline</h1>
      <p style={styles.message}>Please check your internet connection and try again.</p>
      {/* You can add more content or components as needed */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0', // Change the background color as desired
  },
  title: {
    fontSize: '2em',
    color: '#333', // Change the text color as desired
  },
  message: {
    fontSize: '1.2em',
    color: '#555', // Change the text color as desired
    marginTop: '20px',
  },
};

export default OfflinePage;
