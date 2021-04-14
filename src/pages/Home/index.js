import Header from './components/Header';
import Navbar from './components/Navbar';
import Feeds from './components/Feeds';

import { AppWrapper } from './styles';

function Home() {
  return (
    <>
      <Header/>
      <AppWrapper>
        <Navbar/>
        <Feeds/>
      </AppWrapper>
    </>
  );
}

export default Home;