import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/49214236?v=4" alt='Avatar of User' />
          <h1>Sandro Silva</h1>
          <h3>Username</h3>
          <span>silvasandro</span>
          <div>
            <div>
            <h4>Followers</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Starreds</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Followings</h4>
            <span>5</span>
            </div>
          </div>
        </div>
        <div>Repository</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
