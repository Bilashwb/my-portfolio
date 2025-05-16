import React from 'react';
import {
  Page,
  Card,
  Layout,
  Text,
  InlineStack,
} from '@shopify/polaris';

const LiquidCheatsheet = () => {
  return (
    <Page title="Shopify Liquid Cheatsheet">
      <Layout>
        <Layout.Section>
          <Card title="🔹 What is Liquid?" sectioned>
            <Text>
              Liquid is Shopify’s template language. It helps show dynamic content like product names and prices.
            </Text>
          </Card>

          <Card title="✨ Basic Syntax" sectioned>
            <InlineStack gap="200" wrap={false}>
              <Text >Show product title:</Text>
              <code >{`{{ product.title }}`}</code>
            </InlineStack>
            <InlineStack gap="200" wrap={false}>
              <Text>Comment (not shown):</Text>
              <code>{`{% comment %} This is a comment {% endcomment %}`}</code>
            </InlineStack>
          </Card>

          <Card title="🔁 Conditions (If, Else)" sectioned>
            <code>
              {`{% if product.available %}\n  In Stock\n{% else %}\n  Sold Out\n{% endif %}`}
            </code>
          </Card>

          <Card title="🔄 Loops (For)" sectioned>
            <code>
              {`{% for product in collections['frontpage'].products %}\n  {{ product.title }}\n{% endfor %}`}
            </code>
          </Card>

          <Card title="🛠 Filters (Change How Things Look)" sectioned>
            <InlineStack gap="100" wrap={false}>
              <Text>Uppercase:</Text>
              <code>{`{{ 'shopify' | upcase }}`}</code>
              <Text>→ SHOPIFY</Text>
            </InlineStack>

            <InlineStack gap="100" wrap={false}>
              <Text>Lowercase:</Text>
              <code>{`{{ 'HELLO' | downcase }}`}</code>
              <Text>→ hello</Text>
            </InlineStack>

            <InlineStack gap="100" wrap={false}>
              <Text>Money format:</Text>
              <code>{`{{ 29.99 | money }}`}</code>
              <Text>→ $29.99</Text>
            </InlineStack>

            <InlineStack gap="100" wrap={false}>
              <Text>Replace:</Text>
              <code>{`{{ 'shirt' | replace: 'shirt', 'jacket' }}`}</code>
              <Text>→ jacket</Text>
            </InlineStack>
          </Card>

          <Card title="🔍 Useful Objects" sectioned>
            <InlineStack gap="100" wrap={false}><code>product</code><Text>: Current product</Text></InlineStack>
            <InlineStack gap="100" wrap={false}><code>collection</code><Text>: Current collection</Text></InlineStack>
            <InlineStack gap="100" wrap={false}><code>cart</code><Text>: Shopping cart</Text></InlineStack>
            <InlineStack gap="100" wrap={false}><code>customer</code><Text>: Logged-in customer</Text></InlineStack>
            <InlineStack gap="100" wrap={false}><code>shop</code><Text>: Store info</Text></InlineStack>
            <InlineStack gap="100" wrap={false}><code>settings</code><Text>: Theme settings</Text></InlineStack>
          </Card>

          <Card title="🧩 Snippets" sectioned>
            <Text>Include a snippet with a product:</Text>
            <code>{`{% render 'product-card', product: product %}`}</code>
          </Card>

          <Card title="🎨 Theme Settings Example" sectioned>
            <Text>Use a color from theme settings:</Text>
            <code>{`<h1 style="color: {{ settings.heading_color }};">Hello!</h1>`}</code>
          </Card>

          <Card title="📌 Summary" sectioned>
            <InlineStack gap="100" wrap={false}><Text>Show title:</Text><code>{`{{ product.title }}`}</code></InlineStack>
            <InlineStack gap="100" wrap={false}><Text>If in stock:</Text><code>{`{% if product.available %}`}</code></InlineStack>
            <InlineStack gap="100" wrap={false}><Text>Loop products:</Text><code>{`{% for product in collection.products %}`}</code></InlineStack>
            <InlineStack gap="100" wrap={false}><Text>Show price:</Text><code>{`{{ product.price | money }}`}</code></InlineStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default LiquidCheatsheet;
