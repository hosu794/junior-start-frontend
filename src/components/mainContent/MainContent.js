import React, {Component} from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import {InputBaseLayout, MainContentLayout, PaperLayout} from "../../styles/mainContentStyles";

class MainContent extends Component {
    render() {
        return (
            <MainContentLayout>
                <PaperLayout>
                    <InputBaseLayout placeholder="Szukaj"/>
                    <IconButton type="submit">
                        <SearchIcon/>
                    </IconButton>
                </PaperLayout>
            </MainContentLayout>
        );
    }
}

export default MainContent;
