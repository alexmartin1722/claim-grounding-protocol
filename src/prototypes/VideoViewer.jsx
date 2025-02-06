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
    // let video = payload.Video_URL;
    let video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return <NormalCard sx={{
        // margin: "0px",
        // height: "100px",
        overflow: "auto"
    }}>
        {/* display the video in the webpage */}
        <Typography variant="h4">
            {title}&nbsp;
            <video controls width="100%" height="100%">
                <source src={video} type="video/mp4" />
            </video>
        </Typography>
    </NormalCard>
}


export default VideoViewer;