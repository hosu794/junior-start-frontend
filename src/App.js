import React from 'react';
import Layout from "./styles/Layout";
import Navbar from "./components/navbar/Navbar";
import LeftMenu from "./components/leftMenu/LeftMenu";
import MainContent from "./components/mainContent/MainContent";
import RightMenu from "./components/rightMenu/RightMenu";
import Footer from "./components/footer/Footer";
import Divider from "@material-ui/core/Divider";
import {ContentLayout} from "./styles/contentStyles";

function App() {
    return (
        <Layout>
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
        </Layout>
    );
}

export default App;
