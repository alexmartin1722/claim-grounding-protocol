import { Typography } from "@mui/material";
import { NormalCard } from "../components/Cards";

function WikiViewer(props) {
    const {
        payload,
    } = props;

    let title = payload.Wiki_Title;
    let text = payload.Wiki_All_Text;

    // TODO: FIGURE OUT HOW TO HIDE THE FULL TEXT UNLESS THE READER WISHES TO UNCOVER IT
    return <NormalCard sx={{
        margin: "30px",
        height: "500px",
        overflow: "auto"
    }}>
        <Typography variant="h4">
            {title}&nbsp;
        </Typography>
        <br />
        {/* <TextBlock prefix="Abstract: " text={abstract} /> */}
        <Typography variant="weaknessDescription">
            
            <b>Article Text: </b>
            {text}
        </Typography>
    </NormalCard>
}

export default WikiViewer;