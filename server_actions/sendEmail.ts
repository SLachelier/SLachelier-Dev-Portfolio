'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from './utils';
import SentEmail from '@/email_components/sent-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(formData: FormData) => {

  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  //server-side validation for email and message.
  if(!validateString(senderEmail, 400)) {
    return {
      error: 'Invalid sender.',
    }
  }
  if(!validateString(message, 2500)) {
    return {
      error: 'Invalid message.',
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio_Visitor <onboarding@resend.dev>",
      to: 'slachelier@gmail.com',
      subject: 'Message Sent From Portfolio Contact Form',
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(SentEmail, {message: message as string, senderEmail: senderEmail as string})
    });
  } catch(error: unknown){
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  };
};