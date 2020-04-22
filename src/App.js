import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavigationHeader from './components/navigationHeader/NavigationHeader'
import AppRoute from './AppRoute';
import PreviewPane from './components/previewPane/previewPane';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      
   <div className="content">
    <header>
        <Header/>
    </header>

    <main>

        <nav>
            <NavigationHeader/>
        </nav>

        <article>
            <AppRoute/>
        </article>

        <aside>
            <PreviewPane/>
        </aside>

    </main>

    <footer>
       <div className="footer"> www.book-catalogue.com </div> 
    </footer>

    </div>
    </BrowserRouter>
    
    );
}

export default App;
