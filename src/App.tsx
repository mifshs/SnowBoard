import React, { Component } from 'react';
import Catalog_up from './components/catalog/catalog_up';
import Header from './components/header/header';
import Header1 from './components/header/header1';
import Advantages from './components/advantages/advantages';
import Sky_black from './img/catalog_img/Sky_black.png';
import Catalog from './components/catalog/catalog';
import Categories from './components/catalog/catalog1';
import Gallery from './components/gallery/gallery';
import Explore from './components/explore/explore';
import Choose from './components/choose/choose';
import Video from './components/video/video';
import Map from './components/map/map';
import Aboutus from './components/aboutus/about';
import Footer from './components/footer/footer';
import Items1 from './components/items/items1';
import Items2 from './components/items/items2';
import Items3 from './components/items/items3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board_brown from './img/catalog_img/Board_brown.png';
import Board_white from './img/catalog_img/Board_white.png';
import Ski_glasses_green from './img/catalog_img/Ski_glasses_green.png';
import Bottle from './img/catalog_img/Bottle.png';


interface Item {
  name: string;
  category: string;
  old_price: string;
  price: string;
  img: string;
}

interface State {
  currentItems: Item[];
  itemsForSale: Item[];
  hideHeaderAndAdvantages: boolean;
}

class App extends Component<{}, State> {
  private topRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);

    this.state = {
      currentItems: [],
      itemsForSale: [
        {
          name: 'Sardinia White',
          category: 'Boards',
          old_price: '449.99 SAR',
          price: '312.49 SAR',
          img: Board_white
        },
        {
          name: 'Sicily Grey 30x60',
          category: 'Ski',
          old_price: '449.99 SAR',
          price: '312.49 SAR',
          img: Ski_glasses_green
        },
        {
          name: 'Sicily Grey',
          category: 'Boards',
          old_price: '449.99 SAR',
          price: '312.49 SAR',
          img: Board_brown
        },
        {
          name: 'Sicily Grey Décor 30×60',
          category: 'Sky',
          old_price: '449.99 SAR',
          price: '312.49 SAR',
          img: Sky_black
        },
        {
          name: 'Sicily Black Décor 60×60',
          category: 'Other',
          old_price: '449.99 SAR',
          price: '312.49 SAR',
          img: Bottle
        },
      ],
      hideHeaderAndAdvantages: false,
    };

    this.topRef = React.createRef();
  }

  componentDidMount() {
    this.chooseCategory('all');
    this.forceUpdate();
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    const path = window.location.pathname;
    if ((path === '/items1' || path === '/items2' || path === '/items3' || path === '/about') && !this.state.hideHeaderAndAdvantages) {
      this.setState({ hideHeaderAndAdvantages: true }, () => {
        if (this.topRef.current) {
          this.topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      });
  
      this.forceUpdate();
    } else if ((path !== '/items1' && path !== '/items2' && path !== '/items3' && path !== '/about') && this.state.hideHeaderAndAdvantages) {
      this.setState({ hideHeaderAndAdvantages: false });
  
      this.forceUpdate();
    }
  }

  chooseCategory = (category: string) => {
    if (category === 'all') {
      this.setState({ currentItems: this.state.itemsForSale });
    } else {
      this.setState({
        currentItems: this.state.itemsForSale.filter(el => el.category === category)
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
        { (window.location.pathname === '/items1' || window.location.pathname === '/items2' || window.location.pathname === '/items3'|| window.location.pathname === '/about' ) ? <Header1 /> : <Header /> }
          
          {!this.state.hideHeaderAndAdvantages && (
            <div>
              <Advantages />
            </div>
          )}
          <div ref={this.topRef}>
          <Routes>
            <Route path="/items1" element={<Items1 />} />
          </Routes>
          <Routes>
            <Route path="/items2" element={<Items2 />} />
          </Routes>
          <Routes>
            <Route path="/items3" element={<Items3 />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<Aboutus />} />
          </Routes>
          </div>
          <Catalog_up/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Catalog itemsForSale={this.state.currentItems}/>
          <Gallery/>
          <div>
            <Explore />
          </div>
          <Choose/>
          <Video/>
          <Map/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;