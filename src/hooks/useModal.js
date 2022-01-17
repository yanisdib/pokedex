import { useState } from 'react';


export default () => {
    const [isDisplayed, setIsDisPlayed] = useState(false);

    const handleModal = () => setIsDisPlayed(prevIsDisplayed => !prevIsDisplayed);

    return [isDisplayed, handleModal];
}