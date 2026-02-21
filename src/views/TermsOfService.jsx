import { Container, Title, Text, Stack } from "@mantine/core";
import Card from "../components/Card";

export default function TermsOfService() {
  return (
    <Container size="xl" className="page-container">
      <Card shadow="xl" radius="lg" p={{ base: "md", sm: 40 }}>
        <Stack gap="md">
          <Title order={1} className="title-hero">
            Terms of Service
          </Title>

          <Text>
            By accessing or using this website and its authentication features
            (the “Service”), you agree to be bound by these Terms of Service. If
            you do not agree, please do not use the Service.
          </Text>

          <Title order={3}>Purpose of the Service</Title>
          <Text>
            This Service is provided as a personal portfolio project and
            demonstration. It is not intended for production use, commercial
            purposes, or to provide guaranteed availability or support.
          </Text>

          <Title order={3}>Eligibility</Title>
          <Text>The Service is intended for a general audience. You must be at least 13 years old to use it.</Text>

          <Title order={3}>Accounts</Title>
          <Text>
            When you create an account, you agree to provide accurate
            information and to keep your credentials secure. You are
            responsible for all activity that occurs under your account.
          </Text>
          <Text>
            You may update your account information (such as email, display
            name, or phone number) at any time through the Service.
          </Text>

          <Title order={3}>Account Deletion</Title>
          <Text>
            At this time, accounts cannot be deleted automatically through the
            user interface.
          </Text>
          <Text>
            If you would like your account deleted, you may request deletion by
            contacting the email address listed on this website. Account
            deletion requests will be processed within a reasonable timeframe.
          </Text>

          <Title order={3}>Acceptable Use</Title>
          <Text>You agree not to:</Text>
          <Text>Use the Service for unlawful purposes</Text>
          <Text>Attempt to gain unauthorized access to the Service or its underlying systems</Text>
          <Text>Interfere with or disrupt the operation of the Service</Text>

          <Title order={3}>Availability</Title>
          <Text>
            The Service is provided on an “as is” and “as available” basis.
            Availability, functionality, and data persistence are not
            guaranteed.
          </Text>

          <Title order={3}>Limitation of Liability</Title>
          <Text>
            To the fullest extent permitted by law, the Service is provided
            without warranties of any kind. The owner of this website shall not
            be liable for any damages arising from the use or inability to use
            the Service.
          </Text>

          <Title order={3}>Changes to These Terms</Title>
          <Text>
            These Terms may be updated from time to time. Continued use of the
            Service after changes are posted constitutes acceptance of the
            updated Terms.
          </Text>

          <Title order={3}>Contact</Title>
          <Text>
            For questions about these Terms, please contact
            arjohnson.dev@gmail.com.
          </Text>
        </Stack>
      </Card>
    </Container>
  );
}
