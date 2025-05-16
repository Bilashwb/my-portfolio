import React, { useState, useCallback } from 'react';
import {
  Card,
  Text,
  TextField,
  Button,
  Layout,
  Page,
  FormLayout,
  InlineError,
  InlineStack,
  Link,
  Icon,
  Box,
} from '@shopify/polaris';
import { PhoneIcon, EmailIcon, ConnectIcon } from '@shopify/polaris-icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSubmitted(true);
    console.log({ name, email, message });
  }, [name, email, message]);

  return (
          <Card title="Get in Touch" sectioned>
            <Box paddingBlockEnd="400">
              <Text variant="bodyMd">
                Feel free to reach out via the form or through any of the contact methods below.
              </Text>
            </Box>

            {/* Contact Info */}
            <InlineStack gap="300" wrap>
              <InlineStack gap="100" align="center">
                <Icon source={PhoneIcon} />
                <Text variant="bodyMd">+91 9609327424</Text>
              </InlineStack>
              <InlineStack gap="100" align="center">
                <Icon source={EmailIcon} />
                <Text variant="bodyMd">ibilashhalder@gmail.com</Text>
              </InlineStack>
              <InlineStack gap="100" align="center">
                <Icon source={ConnectIcon} />
                <Link url="https://linkedin.com/in/yourprofile" removeUnderline target='_blank' monochrome>
                  Connect With Me
                </Link>
              </InlineStack>
            </InlineStack>

            <Box paddingBlockStart="500">
              <FormLayout>
              <FormLayout.Group>
                  <TextField
                  label="Your Name"
                  value={name}
                  onChange={setName}
                  autoComplete="name"
                />
                <TextField
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  autoComplete="email"
                />
              </FormLayout.Group>
                <TextField
                  label="Message"
                  multiline={2}
                  value={message}
                  onChange={setMessage}
                />
                {error && <InlineError message={error} fieldID="message" />}
                {submitted && (
                  <Text variant="bodyMd" tone="success">
                    Thank you! Your message has been sent.
                  </Text>
                )}
                <Button onClick={handleSubmit} primary>
                  Send Message
                </Button>
              </FormLayout>
            </Box>
          </Card>
        
  );
}
