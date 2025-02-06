import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextBlock from "./TextBlock";
import { NormalCard } from "../components/Cards";
import { Height } from "@mui/icons-material";
import { useState } from 'react';
import { useEffect } from 'react';


function ClaimModule(prop) {
    // this page consists of a list of claims and each claim has a check box next to it 
    // the check box is used to indicate whether the claim is supported by the video or audio (both checked for both)
    // and a checkbox to indicate neither audio nor video support the claim

    // when the neither button is clicked, the audio and video buttons are checked to the false state 
    // when the audio or video button is clicked, the neither button is checked to the false state

    // the display is formatted: claim audio [checkbox] video [checkbox] neither [checkbox]
    
    const {
        claims, 
    } = prop;

    // const [audioChecked, setAudioChecked] = useState(false);
    // const [videoChecked, setVideoChecked] = useState(false);
    // const [neitherChecked, setNeitherChecked] = useState(false);
    // convert from values to list of values corresponding to each claim 
    const [audioChecked, setAudioChecked] = useState(new Array(claims.length).fill(false));
    const [videoChecked, setVideoChecked] = useState(new Array(claims.length).fill(false));
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
        }
    }


    return (
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
            })}
        </Box>
    )
}

export default ClaimModule;