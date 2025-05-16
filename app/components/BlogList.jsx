import React from 'react';
import {
  Card,
  Text,
  Divider,
  InlineStack,
  Badge,
  Box,
  Link,
  Grid,
  InlineGrid,
} from '@shopify/polaris';

const blogData = [
  {
    id: 1,
    title: 'Building a Shopify App with Remix',
    date: 'April 10, 2025',
    tags: ['Shopify', 'Remix', 'App Dev'],
    summary:
      'A step-by-step guide to building a full-stack Shopify app using Remix and Polaris.',
  },
  {
    id: 2,
    title: 'Getting Started with Polaris v12',
    date: 'March 22, 2025',
    tags: ['Polaris', 'UI/UX', 'React'],
    summary:
      "Learn how to create beautiful and responsive interfaces using Shopify's Polaris design system.",
  },
  {
    id: 3,
    title: 'Understanding Shopify Storefront API',
    date: 'February 15, 2025',
    tags: ['Shopify', 'GraphQL', 'API'],
    summary:
      'Explore how to fetch product, collection, and cart data using Storefront API for custom storefronts.',
  },
];

const BlogList = () => {
  return (
    <Card roundedAbove="md">
      <div style={{marginBottom:'1%',}}>
        <Text variant='headingMd' >Latest Blog Posts</Text>
      </div>
      <InlineGrid columns={{xs: 1, sm: 1, md: 3}} gap="400">
        {blogData.map((blog) => (
         
            <Card padding="400">
              <Box paddingBlockEnd="200">
                <Link url="#" monochrome removeUnderline>
                  <Text variant="headingSm">{blog.title}</Text>
                </Link>
                <Text variant="bodySm" color="subdued">
                  {blog.date}
                </Text>
              </Box>
              <Box paddingBlock="200">
                <Text variant="bodyMd">{blog.summary}</Text>
              </Box>
              <InlineStack gap="100">
                {blog.tags.map((tag, idx) => (
                  <Badge key={idx} tone="info">
                    {tag}
                  </Badge>
                ))}
              </InlineStack>
            </Card>
        ))}
      </InlineGrid>
    </Card>
  );
};

export default BlogList;
