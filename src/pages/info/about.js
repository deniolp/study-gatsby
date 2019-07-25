import React from 'react';
import {Link} from 'gatsby';

import styles from './about.module.css';
import Layout from '../../components/layout2';

import avaImage from '../../images/Ava.jpg';

const User = (props) => {
  return (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <User
        username="Denis Popov"
        avatar={avaImage}
        excerpt="JSON, React and Elm developer"
      />
      <br />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
