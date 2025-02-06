import './Interface.css';
import { useState } from 'react';
import { useEffect } from 'react';
import AbstractViewer from './AbstractViewer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { AppBar, Divider, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightPalette, darkPalette } from '../components/themes';
import { useMediaQuery } from '@mui/material';
import { parseCsvFromPublic, loadClaimsFromString } from '../components/utils';
import VideoViewer from './VideoViewer';
import ClaimGrounder from './ClaimGrounder';




function Interface(props) {


    const {
        theme,
        payload,
    } = props;

    const [hoverWeakness, setHoverWeakness] = useState(-1);
    const [focusIndex, setFocusIndex] = useState(-1);
    const [weaknessDescs, setWeaknessDescs] = useState([]);
    const [backgroundColors, setBackgroundColors] = useState([]);
    const [selections, setSelections] = useState([]);
    const [numAlreadyAdded, setNumAlreadyAdded] = useState(0);


    useEffect(() => {
    }, [payload]);


    const prePopulateWeakness = () => {
        console.log(payload);
        const rawClaims = payload.Extracted_Claims

        const claimPairs = loadClaimsFromString(rawClaims);
        console.log(claimPairs);

        const deconClaims = claimPairs.map((pair) => {
            return pair.decontextualized;
        });
        // console.log(deconClaims);
        setWeaknessDescs([...deconClaims]);


        // console.log(typeof predClaims);
        // setWeaknessDescs([...predClaims]);
    }

    useEffect(() => {
        prePopulateWeakness();
    }, [])

    return (
        <Box>
            <Box sx={{
                padding: "30px",
                width: "100%",
            }}>
                {/* <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{
                            padding: "30px",
                        }}>
                           <VideoViewer payload={payload} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            padding: "30px",
                        }}>
                            <p>hi</p>
                        </Box>
                    </Grid>
                </Grid> */}
                <Box sx={{
                    padding: "30px",
                }}>
                    <VideoViewer payload={payload} />
                </Box>
                <ClaimGrounder payload={payload} />

                


                
                
                <Button type="submit" variant="contained" color="primary" sx={{
                    width: "100%",
                    borderRadius: "10px",
                }}>
                    <Typography variant="h5" sx={{
                    }}>
                        Submit
                    </Typography>
                </Button>
            </Box>
            {/* <AddMore
                numAlreadyAdded={numAlreadyAdded}
                weaknessDescs={weaknessDescs}
                setNumAlreadyAdded={setNumAlreadyAdded}
                setWeaknessDescs={setWeaknessDescs}
                setFocusIndex={setFocusIndex}
                setBackgroundColors={setBackgroundColors}
            />
            <input type="hidden" id="descriptions" name="descriptions" value={JSON.stringify(weaknessDescs)} />
            <input type="hidden" id="selections" name="selections" value={JSON.stringify(selections)} /> */}
        </Box>
    );
}

export default Interface;