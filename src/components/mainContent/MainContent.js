import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputBaseLayout,
  MainContentLayout,
  PaperLayout,
} from "../../styles/mainContentStyles";

const MainContent = () => (
  <MainContentLayout>
    <PaperLayout>
      <InputBaseLayout placeholder="Szukaj" />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </PaperLayout>
  </MainContentLayout>
);

export default MainContent;
