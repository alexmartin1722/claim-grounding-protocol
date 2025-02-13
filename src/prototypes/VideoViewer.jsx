import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextBlock from "./TextBlock";
import { NormalCard } from "../components/Cards";
import { Height } from "@mui/icons-material";





function VideoViewer (props) {
    const {
        payload,
    } = props;

    let title = payload.Video_Title;
    let video = payload.Video_Url;
    // console.log(video);
    // let video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return <NormalCard sx={{
        // margin: "0px",
        // height: "100px",
        height: "100%",
        width: "100%",
        margin: "1px",
        padding: "5px",
        overflow: "auto"
    }}>
        {/* display the video in the webpage */}
            <video controls width="100%" height="100%">
                <source src={video} type="video/mp4" />
            </video>
            
        {/* <iframe height="100%" width="100%" src={video} allow="accelerometer; autoplay; fullscreen" ></iframe> */}
    </NormalCard>
}


export default VideoViewer;