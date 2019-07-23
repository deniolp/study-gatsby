import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <p>
        Nulla pariatur ad mollit irure. Id nostrud amet in dolore amet eiusmod
        non. Magna amet ea elit qui dolore reprehenderit deserunt elit mollit
        et. Nostrud culpa aute culpa exercitation ipsum laborum ad. Id elit
        occaecat duis aliquip labore non. Voluptate cillum fugiat mollit et quis
        duis ullamco mollit qui veniam eiusmod laboris adipisicing.
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
