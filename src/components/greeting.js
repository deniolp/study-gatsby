import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({greeting = `Hello`, name}) => {
  return (
    <div style={{color: `tomato`}}>
      <h2>
        {greeting}, {name}
      </h2>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Greeting;
