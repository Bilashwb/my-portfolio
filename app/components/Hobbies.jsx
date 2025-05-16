import React from 'react';
import { Card, Divider, InlineStack, Badge, Text, Box } from '@shopify/polaris';

export default function Hobbies() {
  const items = [
    { id: 1, name: 'Playing & Watching Chess', variant: 'new' },
    { id: 2, name: 'Blockchain', variant: 'info' },
    { id: 3, name: 'Decentralized Applications', variant: 'success-strong' },
    { id: 4, name: 'Cricket', variant: 'info-strong' },
    { id: 5, name: 'Cybersecurity', variant: 'enabled' },
    { id: 6, name: 'Ethical Hacking', variant: 'success' },
    { id: 7, name: 'Open Source Contribution', variant: 'attention' },
    { id: 8, name: 'Devops', variant: 'info' },
    { id: 9, name: 'AI & Machine Learning', variant: 'warning' },
    { id: 10, name: 'Web3 Technology', variant: 'attention-strong' },
    { id: 11, name: 'Writing Technical Blogs', variant: 'read-only' },
  ];

  return (
    <Card roundedAbove="lg">
      <Text variant="bodyMd" fontWeight="bold">
        Areas of Interest
      </Text>
      <Divider />
      <Box paddingBlockStart="300">
        <InlineStack gap="200" wrap>
          {items.map((item) => (
            <Badge key={item.id} tone={item.variant}>
              {item.name}
            </Badge>
          ))}
        </InlineStack>
      </Box>
    </Card>
  );
}
