# ⚡ QUICK START: 3-Step Fix for Portfolio

## **Problem 1: Resume Download Returns 404**

### **Solution (1 minute)**
1. Add `resume.pdf` to `C:\Users\prave\OneDrive\Desktop\portfolio\public\`
2. Run in terminal: `git add . && git commit -m "Add resume" && git push`
3. Done! ✅

---

## **Problem 2: Contact Form Not Working**

### **Solution (5 minutes)**

**A) Create EmailJS Account:**
- Go to: https://www.emailjs.com/
- Sign up (use Google)

**B) Set Up Gmail Service:**
- Dashboard → Email Services → Add Service → Gmail
- Follow authorization steps
- **SAVE: Service ID**

**C) Create Email Template:**
- Dashboard → Email Templates → Create New
- Name: `contact_form`
- **SAVE: Template ID**

**D) Get Public Key:**
- Dashboard → Account → Copy Public Key
- **SAVE: Public Key**

**E) Install Package:**
```powershell
npm install @emailjs/browser
```

**F) Update Contact.tsx:**

Open `src/components/Contact.tsx` and replace line 6:
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```
With your actual key:
```typescript
emailjs.init('your_actual_public_key_here')
```

Replace line 47:
```typescript
await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
```
With your actual IDs:
```typescript
await emailjs.send('service_your_id', 'template_your_id', {
```

**G) Deploy:**
```powershell
git add -A && git commit -m "Add EmailJS contact form" && git push
```

Done! ✅

---

## **Problem 3: Portfolio Requires Signup**

### **Solution (2 minutes)**

1. Go to: https://vercel.com/dashboard
2. Click: `portfolio` project
3. Settings → Protection → Disable Protection
4. Save and wait 2 minutes
5. Done! ✅

---

## **Test Your Portfolio**

1. **Download Resume:** Click button in hero section
2. **Send Email:** Fill contact form and click send
3. **Check Email:** Look for message in inbox

All working? **Portfolio is ready!** 🎉

---

## **Need Help?**

See detailed guide: `EMAILJS_SETUP_GUIDE.md`
