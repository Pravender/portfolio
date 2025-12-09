# ✅ FIX: Resume Download & Contact Form Working

## **Issue 1: Resume Download Shows "File Not Found"**

### **Solution:**

First, you need to add your resume file to the public folder.

#### **Step 1: Prepare Your Resume**
- You need a PDF file of your resume
- File name should be: `resume.pdf`
- Save it in: `C:\Users\prave\OneDrive\Desktop\portfolio\public\`

#### **Step 2: Verify File Location**
Your public folder should have:
```
portfolio/public/
├── profile_pic.png
├── DSC04998.JPG
└── resume.pdf  ← ADD THIS FILE
```

#### **Step 3: Push to GitHub**
```powershell
git add public/resume.pdf
git commit -m "Add resume PDF"
git push
```

Vercel will redeploy automatically.

#### **Step 4: Test**
- Visit your portfolio
- Click "Download Resume"
- Resume PDF should download ✅

---

## **Issue 2: Contact Form Not Sending Emails**

The current form only logs to console. To make it actually send emails, you have **3 options:**

---

### **OPTION A: Use EmailJS (Easiest) ⭐ RECOMMENDED**

#### **Step 1: Create EmailJS Account**
1. Go to: https://www.emailjs.com/
2. Click: **Sign Up**
3. Sign up with email or Google
4. Verify email

#### **Step 2: Set Up Email Service**
1. Click: **Email Services**
2. Click: **Add Service**
3. Choose: **Gmail** (or your email provider)
4. Follow setup instructions
5. Copy your **Service ID** (example: `service_abc123`)

#### **Step 3: Create Email Template**
1. Click: **Email Templates**
2. Click: **Create New Template**
3. Template name: `contact_form`
4. Set template variables:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   Message: {{message}}
   ```
5. Copy **Template ID** (example: `template_xyz789`)

#### **Step 4: Get Public Key**
1. Click: **Account**
2. Copy your **Public Key** (example: `abc123def456ghi`)

#### **Step 5: Install EmailJS Package**
```powershell
npm install @emailjs/browser
```

#### **Step 6: Update Contact.tsx**

Replace the entire Contact.tsx file with this:

```typescript
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY_HERE')

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send email using EmailJS
      await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      // Success
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err: any) {
      setError('Failed to send message. Please try again.')
      console.error('Email error:', err)
    } finally {
      setLoading(false)
    }
  }

  // ... rest of component code remains the same
}

export default Contact
```

**Replace these with your values:**
- `YOUR_PUBLIC_KEY_HERE` → Your EmailJS Public Key
- `YOUR_SERVICE_ID_HERE` → Your Gmail Service ID
- `YOUR_TEMPLATE_ID_HERE` → Your Template ID

#### **Step 7: Push to GitHub**
```powershell
npm install @emailjs/browser
git add .
git commit -m "Add EmailJS integration for contact form"
git push
```

#### **Step 8: Test**
- Go to your portfolio
- Fill in contact form
- Click Send
- Check your email - you should receive the message! ✅

---

### **OPTION B: Use Formspree (No Setup)**

#### **Step 1: Go to Formspree**
1. Visit: https://formspree.io/
2. Click: **Sign Up**
3. Sign up with email

#### **Step 2: Create Form**
1. Click: **New Form**
2. Enter your email: `kumarpravender1999@gmail.com`
3. Copy the form ID (example: `f/abc123xyz`)

#### **Step 3: Update Contact Form**

Change the form to:
```jsx
<form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
  {/* form fields remain the same */}
  <input type="hidden" name="_subject" value={formData.subject} />
  <button type="submit">Send Message</button>
</form>
```

#### **Step 4: Test**
- Fill form
- Click Send
- Redirected to success page
- You receive email ✅

---

### **OPTION C: Use Firebase (More Powerful)**

#### **Step 1: Create Firebase Project**
1. Go to: https://console.firebase.google.com/
2. Click: **Create Project**
3. Project name: `pravender-portfolio`
4. Click: **Create**

#### **Step 2: Enable Cloud Functions**
1. Left sidebar: **Build** → **Functions**
2. Click: **Get Started**
3. Select: **Blaze plan** (free tier available)

#### **Step 3: Deploy Cloud Function**
In terminal:
```powershell
npm install -g firebase-tools
firebase login
firebase init functions
```

#### **Step 4: Write Function**
In `functions/src/index.ts`:
```typescript
import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password',
  },
})

exports.sendEmail = functions.https.onCall(async (data) => {
  await transporter.sendMail({
    from: 'your-email@gmail.com',
    to: 'kumarpravender1999@gmail.com',
    subject: data.subject,
    text: `From: ${data.email}\n\n${data.message}`,
  })
  return { success: true }
})
```

#### **Step 5: Deploy**
```powershell
firebase deploy --only functions
```

---

## **RECOMMENDED SOLUTION ⭐**

**Use EmailJS (Option A)** because:
- ✅ Easiest setup
- ✅ Free tier available
- ✅ No backend needed
- ✅ Works with Vite/React
- ✅ Instant email delivery
- ✅ Takes 5 minutes to set up

---

## **Complete Checklist for Full Working Portfolio**

### **Resume Download:**
- [ ] Save `resume.pdf` in `public/` folder
- [ ] Push to GitHub
- [ ] Test download button works

### **Contact Form Email:**
- [ ] Create EmailJS account
- [ ] Set up Gmail service
- [ ] Create email template
- [ ] Copy Public Key, Service ID, Template ID
- [ ] Install EmailJS package: `npm install @emailjs/browser`
- [ ] Update Contact.tsx with your IDs
- [ ] Push to GitHub
- [ ] Test sending email

### **Both Working:**
- [ ] Resume downloads ✅
- [ ] Contact form sends emails ✅
- [ ] Portfolio fully functional ✅

---

## **Testing Your Setup**

### **Test Resume Download:**
1. Go to portfolio
2. Click "Download Resume"
3. File downloads to computer ✅

### **Test Contact Form:**
1. Fill in all fields
2. Click "Send Message"
3. Check your email ✅
4. Response message appears on website ✅

---

## **Troubleshooting**

| Issue | Solution |
|-------|----------|
| Resume still not found | Ensure `resume.pdf` is in `public/` folder |
| EmailJS not working | Check Public Key, Service ID, Template ID are correct |
| Email not received | Check spam folder, verify email in template |
| Form shows error | Check EmailJS account has active service |

---

## **Next Steps**

1. **Add resume.pdf** to your portfolio
2. **Choose EmailJS** for contact form
3. **Set up EmailJS** (5 minutes)
4. **Test everything** before sharing

Your portfolio will be **fully functional** with working downloads and email notifications! 🎉

---

## **Live Example**

After setup, your portfolio will:
- ✅ Display all content
- ✅ Allow resume download
- ✅ Send emails when contacted
- ✅ Show success message to user
- ✅ Work from any device
- ✅ Fully accessible worldwide
