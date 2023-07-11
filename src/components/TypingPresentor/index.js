import React, {useState, useEffect} from 'react';

const TypingPresentor = () => {

    const [presentedText, setPresentedText] = useState("");
    const jobTitles = ["Web Developer", "App Developer", "Social Media Content Creator"];
    const [jobIndex, setJobIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);

    const configureText = () => {
        let jobTitle = jobTitles[jobIndex].split("");
        setPresentedText(presentedText + jobTitle[characterIndex]);
        if (characterIndex + 1 > jobTitle.length) {
            setCharacterIndex(0);
            if (jobIndex + 1 === jobTitles.length) {
                setJobIndex(0);
            } else {
                setJobIndex(jobIndex + 1);
            }
            setPresentedText("");
        } else {
            setCharacterIndex(characterIndex + 1);
        }
    }

    useEffect(() => {
        const typingInterval = setInterval(configureText, 250)
        return () => {
            window.clearInterval(typingInterval);
        }
    })

    return (
        <div className="w-full h-6">
            <p className="text-white text-2xl text-center">
                {presentedText}
            </p>
        </div>
    )
}

export default TypingPresentor;