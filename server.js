const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const resend = new Resend('re_PNmnEWvY_48MyybHxT6KctMmaoozVBoSY');

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.post('/api/send-booking', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      serviceDetails,
      selectedDate,
      selectedTime,
      selectedPlatform,
      animalType,
      notes
    } = req.body;

    console.log('Received booking request:', { name, email, serviceDetails });

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'VetKen Bookings <onboarding@resend.dev>',
      to: 'vetgrokenya@gmail.com',
      subject: `New Consultation Booking - ${serviceDetails.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4a90e2; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="margin: 0;">New Consultation Booking</h1>
            <p style="margin: 10px 0 0;">VetKen Services</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #4a90e2; margin-top: 0;">Service Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Service:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceDetails.title}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Duration:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceDetails.duration}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Price:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceDetails.price}</td>
                </tr>
                ${selectedPlatform ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Platform:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${selectedPlatform === 'google-meets' ? 'Google Meets' : 'WhatsApp Video Call'}</td>
                </tr>
                ` : ''}
              </table>

              <h2 style="color: #4a90e2; margin-top: 20px;">Appointment Time</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Date:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Time:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${selectedTime}</td>
                </tr>
              </table>

              <h2 style="color: #4a90e2; margin-top: 20px;">Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Animal Type:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${animalType}</td>
                </tr>
              </table>

              ${notes ? `
                <div style="margin-top: 20px;">
                  <h2 style="color: #4a90e2;">Additional Notes</h2>
                  <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${notes}</p>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `
    });

    console.log('Admin email sent:', adminEmail);

    // Send confirmation to customer
    const customerEmail = await resend.emails.send({
      from: 'VetKen Bookings <onboarding@resend.dev>',
      to: email,
      subject: 'Your VetKen Consultation Booking Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4a90e2; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="margin: 0;">Booking Confirmation</h1>
            <p style="margin: 10px 0 0;">Thank you for choosing VetKen Services</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p>Dear ${name},</p>
            <p>Your consultation has been successfully booked. Here are your appointment details:</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Service:</strong> ${serviceDetails.title}</p>
              <p><strong>Date:</strong> ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Time:</strong> ${selectedTime}</p>
              ${selectedPlatform ? `<p><strong>Platform:</strong> ${selectedPlatform === 'google-meets' ? 'Google Meets' : 'WhatsApp Video Call'}</p>` : ''}
              <p><strong>Price:</strong> ${serviceDetails.price}</p>
            </div>
            
            <p>We'll contact you shortly with additional details${selectedPlatform === 'google-meets' ? ' and the Google Meets link' : ''}.</p>
            <p>If you need to make any changes to your booking, please contact us at your earliest convenience.</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666;">
            <p>Thank you for choosing VetKen Services</p>
            <p style="font-size: 12px;">If you have any questions, please don't hesitate to contact us.</p>
          </div>
        </div>
      `
    });

    console.log('Customer email sent:', customerEmail);

    res.json({ success: true, message: 'Booking confirmed and emails sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: error.message || 'Failed to process booking' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});