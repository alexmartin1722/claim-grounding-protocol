import { Typography } from "@mui/material";
import { NormalCard } from "../components/Cards";

function SentenceClaimViewer(props) {
    const {
        payload,
    } = props;

    let title = payload.Wiki_Title;
    // let text = payload.Wiki_All_Text;
    let sentences = payload.sentences;
    let video_ids = payload.video_ids;
    let grounded_claims = payload.grounded_claims;



    return <NormalCard sx={{
        margin: "0px",
        height: "80vh",
        overflow: "auto"
    }}>
        <Typography variant="h4">
            {title}&nbsp;
        </Typography>
        <br />
        {/* <TextBlock prefix="Abstract: " text={abstract} /> */}
        
        <Typography variant="weaknessDescription">
            <b>Grounded Claims</b>
            {/* for sentence in sentences, show the sentence, then get the corresponding claim from grounded_claims (the keys are the sentences) */}
            {/* grounded_claims is structured as {sentence: "claims":[list of claims], "video_ids":[[video ids for claim 1], ...]} */}
            {sentences.map((sentence) => {
                return <div>
                    <b>{sentence}</b>
                    <ul>
                        {/* {grounded_claims[sentence]["claims"].map((claim) => {
                            return <li>{claim}</li>
                        })} */}
                        {/* use the indedx of the claim to find the video_ids for that and then map those to the urls in video_ids variable */}
                        {grounded_claims[sentence]["claims"].map((claim, index) => {
                            return <li>{claim}
                                <ul>
                                    {grounded_claims[sentence]["video_ids"][index].map((id) => {
                                        return <li><a href={video_ids[id]} target="_blank">{id}</a></li>
                                    }
                                    )}
                                </ul>

                            </li>
                        }
                        )}

                    </ul>
                </div>
            })}
        </Typography>
    </NormalCard>
}

export default SentenceClaimViewer;