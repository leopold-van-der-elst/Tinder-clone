import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton classname="swipeButtons__repeat" >
        <ReplayIcon fontSize="large" sx={{ color: "#f5b748" }} />
      </IconButton>
      <IconButton classname="swipeButtons__left">
        <CloseIcon fontSize="large" sx={{ color: "#ec5e6f " }} />
      </IconButton>
      <IconButton classname="swipeButtons__star">
        <StarRateIcon fontSize="large" sx={{ color: "#62b4f9" }} />
      </IconButton>
      <IconButton classname="swipeButtons__right">
        <FavoriteIcon fontSize="large" sx={{ color: "#76e2b3" }} />
      </IconButton>
      <IconButton classname="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" sx={{ color: "#915dd1" }} />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
