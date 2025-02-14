import './Interface.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VideoViewer from './VideoViewer';
import SentenceViewer from './SentenceViewer';
import { NormalCard } from '../components/Cards';




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

    // let claims = loadClaimsFromString(payload.Extracted_Claims);
    let claims = payload.Extracted_Claims;

    const [audioChecked, setAudioChecked] = useState(new Array(claims.length).fill(false));
    const [videoChecked, setVideoChecked] = useState(new Array(claims.length).fill(false));
    const [ocrChecked, setOCRChecked] = useState(new Array(claims.length).fill(false));
    const [neitherChecked, setNeitherChecked] = useState(new Array(claims.length).fill(false));

    

    // const handleAudioChange = (event) => {
    //     setAudioChecked(event.target.checked);
    //     if (event.target.checked) {
    //         setNeitherChecked(false);
    //     }
    // }
    const handleAudioChange = (index) => {
        let newAudioChecked = [...audioChecked];
        newAudioChecked[index] = !newAudioChecked[index];
        setAudioChecked(newAudioChecked);
        if (newAudioChecked[index]) {
            let newNeitherChecked = [...neitherChecked];
            newNeitherChecked[index] = false;
            setNeitherChecked(newNeitherChecked);
        }
    }

    // const handleVideoChange = (event) => {
    //     setVideoChecked(event.target.checked);
    //     if (event.target.checked) {
    //         setNeitherChecked(false);
    //     }
    // }
    const handleVideoChange = (index) => {
        let newVideoChecked = [...videoChecked];
        newVideoChecked[index] = !newVideoChecked[index];
        setVideoChecked(newVideoChecked);
        if (newVideoChecked[index]) {
            let newNeitherChecked = [...neitherChecked];
            newNeitherChecked[index] = false;
            setNeitherChecked(newNeitherChecked);
        }
    }
    const handleOCRChange = (index) => {
        let newOCRChecked = [...ocrChecked];
        newOCRChecked[index] = !newOCRChecked[index];
        setOCRChecked(newOCRChecked);
        if (newOCRChecked[index]) {
            let newNeitherChecked = [...neitherChecked];
            newNeitherChecked[index] = false;
            setNeitherChecked(newNeitherChecked);
        }
    }


    const handleNeitherChange = (index) => {
        let newNeitherChecked = [...neitherChecked];
        newNeitherChecked[index] = !newNeitherChecked[index];
        setNeitherChecked(newNeitherChecked);
        if (newNeitherChecked[index]) {
            let newAudioChecked = [...audioChecked];
            newAudioChecked[index] = false;
            setAudioChecked(newAudioChecked);
            let newVideoChecked = [...videoChecked];
            newVideoChecked[index] = false;
            setVideoChecked(newVideoChecked);
            let newOCRChecked = [...ocrChecked];
            newOCRChecked[index] = false;
            setOCRChecked(newOCRChecked);
        }
    }

    const atLeastOneChecked = (index) => {
        return audioChecked[index] || videoChecked[index] || ocrChecked[index] || neitherChecked[index];
    }

    const allClaimsOneChecked = () => {
        for (let i = 0; i < claims.length; i++) {
            if (!atLeastOneChecked(i)) {
                return false;
            }
        }
        return true;
    }


    useEffect(() => {
    }, [payload]);


    return (
        <Box>
            <Box sx={{
                padding: "30px",
                width: "100%",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <VideoViewer payload={payload} />
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            padding: "0px",
                        }}>
                            <SentenceViewer payload={payload} />
                        </Box>
                        <Box sx={{
                            padding: "0px",
                            overflow: "auto",
                            height: "55vh",
                        }}>
                            <NormalCard>
                            {claims.map((claim, index) => {
                                return <Box sx={{
                                    // padding: "10px",
                                    // 0 right padding 10 bottom padding 0 left padding
                                    padding: "10px 0px 10px 0px",
                                }}>
                                    <Typography variant="p1">
                                        <b>Claim {index+1}: </b>
                                        {claim}
                                    </Typography>
                                    <br />
                                        <label>
                                            Audio
                                            <input type="checkbox" checked={audioChecked[index]} onChange={() => handleAudioChange(index)} />
                                            ;
                                        </label>
                                        <label>
                                            Video
                                            <input type="checkbox" checked={videoChecked[index]} onChange={() => handleVideoChange(index)} />
                                            ;
                                        </label>
                                        <label>
                                            OCR
                                            <input type="checkbox" checked={ocrChecked[index]} onChange={() => handleOCRChange(index)} />
                                            ;
                                        </label>
                                        <label>
                                            Neither
                                            <input type="checkbox" checked={neitherChecked[index]} onChange={() => handleNeitherChange(index)} />
                                            ;
                                        </label>

                                </Box>
                        })}
                            </NormalCard>
                        </Box>
                    </Grid>
                </Grid>
                {/* <Box sx={{
                    padding: "30px",
                }}>
                    <VideoViewer payload={payload} />
                </Box>
                <Box>
                    {claims.map((claim, index) => {
                        return <Box sx={{
                            padding: "10px",
                        }}>
                            <Typography variant="p1">
                                <b>Claim {index+1}: </b>
                                {claim.decontextualized}
                            </Typography>
                            <br />
                                <label>
                                    Audio
                                    <input type="checkbox" checked={audioChecked[index]} onChange={() => handleAudioChange(index)} />
                                    ;
                                </label>
                                <label>
                                    Video
                                    <input type="checkbox" checked={videoChecked[index]} onChange={() => handleVideoChange(index)} />
                                    ;
                                </label>
                                <label>
                                    Neither
                                    <input type="checkbox" checked={neitherChecked[index]} onChange={() => handleNeitherChange(index)} />
                                    ;
                                </label>

                        </Box>
                    })} */}
                {/* </Box> */}

                


                
                
                {/* <Button type="submit" variant="contained" color="primary" sx={{
                    width: "100%",
                    borderRadius: "10px",
                }}>
                    <Typography variant="h5" sx={{
                    }}>
                        Submit
                    </Typography>
                </Button> */}
                {/* before allowing submission, make sure at least one option is selected for each claim */}
                <Button type="submit" variant="contained" color="primary" sx={{
                    width: "100%",
                    borderRadius: "10px",
                }} disabled={!allClaimsOneChecked()}>
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
            /> */}
            {/* <input type="hidden" id="descriptions" name="descriptions" value={JSON.stringify(weaknessDescs)} />
            <input type="hidden" id="selections" name="selections" value={JSON.stringify(selections)} /> */}
            <input type="hidden" id="audio" name="audio" value={JSON.stringify(audioChecked)} />
            <input type="hidden" id="video" name="video" value={JSON.stringify(videoChecked)} />
            <input type="hidden" id="ocr" name="ocr" value={JSON.stringify(ocrChecked)} />
            <input type="hidden" id="neither" name="neither" value={JSON.stringify(neitherChecked)} />
        </Box>
    );
}

export default Interface;