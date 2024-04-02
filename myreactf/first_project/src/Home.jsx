import React from 'react';
import Naruto_2 from './Naruto_2.jpg'

function Na(props) {
  const userPic = <img src={Naruto_2} alt='the sage naruto' width='' height='' />;
  return userPic;
}
const Home = () => {
  return (
    <div>
      <Na />
      <p className='h'>Welcome to the world of Naruto</p>
      <p className='p'>Join Naruto Uzumaki, a spirited young ninja with dreams of becoming the strongest ninja and earning the respect of his village, as he embarks on a journey filled with trials and tribulations. Alongside his friends Sasuke Uchiha and Sakura Haruno, Naruto faces formidable foes, uncovers long-buried secrets, and ultimately discovers the true meaning of strength..</p>
      <footer>
        <p className='f'>bikram copyright ©️.</p>
      </footer>
    </div>
  );
};

export default Home;
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to our app!</h1>
//       <p>This is the home page.</p>
//     </div>
//   );
// };

// export default Home;