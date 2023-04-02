import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head';

const config: DocsThemeConfig = {
    logo: <span style={{ fontSize: "24px" }}><strong>Void</strong>API</span>,
    project: {
        link: 'https://github.com/voiddevsorg/voidapi-docs',
    },
    chat: {
        link: 'https://discord.gg/voiddevs'
    },
    docsRepositoryBase: 'https://github.com/voiddevsorg/voidapi-docs',
    useNextSeoProps() {
        return {
            titleTemplate: '%s - VoidAPI',
            openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://docs.voidapi.rest',
                site_name: 'VoidAPI',
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
                <style>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                    }

                `}</style>
            </Head>
        </>
    ),
    footer: {
        component: <></>
    },
    i18n: [
        { locale: 'en', text: 'English' }
    ]
}

export default config;