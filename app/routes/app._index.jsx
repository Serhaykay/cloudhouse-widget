import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  MediaCard,
  VideoThumbnail,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";


export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page>
      <TitleBar title="Welcome to Cloudhouse WhatsApp Widget" />
      <BlockStack gap="500">
      <Layout>
  {/* Main Welcome Section */}
  <Layout.Section>
    <Card>
      <BlockStack gap="400">
        <Text as="h2" variant="headingLg">
          Welcome to Cloudhouse – Your Partner for Seamless Customer Communication
        </Text>
        <Text variant="bodyMd" as="p">
          Cloudhouse is a customer engagement solution built for modern eCommerce businesses...
        </Text>
        <Box>
          <Button variant="primary" url="#">
            Set Up Your Widget
          </Button>
        </Box>
      </BlockStack>
    </Card>
  </Layout.Section>

  <Layout.Section>
    <MediaCard
      title="Turn conversations into conversions with Cloudhouse"
      primaryAction={{
        content: 'Learn more',
        onAction: () => {},
      }}
      description={`In this course, you’ll learn how to set up the CloudHouse WhatsApp Widget.`}
      popoverActions={[{ content: 'Dismiss', onAction: () => {} }]}
    >
      <VideoThumbnail
        videoLength={80}
        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        onClick={() => console.log('clicked')}
      />
    </MediaCard>
  </Layout.Section>

  {/* Each card gets its own row */}
  <Layout.Section>
    <Card>
      <BlockStack gap="200">
        <Text as="h3" variant="headingMd">
          Why Choose Cloudhouse?
        </Text>
        <List>
          <List.Item>Real-time customer communication via WhatsApp</List.Item>
          <List.Item>Customizable widget design and behavior</List.Item>
          <List.Item>Easy Shopify integration with no code required</List.Item>
          <List.Item>Analytics and future support for Meta API, multiple agents, and geotargeting</List.Item>
        </List>
      </BlockStack>
    </Card>
  </Layout.Section>

  <Layout.Section>
    <Card>
      <BlockStack gap="200">
        <Text as="h3" variant="headingMd">
          Helpful Resources
        </Text>
        <List>
          <List.Item>
            <Link
              url="https://shopify.dev/docs/apps/getting-started"
              target="_blank"
              removeUnderline
            >
              Shopify App Development Docs
            </Link>
          </List.Item>
          <List.Item>
            <Link
              url="https://cloudhouse.app"
              target="_blank"
              removeUnderline
            >
              Cloudhouse Website
            </Link>
          </List.Item>
          <List.Item>
            <Link
              url="https://shopify.dev/docs/api/admin-graphql"
              target="_blank"
              removeUnderline
            >
              Shopify Admin GraphQL API Reference
            </Link>
          </List.Item>
        </List>
      </BlockStack>
    </Card>
  </Layout.Section>

  
</Layout>

      </BlockStack>
    </Page>
  );
}
