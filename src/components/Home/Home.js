import React from 'react';
import News from '../News/News';

function Home() {
  return (
    <div id="home">
      <div
        className="head bg-info"
        style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/home-bg.jpg")`, backgroundSize: 'cover' }}
      >
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1 style={{ fontSize: 'xxx-large' }}> Contestmania </h1>
            <div className="home-text d-inline-block" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
              It is a platform to practice questions on different competetive wesites with lot of features like category
              wise questions on Codforces. You can also find company wise problems on Company page.
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 px-3 mx-auto" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center"> New Updates </h1>
        <News />
      </div>
    </div>
  );
}

export default Home;
