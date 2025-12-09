# 📤 Push to GitHub Commands

## **Quick Push (One Command)**

```powershell
git add -A && git commit -m "Add resume PDF and EmailJS contact form" && git push
```

---

## **Step-by-Step Push**

### **Step 1: Stage All Changes**
```powershell
git add -A
```

### **Step 2: Commit Changes**
```powershell
git commit -m "Add resume PDF and EmailJS contact form"
```

### **Step 3: Push to GitHub**
```powershell
git push
```

---

## **Alternative Commit Messages** (Choose one)

```powershell
# Simple version
git add -A && git commit -m "Update contact form and add resume" && git push

# Detailed version
git add -A && git commit -m "Integrate EmailJS for contact form emails and add downloadable resume" && git push

# Quick version
git add -A && git commit -m "Fix contact form and resume download" && git push
```

---

## **Check Before Pushing**

### **View Changes Before Committing**
```powershell
git status
```

### **See What Will Be Pushed**
```powershell
git diff --cached
```

---

## **After Pushing**

Vercel will automatically:
1. Detect the push to GitHub
2. Start a new build (2-5 minutes)
3. Deploy your updates live

Your portfolio will be updated at:
**https://portfolio-git-main-pravender-kumars-projects.vercel.app**

---

## **Troubleshooting**

### **If "git push" fails:**
```powershell
git pull origin main
git push
```

### **If you need to push a specific file:**
```powershell
git add src/components/Contact.tsx
git commit -m "Update contact form"
git push
```

### **View commit history:**
```powershell
git log --oneline -5
```
