import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
}

const logo = {
  display: 'block',
  margin: '0 auto',
  marginBottom: '32px',
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <Html>
    <Head />
    <Preview>Welcome to ExamAI - Your AI-powered exam preparation platform</Preview>
    <Body className="bg-gray-100 font-sans">
      <Container className="bg-white mx-auto p-8 mb-16 max-w-3xl">
        <Img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
          width="80"
          height="80"
          alt="ExamAI Logo"
          className="mx-auto mb-8"
          style={logo}
        />
        <Heading className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to ExamAI, {firstName}!</Heading>
        <Text className="text-gray-700 text-base mb-4">
          Thank you for joining our waitlist. We're excited to have you on board as we prepare to launch ExamAI, your AI-powered exam preparation platform.
        </Text>
        <Text className="text-gray-700 text-base mb-4">
          We'll keep you updated on our progress and let you know as soon as ExamAI is ready for you to start revolutionizing your exam preparation.
        </Text>
        <Text className="text-gray-700 text-base mb-4">
          In the meantime, if you have any questions or feedback, feel free to reach out to us at{' '}
          <Link href="mailto:support@examai.com" className="text-blue-600 underline">
            support@examai.com
          </Link>
          .
        </Text>
        <Text className="text-gray-700 text-base">
          Best regards,<br />
          The ExamAI Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
