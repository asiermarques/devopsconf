import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Logo = (alt) => <StaticImage
    src="../../../static/images/logo.png"
    imgStyle={{ transition: 'none', transform: 'none', willChange: 'inherit' }}
    alt={"Logo DevOpsConf"}
/>;

export default Logo;