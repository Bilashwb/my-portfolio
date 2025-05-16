import { Badge, Card, Divider, InlineStack, Text } from '@shopify/polaris';
import React from 'react'

export default function Tools() {
    const items = [
        { id: 1, name: "Remix.run", variant: "new" },
        { id: 2, name: "React", variant: "info" },
        { id: 3, name: "Express", variant: "success-strong" },
        { id: 4, name: "Nodejs", variant: "info-strong" },
        { id: 5, name: "Sqlite", variant: "enabled" },
        { id: 6, name: "Mysql", variant: "success" },
        { id: 7, name: "Postgresql", variant: "attention" },
        { id: 8, name: "Prisma", variant: "warning-strong" },
        { id: 9, name: "Render", variant: "attention-strong" },
        { id: 10, name: "Polaris", variant: "read-only" },
        { id: 11, name: "Tailwind", variant: "success" },
        { id: 12, name: "Metaobjects", variant: "warning" },
        { id: 13, name: "Rest API", variant: "info-strong" },
        { id: 14, name: "GraphQL API", variant: "attention" },
        { id: 15, name: "Ajax API", variant: "new" },
        { id: 16, name: "Admin API", variant: "success-strong" },
        { id: 17, name: "Storefront API", variant: "enabled" }
    ];
    return (
        <Card roundedAbove='lg' >
            <Text fontWeight='bold'>Tools & frameworks I’ve used extensively</Text>
            <Divider />
            <div style={{ marginTop: '2%' }}>
                <InlineStack gap={'200'}>
                    {items.map((item, index) => (
                        <Badge
                            key={item.id}
                            tone={item.variant}
                        >
                            {item.name}
                        </Badge>
                    ))}
                </InlineStack>
            </div>
        </Card>
    )
}
