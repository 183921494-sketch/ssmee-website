// Contact form email sender
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { company, name, phone, email, country, product, quantity, message } = req.body

  // Validate required fields
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Create transporter using QQ SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
      user: '183921494@qq.com',
      pass: 'oveszdqtnlytcaea' // SMTP授权码
    }
  })

  // Email content
  const mailOptions = {
    from: '"Ssmee Website" <183921494@qq.com>',
    to: '183921494@qq.com',
    subject: `【网站询盘】${company || name} - ${country || '未选择国家'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #2B4D1A;">🌿 Ssmee 网站新询盘</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>公司名称：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>联系人：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>电话：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>邮箱：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>国家：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${country || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>产品需求：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${product || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>数量：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${quantity || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>留言：</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          此邮件由 Ssmee 网站询盘表单自动发送
        </p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
