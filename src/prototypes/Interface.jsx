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
import SentenceClaimVeiwer from './SentenceClaimViewer';
import { animated, useSpring } from '@react-spring/web';
import { Cancel, Height } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import TextBlock from './TextBlock';


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
    // define a variable for the written article
    const [article, setArticle] = useState("");

    // define function for updating the article as people type
    const handleArticleChange = (event) => {
        setArticle(event.target.value);
    }

    const [spring, api] = useSpring(() => ({

        transform: "scale(1)",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        opacity: 1,
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    }));

    const [crossSpring, crossApi] = useSpring(() => ({
        transform: "scale(1)",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        opacity: 0.5,
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    }));

    // define mouse events for clicking on the text box
    const handleMouseEnter = () => {
        api.start({
            transform: "scale(1.05)",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        });
    }

    const handleMouseLeave = () => {
        api.start({
            transform: "scale(1)",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        });
    }

    const handleCrossMouseEnter = () => {
        crossApi.start({
            opacity: 1,
        });
    }

    const handleCrossMouseLeave = () => {
        crossApi.start({
            opacity: 0.5,
        });
    }

    const handleCrossClick = () => {
        api.start({
            from: {
                transform: "scale(1)",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                opacity: 1,
            },
            to: async (next) => {
                await next({
                    transform: "scale(0)",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                    opacity: 0,
                });
                setArticle("");
            }
        });
    }


    


    return (
        <Box>
            <Box sx={{
                padding: "10px",
                width: "100%",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {/* <VideoViewer payload={payload} /> */}
                        <SentenceClaimVeiwer payload={payload} />
                    </Grid>
                    <Grid item xs={6}>
                        {/* instert a large text editable  box to write the report in*/}
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            height: "95vh",
                            overflow: "auto",
                            width: "100%",
                        }}>
                            <animated.div
                                // onMouseEnter={handleMouseEnter}
                                // onMouseLeave={handleMouseLeave}
                                // style={spring}
                                // className="article-box"
                            >
                                <TextField
                                    id="article"
                                    label="Article"
                                    variant="filled"
                                    multiline
                                    rows={20}
                                    value={article}
                                    onChange={handleArticleChange}
                                />
                            </animated.div>
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
            /> */}
            {/* <input type="hidden" id="descriptions" name="descriptions" value={JSON.stringify(weaknessDescs)} />
            <input type="hidden" id="selections" name="selections" value={JSON.stringify(selections)} /> */}
            {/* <input type="hidden" id="audio" name="audio" value={JSON.stringify(audioChecked)} />
            <input type="hidden" id="video" name="video" value={JSON.stringify(videoChecked)} />
            <input type="hidden" id="ocr" name="ocr" value={JSON.stringify(ocrChecked)} />
            <input type="hidden" id="neither" name="neither" value={JSON.stringify(neitherChecked)} /> */}
            {/* <input type="hidden" id="article" name="article" value={JSON.stringify(article)} /> */}
            <input type="hidden" id="article" name="article" value={article} />
        </Box>
    );
}

export default Interface;