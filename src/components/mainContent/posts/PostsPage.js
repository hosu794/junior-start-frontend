import React, {Component} from "react";
import {InputBaseLayout, PaperLayout} from "../../../styles/mainContentStyles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


class PostsPage extends Component {
    render() {
        return (
            <PaperLayout>
                <InputBaseLayout placeholder="Szukaj"/>
                <IconButton type="submit">
                    <SearchIcon/>
                </IconButton>
            </PaperLayout>
        );
    }
}

export default PostsPage;
