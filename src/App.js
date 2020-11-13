import React from 'react';
import Layout from "./styles/Layout";
import Navbar from "./components/navbar/Navbar";
import LeftMenu from "./components/leftMenu/LeftMenu";
import MainContent from "./components/mainContent/MainContent";
import RightMenu from "./components/rightMenu/RightMenu";
import Footer from "./components/footer/Footer";
import Divider from "@material-ui/core/Divider";
import {ContentLayout} from "./styles/contentStyles";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Layout>
            <Router>
                <Navbar/>
                <ContentLayout>
                    <LeftMenu/>
                    <Divider orientation="vertical" flexItem/>
                    <MainContent/>
                    <Divider orientation="vertical" flexItem/>
                    <RightMenu/>
                </ContentLayout>
                <Divider/>
                <Footer/>
            </Router>
        </Layout>
    );
}

export default App;
