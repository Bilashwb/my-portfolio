import { Card, Text, InlineStack, Badge, Link, Button } from '@shopify/polaris';
export default function ShopifySites() {
 const data = [
  {
    title: "Rareplanet.com - Shopify Store",
    logo: "https://rareplanet.com/cdn/shop/files/WhatsApp_Image_2024-04-03_at_15.18.49_1220f01d.jpg?v=1712137773&width=500",
    description: "Created a Shopify store and design system for Rareplanet.com.",
    solution: "Integrated the store with warehouse management software to sync inventory and products.",
    tags: ["Shopify", "Inventory Sync", "Store Design"]
  },
  {
    title: "Kitchen Factory Online - Admin App",
    logo: "https://a90a06-2.myshopify.com/cdn/shop/files/kitchen-logo.png?v=1732830899&width=220",
    description: "Built an admin system for managing manufacturing, orders, and client interactions.",
    solution: "Features include CSV-based quotations, draft orders, order processing, product grouping, client-admin messaging, and a custom account system similar to Shopify.",
    tags: ["Admin Panel", "Order Management", "CSV Upload", "Real-Time Chat", "Shopify-like Accounts"]
  },
  {
    title: "Diy.com Store Optimization",
    logo: "https://diy.com.au/cdn/shop/files/diy.png?v=1708224025&width=80",
    description: "Optimized and redesigned an online store for Diy.com.",
    solution: "Removed 8+ third-party apps, rebuilt functionalities in-theme, and implemented dynamic price calculation based on user input at checkout.",
    tags: ["Shopify", "Theme Development", "Price Calculator", "Performance Optimization"]
  },
  {
    title: "Freelance Shopify Projects",
    logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg",
    description: "Designed and developed custom Shopify stores for various clients.",
    solution: "Handled store setup, theme development, and third-party app integration for multiple brands.",
    tags: ["Shopify", "Store Design", "Freelancing", "App Integration"],
    clients: [
      "Liquid",
      "Sitara Rise And Shine",
      "The Three",
      "Matri",
      "Kedgeree Design",
      "Watercolor Wednesday",
      "Plus Size Boho",
      "Meine Tür"
    ]
  }
];


  return (
    <Card>
      <Text variant="headingSm" as="h2">
        My Complete Projects
      </Text>
      <div style={{marginTop:'3%',marginBottom:'2%'}}>
        {data.map((project, index) => (
        <div style={{marginTop:'2%'}}>
          <Card key={index}>
          <InlineStack vertical spacing="tight">
            <InlineStack alignment="center" spacing="tight">
              <img src={project.logo} alt={project.title} style={{ width: 100, height: 50 }} />
              <Text variant="bodyLg" fontWeight="bold">{project.title}</Text>
            </InlineStack>
            <Text>{project.description}</Text>
            <Text variation="subdued">Solution: {project.solution}</Text>
            <div style={{marginTop:'2%'}}>
              <InlineStack gap={'200'}>
              {project.tags.map((tag, idx) => (
                <Badge key={idx}>{tag}</Badge>
              ))}
            </InlineStack>
            </div>
          </InlineStack>
        </Card>
        </div>
      ))}
      </div>
      <Text alignment='end'><Button  variant='primary'>View All</Button></Text>
    </Card>
  );
}
