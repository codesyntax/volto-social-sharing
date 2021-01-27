import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types';
import { DEFAULT_SOCIAL, DEFAULT_POSITIONS, DEFAULT_LOGO_SIZE, DEFAULT_BUTTON_SIZE } from './defaultSettings';
import './SocialSharing.css';
import './fontawesome';

const SocialSharing = ({
    socialElements = DEFAULT_SOCIAL,
    bannerPosition = DEFAULT_POSITIONS,
    logo_size = DEFAULT_LOGO_SIZE,
    button_size = DEFAULT_BUTTON_SIZE }) => {

    const [currentUrl, setCurrentUrl] = useState("");
    useEffect(() => {
        setCurrentUrl(window.location.href);
    })

    // MOBILE checker
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        // setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 768)
    }
    useEffect(() => {
        handleWindowSizeChange()
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    // end - MOBILE checker
    return (
        <div style={isMobile ? bannerPosition["mobile"] : bannerPosition["desktop"]}>
            <ul className={isMobile ? "horizontal" : "vertical"}>
                {
                    socialElements.map(social => {
                        if ((!social.only_mobile && !isMobile) || (isMobile)) {

                            return (
                                <li key={social.id} style={{
                                    backgroundColor: social.color
                                }}>
                                    <div
                                    style={{width: button_size,
                                        height: button_size,
                                        left:`calc(50% - ${button_size} / 2)`

                                    }}
                                        className="container">
                                        <a target="_blank" title={`Send to ${social.name}`} href={`${social.sharing_url}${currentUrl}`}  className="icon">
                                            <FontAwesomeIcon icon={social.fa_name} color="white" size={logo_size} id="icon"/>
                                        </a>
                                    </div>
                                </li>
                            )
                        }
                    })
                }
            </ul>

        </div>
    );
};

// CookieBanner.propTypes = {
//   text: PropTypes.string.isRequired,
//   buttonText: PropTypes.string,
//   acceptOnScroll: PropTypes.bool,
// };

export default SocialSharing;