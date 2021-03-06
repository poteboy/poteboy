import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './header';
import { useEnableContext } from './context/enable'
import Particles from 'react-particles-js';
import Meta from './meta';

interface Props {
    children: object
}

const Layout: FC<Props> = ({children}) => {

    const [enable, setEnable] = useState(false)

    const isBrowser = typeof window !== "undefined"

    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1194
      );

    type Orientation = "portrait" | 'landscape';

    const [orientation, setOrientation] = useState<Orientation>(
        typeof window !== "undefined" ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait'
    );

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
            if(window.innerHeight > window.innerWidth){
                setOrientation('portrait')
            } else {
                setOrientation('landscape')
            }
        }
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    `

    return(
        <Wrapper>
            <Header/>
            {children}  
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": width > 1195 ? 50 : (width > 640 ? 30 : 20)
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            value: ['#2dcece']
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                }
                }} className='particles-js'/>
        </Wrapper>
    )
}

export default Layout