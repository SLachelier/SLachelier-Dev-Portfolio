"use client";
import React from 'react';
import {
  Html,
  Body,
  Head, 
  Heading,
  Hr,
  Text,
  Container,
  Preview,
  Section
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EmailProps = {
  message: string;
  senderEmail: string;
}

export default function SentEmail({ message, senderEmail }: EmailProps) {
  return (
    <Html>
      <Head/>
      <Preview>New message has arrived from your portfolio website.</Preview>
      <Tailwind>
        <Body className='bg-gray-200 text-black'>
          <Container>
            <Section className='bg-white border-black my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>You have received the following message from the contact form:</Heading>
              <Text>{message}</Text>
              <Hr></Hr>
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
