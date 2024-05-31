import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { getTokenOrRefresh } from './token_util';
import './custom.css';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

export default function App() {
    const [displayText, setDisplayText] = useState('INITIALIZED: ready to test speech...');
<<<<<<< HEAD
=======

>>>>>>> c0cfbdf93c922e147c726aa85ec421b50a70743e
    

    async function sttFromMic() {
        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-US';

        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        setDisplayText('speak into your microphone...');

        recognizer.recognizeOnceAsync(result => {
            if (result.reason === ResultReason.RecognizedSpeech) {
                setDisplayText(`RECOGNIZED: Text=${result.text}`);
                window.botpressWebChat.sendPayload({
                    type: 'trigger',
                    payload: { sttquestion: result.text }
                });
            } else {
                setDisplayText('ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.');
            }
        });
    }

    

    

    return (
        <Container className="app-container">
        
        <button class="thq-button-filled btn-microphone" onClick={() => sttFromMic()}><i className="fas fa-microphone fa-lg mr-2" ></i></button>

        </Container>
    );
}
