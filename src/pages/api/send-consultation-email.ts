// src/utils/emailService.ts
interface ServiceDetails {
    title: string;
    duration: string;
    price: string;
  }
  
  interface EmailData {
    name: string;
    email: string;
    phone: string;
    serviceDetails: ServiceDetails;
    date: string;
    time: string;
    platform?: string;
    animalType: string;
    notes?: string;
  }
  
  export const sendConsultationEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer re_PNmnEWvY_48MyybHxT6KctMmaoozVBoSY`
        },
        body: JSON.stringify({
          from: 'VetKen Bookings <onboarding@resend.dev>',
          to: 'your-email@example.com', // Replace with your email
          subject: `New Consultation Booking - ${data.serviceDetails.title}`,
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
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceDetails.title}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Duration:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceDetails.duration}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Price:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceDetails.price}</td>
                    </tr>
                    ${data.platform ? `
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Platform:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.platform === 'google-meets' ? 'Google Meets' : 'WhatsApp Video Call'}</td>
                    </tr>
                    ` : ''}
                  </table>
  
                  <h2 style="color: #4a90e2; margin-top: 20px;">Appointment Time</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Date:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Time:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.time}</td>
                    </tr>
                  </table>
  
                  <h2 style="color: #4a90e2; margin-top: 20px;">Client Information</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Name:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Phone:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Animal Type:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.animalType}</td>
                    </tr>
                  </table>
  
                  ${data.notes ? `
                    <div style="margin-top: 20px;">
                      <h2 style="color: #4a90e2;">Additional Notes</h2>
                      <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.notes}</p>
                    </div>
                  ` : ''}
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                <p>This is an automated message from your booking system</p>
              </div>
            </div>
          `
        })
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }
  
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email' 
      };
    }
  };