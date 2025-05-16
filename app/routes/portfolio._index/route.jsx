import { Card, InlineStack, Layout, Page, Text, Badge, Divider, BlockStack } from '@shopify/polaris'
import { NewsletterForm } from '../../components/NewsletterForm';
import Introduction from '../../components/Introduction';
import Services from '../../components/Services';
import ShopifySites from '../../components/ShopifySites';
import EducationBackground from '../../components/EducationBackground';
import WebsiteInfo from '../../components/WebsiteInfo';
import Tools from '../../components/Tools';
import Hobbies from '../../components/Hobbies';
import BlogList from '../../components/BlogList';
import Contact from '../../components/Contact';
import { WorkWithBrands } from '../../components/WorkWithBrands';
export const meta = () => {
  return [
    { title: "Bilash Halder | Portfolio" },
    {
      name: "description",
      content:
        "Explore the professional Shopify development portfolio of Bilash Halder — expert in custom apps, theme development, and store optimization.",
    },
    { name: "keywords", content: "Bilash Halder, Shopify developer, Shopify apps, Shopify themes, ecommerce, web development" },
    { name: "author", content: "Bilash Halder" }
  ];
};

export default function route() {

    return (
        <div>
            <Page >
                <Layout>
                    <Layout.Section>
                        <Introduction />
                    </Layout.Section>
                    <Layout.Section>
                        <Services />
                    </Layout.Section>
                    <Layout.Section>
                        <ShopifySites />
                    </Layout.Section>
                    <Layout.Section variant='oneThird'>
                        <BlockStack gap={'200'}>
                            <Tools />
                            <EducationBackground />
                            <Hobbies />
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <WorkWithBrands />
                    </Layout.Section>
                    <Layout.Section>
                        <BlogList />
                    </Layout.Section>

                    {/* <Layout.Section>
                        <NewsletterForm />
                    </Layout.Section> */}

                    <Layout.Section>
                        <Contact />
                    </Layout.Section>
                    <Layout.Section>
                        <WebsiteInfo />
                    </Layout.Section>
                </Layout>
            </Page>
        </div>
    )
}
