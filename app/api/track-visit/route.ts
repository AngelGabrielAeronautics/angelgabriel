import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email transport (you'll need to use environment variables in production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password', 
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { page, referrer, duration, userAgent } = data
    
    // Get IP address from request headers
    const ip = request.headers.get('x-forwarded-for') || 'Unknown'
    
    // Create email content
    const emailContent = `
      <h2>New Website Visit</h2>
      <p><strong>Page:</strong> ${page}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Duration:</strong> ${duration || 'N/A'} seconds</p>
      <p><strong>IP Address:</strong> ${ip}</p>
      <p><strong>Referrer:</strong> ${referrer || 'Direct'}</p>
      <p><strong>User Agent:</strong> ${userAgent}</p>
    `
    
    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@gmail.com', 
      subject: `Website Visit: ${page}`,
      html: emailContent,
    })
    
    // You could also log to database here
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking visit:', error)
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
  }
} 