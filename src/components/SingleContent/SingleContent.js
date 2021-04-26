import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Tooltip } from 'reactstrap';
import React,{useState} from 'react';
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
 
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average >= 7 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <div className="btnn">
      <span herf='#' id ='Like'>
       <BottomNavigationAction
        style={{ color: "rgb(124, 124, 124)" }}
        icon={<ThumbUpAltIcon />}
      /></span>
      <span herf='#' id ='Share'>
      <BottomNavigationAction
        style={{ color: "rgb(124, 124, 124)" }}
        icon={<ShareIcon />}

      /></span>
      <span herf='#' id ='list'>
        <BottomNavigationAction
        style={{ color: "rgb(124, 124, 124)" }}
        icon={<PlaylistAddIcon />}
      /></span>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="list" toggle={toggle}>
        Add to my-list
      </Tooltip>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Like" toggle={toggle}>
        Like
      </Tooltip>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Share" toggle={toggle}>
       Share
      </Tooltip>
      </div>
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
        
      </span>
    </ContentModal>
  );
};

export default SingleContent;
