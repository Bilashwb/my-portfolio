import { Button, Card, Icon, Image, InlineStack, Text, Thumbnail, Tooltip } from '@shopify/polaris'
import React from 'react'
import {
    LogoXIcon, EmailIcon, LogoMetaIcon, LogoGoogleIcon
} from '@shopify/polaris-icons';
export default function Introduction() {
    const social_accounts = [
        {
            name: "LinkedIn",
            url: "#",
            icon: LogoGoogleIcon
        },
        {
            name: "Gmail",
            url: "#",
            icon: EmailIcon
        },
        {
            name: "Facebook",
            url: "#",
            icon: LogoXIcon
        },
        {
            name: "Twitter",
            url: "#",
            icon: LogoMetaIcon
        }
    ]
    return (
        <Card>
            {/* <InlineStack align='space-between'>
                <Text variant='heading2xl' fontWeight='bold' >Bilash Halder</Text>
                <Thumbnail source={'/img.png'} alt='img' size='large'/>
            </InlineStack> */}
            
            <Text variant='bodyMd'>
                I’m a full-stack Shopify developer with over 4 years of experience helping eCommerce brands thrive. My work focuses on building robust storefronts, custom Shopify apps, and backend platforms tailored to your business needs. From theme customization to API integrations and performance optimization, I provide end-to-end development that’s reliable, scalable, and conversion-ready.
            </Text>
            <div style={{ marginTop: '2%' }}>
                <InlineStack gap={'200'}>
                    {
                        social_accounts.map((s) => {
                            return <Tooltip content={s.name}> <Button icon={s.icon} url={s.url} target='_blank' variant='monochromePlain'> </Button></Tooltip>
                        })
                    }
                </InlineStack>
            </div>
        </Card>
    )
}
