import { CalloutCard, Text } from '@shopify/polaris';
export default function WebsiteInfo() {
  return (
    <CalloutCard
      title="Built with Remix – as a Shopify App Template"
      illustration="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/app-2x-23fb62a245021a57818f731c5680cce151fa874356244bb6cfc4652be7161749.png"
      primaryAction={{
        content: "View on GitHub",
        url: "https://github.com/chiragramjibhaipatel/portfolio",
      }}
    >
      <Text as="p">
        This website is developed as a full-stack Shopify App using the Remix framework for server-side rendering. It serves as my personal portfolio, featuring selected projects, client work, and areas of expertise.
      </Text>
      <Text as="p">
        The admin panel is embedded within the Shopify admin using Shopify App Bridge and Polaris. It provides functionality to manage project listings and client details. Explore the GitHub repository to view the source code and implementation details.
      </Text>
    </CalloutCard>
  );
}
