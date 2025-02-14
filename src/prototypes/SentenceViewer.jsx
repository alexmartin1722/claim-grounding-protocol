import { Typography } from "@mui/material";
import { NormalCard } from "../components/Cards";

function SentenceViewer(props) {
    const {
        payload,
    } = props;

    // let title = payload.Wiki_Title;
    // let text = payload.Wiki_All_Text;
    let sentence = payload.Claim_Sentence

    let title = payload.Wiki_Title;
    // let claims = loadClaimsFromString(payload.Extracted_Claims);


    // let claimList = claims.map((claim, index) => {
    //     return claim.subclaim;
    // });
    


    // TODO: FIGURE OUT HOW TO HIDE THE FULL TEXT UNLESS THE READER WISHES TO UNCOVER IT
    return <NormalCard sx={{
        // margin: "0px",
        // height: "100px",
        overflow: "auto"
    }}>
        <Typography variant="h6">
            {title}
        </Typography>
        <Typography variant="p1">
            <b>Sentence: </b>
            {sentence}
        </Typography>
    </NormalCard>
}

export default SentenceViewer;