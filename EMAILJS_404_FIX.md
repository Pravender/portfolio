# 🔧 EmailJS 404 Error - Fix Guide

## **Problem**
Getting 404 error when visiting: https://www.emailjs.com/dashboard

---

## **Solutions**

### **Solution 1: Sign In First (Most Common)**

1. Go to: https://www.emailjs.com/
2. Click: **Sign In** (top right)
3. Log in with your email/password or Google account
4. Now you should see dashboard ✅

### **Solution 2: Create Account First**

If you don't have an account yet:

1. Go to: https://www.emailjs.com/
2. Click: **Sign Up** (top right)
3. Sign up with:
   - Email: `kumarpravender1999@gmail.com`
   - Password: Create one
   - OR: Use Google Sign In
4. Verify your email (check inbox)
5. Log in
6. Now dashboard works ✅

### **Solution 3: Direct Dashboard Access**

After logging in, use these direct links:

**Dashboard Home:**
https://www.emailjs.com/dashboard

**Account (to get Public Key):**
https://www.emailjs.com/account

**Email Services (to create Gmail service):**
https://www.emailjs.com/dashboard/services

**Email Templates (to create template):**
https://www.emailjs.com/dashboard/templates

---

## **Complete Setup Steps**

### **Step 1: Create EmailJS Account**

1. Go to: https://www.emailjs.com/
2. Click: **Sign Up** (top right corner)
3. Choose sign up method:
   - **Option A:** Email + Password
     - Email: `kumarpravender1999@gmail.com`
     - Create password
     - Click: Sign Up
   - **Option B:** Google Sign In
     - Click: Sign up with Google
     - Select your Google account
4. Verify email (check inbox for verification link)
5. Click verification link

### **Step 2: Get Public Key**

1. After logging in, go to: https://www.emailjs.com/account
2. Look for: **Public Key**
3. Click: Copy button
4. Save it somewhere (you'll need it)

Example: `abc123def456ghi`

### **Step 3: Set Up Gmail Service**

1. Go to: https://www.emailjs.com/dashboard/services
2. Click: **Add Service**
3. Select: **Gmail**
4. Click: **Connect with Gmail**
5. Select your Google account
6. Click: **Allow** for EmailJS permissions
7. You should see success ✅
8. Copy your **Service ID**

Example: `service_abc123xyz`

### **Step 4: Create Email Template**

1. Go to: https://www.emailjs.com/dashboard/templates
2. Click: **Create New Template**
3. Fill in:
   - **Template Name:** `contact_form`
   - **Subject:** `New message from {{from_name}}`
   - **Email Content:**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Click: **Save**
5. Copy your **Template ID**

Example: `template_abc123xyz`

---

## **Now You Have 3 Values**

```
Public Key:  abc123def456ghi
Service ID:  service_abc123xyz
Template ID: template_abc123xyz
```

---

## **Update Contact.tsx**

Open: `src/components/Contact.tsx`

**Line 6:** Replace
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```
With:
```typescript
emailjs.init('abc123def456ghi')
```

**Line 44:** Replace
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
```
With:
```typescript
await emailjs.send(
  'service_abc123xyz',
  'template_abc123xyz',
```

**Save file!**

---

## **Test**

```powershell
npm run dev
```

Go to: http://localhost:5173

Fill contact form and click "Send Message"

Check your email ✅

---

## **Common 404 Causes**

| Issue | Fix |
|-------|-----|
| Not logged in | Log in first at https://www.emailjs.com/ |
| Account not created | Sign up at https://www.emailjs.com/ |
| Email not verified | Check inbox for verification email |
| Browser cache | Clear cache or use incognito window |
| Wrong URL | Use https://www.emailjs.com/dashboard (with https) |

---

## **Still Getting 404?**

Try this:

1. Open in **Incognito/Private window** (clears cache)
2. Go to: https://www.emailjs.com/
3. Click: Sign In
4. Enter your credentials
5. Wait for page to load
6. Try: https://www.emailjs.com/dashboard again

---

## **Need Help?**

EmailJS Support: https://www.emailjs.com/docs/

---

**Come back here with your 3 credentials when ready!** 🎉
