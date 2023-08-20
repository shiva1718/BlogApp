//
// import './App.css';
// import LoginPage  from "./firstpage/LoginPage";
//
//
// function App() {
//   return (
//     <div className="App">
//       <LoginPage />
//
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import List from "./main/List";
import SinglePage from './main/SinglePage';
import { Helmet } from 'react-helmet';
import Nav from './main/Nav';
import Top from './main/Top';
import './main/cute.css';
import EditPage from "./main/EditPage";

function App(){
        return (
            <BrowserRouter>
                <Helmet>
                    <html lang="en" />
                    <title>Blog</title>
                </Helmet>
                <Top />
                <div className="container">
                    <Nav />

                </div>
                <div>

                    <div className="container">
                        <div className="row">
                                {/*<Link to="/article/:title" exact ></Link>*/}
                                {/*<Link to="/:title" ></Link>*/}

                                <Routes>
                                    <Route path="/" element={<List/>} exact/>
                                    <Route path="/:endpoint" element={<SinglePage />} />
                                    <Route path="/api/posts" element={<EditPage/>} />
                                </Routes>

                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
}

export default App;

