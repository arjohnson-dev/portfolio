import { Container, Title, Text, Stack } from "@mantine/core";
import Card from "../components/Card";

export default function PrivacyPolicy() {
  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={{ base: "md", sm: 40 }}>
        <Stack gap="md">
          <Title order={1} className="title-hero">
            Privacy Policy
          </Title>
          <Text>Last updated: February 6, 2026</Text>

          <Text>
            This Privacy Policy explains how information is collected, used,
            and stored when you use this website and its authentication
            features (the “Service”).
          </Text>

          <Title order={3}>Information Collected</Title>
          <Text>
            When you create an account or sign in, the following information
            may be collected and stored:
          </Text>
          <Text>Email address</Text>
          <Text>Password (securely handled by Supabase authentication; never stored in plaintext)</Text>
          <Text>Display name</Text>
          <Text>Phone number</Text>
          <Text>Authentication metadata provided by Supabase</Text>

          <Title order={3}>How Information Is Used</Title>
          <Text>Your information is used solely to:</Text>
          <Text>Provide authentication and account access</Text>
          <Text>Allow you to view and update your account details</Text>
          <Text>Maintain the basic functionality of the Service</Text>
          <Text>
            There is no monetization, advertising, or profiling associated with
            this Service.
          </Text>

          <Title order={3}>Data Storage and Processing</Title>
          <Text>
            User data is stored and managed using Supabase, a third-party
            backend and authentication provider. Data is stored securely
            according to Supabase’s standard security practices.
          </Text>

          <Title order={3}>Cookies and Local Storage</Title>
          <Text>
            Authentication may rely on cookies or local storage to maintain
            login sessions. These are required for the Service to function
            correctly and are not used for tracking or advertising.
          </Text>

          <Title order={3}>Data Sharing</Title>
          <Text>
            Your personal data is not sold, rented, or shared with third
            parties, except as necessary to operate the Service through
            Supabase.
          </Text>

          <Title order={3}>Account Management</Title>
          <Text>
            You may update your email, display name, or phone number at any
            time while signed in.
          </Text>

          <Title order={3}>Account Deletion</Title>
          <Text>
            Users may request account deletion by contacting the email address
            listed on this website. Upon request, associated personal data will
            be deleted within a reasonable timeframe.
          </Text>

          <Title order={3}>Children’s Privacy</Title>
          <Text>
            This Service is not intended for children under the age of 13. No
            knowing collection of personal data from children occurs.
          </Text>

          <Title order={3}>Changes to This Policy</Title>
          <Text>
            This Privacy Policy may be updated from time to time. Changes will
            be reflected on this page with an updated “Last updated” date.
          </Text>

          <Title order={3}>Contact</Title>
          <Text>
            If you have any questions or concerns about this Privacy Policy or
            your data, please contact arjohnson.dev@gmail.com.
          </Text>
        </Stack>
      </Card>
    </Container>
  );
}
