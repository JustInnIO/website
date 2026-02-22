import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { Comments } from '@hyvor/hyvor-talk-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from 'react-router-dom';


export default function HyvorTalkComponent() {
    const { colorMode } = useColorMode();
    const { siteConfig } = useDocusaurusContext();
    const location = useLocation();
    const pageId = siteConfig.url + location.pathname.replace(/\/$/, '');

    return (
        <Comments
            website-id={9194}
            page-id={pageId}
            on={{
                'loaded': () => console.log('Comments loaded'),
                'comment:published': () => console.log('Comment published'),
            }}
        />
    );


}