import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextBlock from "./TextBlock";
import { NormalCard } from "../components/Cards";
import { Height } from "@mui/icons-material";
import ClaimModule from "./ClaimModule";
import { loadClaimsFromString } from '../components/utils';


function ClaimGrounder(props) {
    const {
        payload,
    } = props;

    let claims = loadClaimsFromString(payload.Extracted_Claims);

    return <NormalCard sx={{
        // margin: "0px",
        // height: "100px",
        overflow: "auto"
    }}>
        <Typography variant="h4">
            Claims:
        </Typography>
        <br />
        <ClaimModule claims={claims} />
    </NormalCard>
}

export default ClaimGrounder;