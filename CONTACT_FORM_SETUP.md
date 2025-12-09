# 🔧 Contact Form - Quick Setup (5 Minutes)

## **Your Contact.tsx is Ready ✅**

The code has been updated with EmailJS integration. Now you just need to add your credentials.

---

## **Step 1: Get Your EmailJS Credentials (3 minutes)**

### **Go to EmailJS Dashboard:**
https://www.emailjs.com/dashboard

### **Get These 3 Values:**

1. **Public Key** (Account tab)
   - Path: https://www.emailjs.com/account
   - Example: `abc123def456ghi`

2. **Service ID** (Email Services tab)
   - Path: https://www.emailjs.com/dashboard/services
   - Example: `service_abc123xyz`
   - If you don't have one: Add Service → Gmail → Follow authorization

3. **Template ID** (Email Templates tab)
   - Path: https://www.emailjs.com/dashboard/templates
   - Example: `template_abc123xyz`
   - If you don't have one: Create New Template → Use this template:
     ```
     Subject: New message from {{from_name}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```

---

## **Step 2: Update Contact.tsx (1 minute)**

Open: `src/components/Contact.tsx`

Find these 3 lines and replace the placeholders:

**Line 6:**
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```
Replace with:
```typescript
emailjs.init('abc123def456ghi')  // Your actual public key
```

**Line 44:**
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
```
Replace with:
```typescript
await emailjs.send(
  'service_abc123xyz',
  'template_abc123xyz',
```

**Save the file!**

---

## **Step 3: Test Locally (1 minute)**

```powershell
npm run dev
```

Visit: http://localhost:5173

Test the contact form:
1. Fill all fields
2. Click "Send Message"
3. Check your email inbox ✅

---

## **Step 4: Deploy to GitHub (30 seconds)**

```powershell
git add -A && git commit -m "Integrate EmailJS contact form" && git push
```

Vercel auto-deploys in 2-5 minutes.

---

## **What Should Happen**

✅ User fills form → clicks "Send Message"
✅ Button shows "Sending..." 
✅ Email sent to: `kumarpravender1999@gmail.com`
✅ User sees: "✓ Message sent successfully!"
✅ Form clears automatically

---

## **Troubleshooting**

| Issue | Fix |
|-------|-----|
| Email not received | Check spam folder, verify Gmail is authorized in EmailJS |
| Form shows error message | Check Public Key, Service ID, Template ID are correct |
| "Sending..." never finishes | Open browser console (F12) and check for errors |
| Form doesn't clear | Refresh page and try again |

---

## **Need More Help?**

See full debugging guide: `DEBUG_CONTACT_FORM.md`

---

**That's it! Your contact form is ready!** 🎉
