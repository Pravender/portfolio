# 🚀 COMPLETE SETUP GUIDE: Resume + Contact Form Email

This guide walks you through making your portfolio fully functional with downloadable resume and working contact form.

---

## **STEP 1: Add Resume PDF to Public Folder**

### **1.1 Prepare Your Resume**

You need a PDF file of your resume named exactly: `resume.pdf`

If you don't have a PDF yet, create one:
1. Use Google Docs, Word, or any PDF editor
2. Export/Save as PDF
3. Name it: `resume.pdf`

### **1.2 Add to Project**

Copy `resume.pdf` to this location:
```
C:\Users\prave\OneDrive\Desktop\portfolio\public\resume.pdf
```

Your public folder should look like:
```
portfolio/public/
├── profile_pic.png
├── DSC04998.JPG
└── resume.pdf  ← YOUR RESUME HERE
```

### **1.3 Test Resume Download**

After deploying (Step 5), test this:
1. Go to your portfolio
2. Click "Download Resume" button
3. File should download ✅

---

## **STEP 2: Set Up EmailJS (Contact Form)**

### **2.1 Create EmailJS Account**

1. Go to: **https://www.emailjs.com/**
2. Click: **Sign Up**
3. Create account (use Google or email)
4. Verify your email

### **2.2 Set Up Email Service (Gmail)**

1. In EmailJS dashboard, click: **Email Services**
2. Click: **Add Service**
3. Select: **Gmail**
4. Follow the setup instructions:
   - It will ask to authorize your Gmail
   - Click the authorization link
   - Grant access to EmailJS
   - Return to EmailJS
5. Click: **Create Service**
6. **COPY AND SAVE: Your Service ID** (looks like: `service_abc123xyz`)

### **2.3 Create Email Template**

1. In EmailJS dashboard, click: **Email Templates**
2. Click: **Create New Template**
3. Fill in:
   - **Template Name:** `contact_form`
   - **Subject:** `New message from {{from_name}}`
   - **Template Content:**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Click: **Save**
5. **COPY AND SAVE: Your Template ID** (looks like: `template_abc123xyz`)

### **2.4 Get Your Public Key**

1. In EmailJS dashboard, click: **Account**
2. Look for: **Public Key**
3. **COPY AND SAVE: Your Public Key** (looks like: `abc123def456ghi`)

### **2.5 Summary of Keys You Need**

Save these three values in a text file for Step 3:

```
Service ID:  service_xxxxxxxxxxx
Template ID: template_xxxxxxxxxx
Public Key:  xxxxxxxxxxxxxxxx
```

---

## **STEP 3: Install EmailJS Package**

Open terminal in your project folder and run:

```powershell
npm install @emailjs/browser
```

Wait for installation to complete.

---

## **STEP 4: Update Contact.tsx**

### **4.1 Open Contact.tsx**

Navigate to: `src/components/Contact.tsx`

### **4.2 Replace with New Version**

Delete all contents and paste this updated code:

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
      await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kumarpravender1999@gmail.com',
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err: any) {
      setError('Failed to send message. Please try again.')
      console.error('Email error:', err)

      setTimeout(() => {
        setError('')
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kumarpravender1999@gmail.com',
      href: 'mailto:kumarpravender1999@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 7983002393',
      href: 'tel:+917983002393',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Shikohabad, Uttar Pradesh, India',
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Pravender', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pravender-kumar-213463193', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:kumarpravender1999@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20 px-4 gradient-mesh relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-primary-purple to-secondary-cyan rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-secondary-cyan to-primary-blue rounded-full blur-3xl opacity-10"
        animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading neon-glow">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 glass-effect-strong p-4 rounded-lg hover:border-secondary-cyan transition-all group hover-lift"
                    whileHover={{ boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-primary-blue to-primary-purple glow"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <IconComponent className="text-text-primary text-xl" />
                    </motion.div>
                    <div className="group-hover:translate-x-2 transition-transform">
                      <p className="text-text-secondary text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-secondary-cyan hover:text-primary-purple transition-colors font-semibold">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary-cyan font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h4 className="text-lg font-bold text-text-primary mb-4 neon-glow">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => {
                  const IconComponent = link.icon
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg glass-effect-colored hover-glow transition-all"
                      whileHover={{ scale: 1.2, boxShadow: '0 0 25px rgba(124, 58, 237, 0.8)', y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      aria-label={link.label}
                    >
                      <IconComponent className="text-secondary-cyan text-2xl" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <label className="block text-text-secondary text-sm font-medium mb-2 neon-glow">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all neon-border disabled:opacity-50"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label className="block text-text-secondary text-sm font-medium mb-2 neon-glow">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all neon-border disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-text-secondary text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all disabled:opacity-50"
                  placeholder="Project inquiry"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label className="block text-text-secondary text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me more about your project..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                type="submit"
                disabled={loading || submitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
```

### **4.3 Replace the Three Values**

In the code above, find these three lines and replace them with YOUR values from Step 2.5:

**Line 6:**
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```
Replace with:
```typescript
emailjs.init('abc123def456ghi')  // Your actual public key
```

**Line 47 (inside handleSubmit):**
```typescript
await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
```
Replace with:
```typescript
await emailjs.send('service_xxxxxxxxxxx', 'template_xxxxxxxxxx', {
```

**SAVE THE FILE!**

---

## **STEP 5: Deploy to GitHub & Vercel**

### **5.1 Stage Changes**

```powershell
git add -A
```

### **5.2 Commit Changes**

```powershell
git commit -m "Add resume PDF and EmailJS contact form integration"
```

### **5.3 Push to GitHub**

```powershell
git push
```

Wait 2-5 minutes for Vercel to automatically redeploy your site.

---

## **STEP 6: Test Everything**

### **6.1 Test Resume Download**

1. Open your portfolio: https://portfolio-git-main-pravender-kumars-projects.vercel.app
2. Click "Download Resume" button
3. PDF should download ✅

### **6.2 Test Contact Form**

1. Scroll to "Get In Touch" section
2. Fill in all fields:
   - Name: Your name
   - Email: Your email
   - Subject: Test message
   - Message: This is a test
3. Click "Send Message"
4. Wait for success message
5. Check your email ✅

---

## **Troubleshooting**

| Problem | Solution |
|---------|----------|
| Resume not downloading | Make sure `resume.pdf` is in `public/` folder |
| Contact form shows error | Check EmailJS Public Key and Service/Template IDs are correct |
| Email not received | Check spam folder, verify Gmail service is authorized |
| "Cannot find module @emailjs/browser" | Run: `npm install @emailjs/browser` |
| Form keeps loading | Check EmailJS credentials are valid |

---

## **Complete! ✅**

Your portfolio now has:
- ✅ Downloadable resume
- ✅ Working contact form that sends real emails
- ✅ Success/error messages for user feedback
- ✅ Beautiful animations and styling

Share your portfolio with anyone - they can now contact you directly and download your resume!

**Portfolio URL:** https://portfolio-git-main-pravender-kumars-projects.vercel.app

---

## **Optional: Disable Vercel Protection (Make Public)**

If your portfolio still requires signup:

1. Go to: https://vercel.com/dashboard
2. Click: `portfolio` project
3. Go to: **Settings → Protection**
4. Disable all protection
5. Save and wait 2 minutes

Now anyone can access without signup!
