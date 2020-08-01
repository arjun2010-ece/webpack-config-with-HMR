import React, { Fragment } from 'react';

const styles = {
  heading: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  },
};

const WelcomeMessage = () => {
  return (
    <Fragment>
      <h1 style={styles.heading}>
        Welcome To
      </h1>
      Image is not there...
    </Fragment>
  );
};

export default WelcomeMessage;