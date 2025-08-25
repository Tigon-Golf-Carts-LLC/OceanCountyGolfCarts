import nodemailer from 'nodemailer';
import { ContactForm } from '@shared/schema';

// Create a transporter for sending emails
const getEmailTransporter = () => {
  // Using a simpler SMTP configuration
  // For development, we'll use a test configuration that logs emails to console
  return nodemailer.createTransport({
    // Use a generic SMTP configuration
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    // For development, if no credentials are provided, use a test account
    ...((!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) && {
      streamTransport: true,
      newline: 'unix',
      buffer: true,
    }),
  });
};

export const sendContactEmail = async (formData: ContactForm): Promise<boolean> => {
  try {
    const transporter = getEmailTransporter();

    // Format the interest type for display
    const interestLabels = {
      sales: 'Sales Inquiry',
      service: 'Service Request',
      parts: 'Parts Inquiry',
      general: 'General Question'
    };

    const interestLabel = interestLabels[formData.interest] || formData.interest;

    // Create email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0e2e55; margin-bottom: 10px;">Ocean County Golf Carts</h1>
          <h2 style="color: #ff6100; margin: 0;">New Contact Form Submission</h2>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #0e2e55; margin-top: 0;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #666;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0; color: #666;"><a href="mailto:${formData.email}" style="color: #0e2e55;">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px 0; color: #666;"><a href="tel:${formData.phone}" style="color: #0e2e55;">${formData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Interest:</td>
              <td style="padding: 8px 0; color: #666;">
                <span style="background-color: #ff6100; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                  ${interestLabel}
                </span>
              </td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #0e2e55; margin-top: 0;">Message</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #999; font-size: 12px;">
          <p>This email was sent from the Ocean County Golf Carts contact form.</p>
          <p>Respond directly to this email to contact the customer.</p>
        </div>
      </div>
    `;

    const textContent = `
Ocean County Golf Carts - New Contact Form Submission

Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${interestLabel}

Message:
${formData.message}

---
This email was sent from the Ocean County Golf Carts contact form.
Respond directly to this email to contact the customer.
    `;

    // Send to all four email addresses
    const recipients = [
      'info@oceancountygolfcarts.com',
      'sales@tigongolfcarts.com',
      'tigongolfcarts@gmail.com',
      'oceancountygolfcarts@gmail.com'
    ];

    // Email options
    const mailOptions = {
      from: `"Ocean County Golf Carts Contact Form" <${process.env.EMAIL_USER || 'oceancountygolfcarts@gmail.com'}>`,
      to: recipients.join(', '), // Send to all three emails
      replyTo: formData.email, // Set reply-to as the customer's email
      subject: `[ OCEAN COUNTY GOLF CARTS ] New ${interestLabel}`,
      text: textContent,
      html: htmlContent,
    };

    // Check if we have proper email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('No email credentials found. Contact form data:', {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        interest: interestLabel,
        message: formData.message
      });
      
      // For development, we'll just log the email content and return success
      console.log('Email would be sent to:', recipients.join(', '));
      console.log('Email subject:', `[ OCEAN COUNTY GOLF CARTS ] New ${interestLabel}`);
      console.log('Email content:', textContent);
      return true;
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Test email configuration
export const testEmailConfig = async (): Promise<boolean> => {
  try {
    const transporter = getEmailTransporter();
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration: Development mode (no SMTP credentials)');
      return true;
    }
    
    await transporter.verify();
    console.log('Email configuration is valid');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
};