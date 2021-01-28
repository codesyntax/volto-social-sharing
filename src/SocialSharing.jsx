import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { DEFAULT_SOCIAL, DEFAULT_POSITIONS, DEFAULT_LOGO_SIZE, DEFAULT_BUTTON_SIZE } from './defaultSettings';
import './SocialSharing.css';
import './fontawesome';
import { SOCIAL_INTERFACE, LOGO_SIZE_INTERFACE } from './interfaces';

const SocialSharing = ({
    socialElements = DEFAULT_SOCIAL,
    bannerPosition = DEFAULT_POSITIONS,
    logoSize = DEFAULT_LOGO_SIZE,
    buttonSize = DEFAULT_BUTTON_SIZE }) => {

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        console.log("social: ", socialElements)
        setCurrentUrl(window.location.href);
    })

    // MOBILE checker
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 768)
    }
    useEffect(() => {
        handleWindowSizeChange()
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });
    // end - MOBILE checker


    return (
        <div style={isMobile ? bannerPosition["mobile"] : bannerPosition["desktop"]}>
            <ul className={isMobile ? "horizontal" : "vertical"}>
                {
                    socialElements.filter(social => (!social.only_mobile === !isMobile || isMobile)).map(social => {
                        return (
                            <li key={social.id} style={{ backgroundColor: social.color }}>
                                <div
                                    style={{
                                        width: buttonSize,
                                        height: buttonSize,
                                        left: `calc(50% - ${buttonSize} / 2)`
                                    }}
                                    className="icon-container">
                                    <a target="_blank" title={`Send to ${social.name}`} href={`${social.sharing_url}${currentUrl}`} className="fa-icon-position">
                                        <FontAwesomeIcon icon={social.fa_name} color="white" size={logoSize} className="fa-icon" />
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

SocialSharing.prototype = {
    socialElements: SOCIAL_INTERFACE,
    bannerPosition: PropTypes.object,
    logoSize: LOGO_SIZE_INTERFACE,
    buttonSize: PropTypes.string
};

export default SocialSharing;