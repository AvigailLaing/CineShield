# CineShield 🛡️
CineShield is a full-stack web security demo that simulates a media streaming platform hardened against XSS. The backend uses Express with Helmet, CSP, and DOMPurify for multi-layer sanitization; the frontend demonstrates safe DOM manipulation and input encoding. Includes documentation of reflected, stored, and DOM-based XSS attacks.

## 🔍 About the Project

CineShield showcases how attackers exploit unprotected inputs and how developers can defend against them using modern web security standards.  
The project includes documented **attack-defense scenarios** for Reflected, Stored, and DOM-based XSS vulnerabilities, with side-by-side comparisons of vulnerable vs protected behavior.

---

## ✨ Features

- 🎥 **Media Portal Interface:** Browse and view mock videos with a clean, responsive layout.  
- 💬 **Comment System:** Demonstrates user-generated content safely handled through validation and sanitization.  
- 🧼 **Client & Server Sanitization:** DOMPurify (server) + custom HTML entity encoding (client).  
- 🛡️ **Content Security Policy (CSP):** Blocks inline and external malicious scripts.  
- 🧱 **Secure HTTP Headers:** Helmet.js + manual headers like `X-Frame-Options`, `X-Content-Type-Options`, and more.  
- 🧾 **Attack Documentation:** Includes detailed write-ups and screenshots of attack prevention outcomes.

---

## 🧰 Tech Stack

**Frontend:**  
- HTML5, CSS3, JavaScript (vanilla)

**Backend:**  
- Node.js + Express  
- Helmet (security headers)  
- CORS (safe cross-origin configuration)  
- express-validator (input validation)  
- DOMPurify + JSDOM (server-side sanitization)  

**Documentation:**  
- Markdown reports for XSS attack/defense evidence

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/cineshield.git
   cd cineshield
2. **Install dependencies:**
   ```bash
    npm install
3. **Run the app:**
  ```bash
    npm run dev

    Then open your browser and visit: http://localhost:3000
4. **Optional: Add your own sample media**
    ```bash
    Place video files in frontend/media/ and thumbnails in frontend/thumbs/

## 📘 Attack–Defense Scenarios

Located in [`documentation/attack-scenarios.md`](./documentation/attack-scenarios.md)

**Includes:**
- Reflected XSS  
- Stored XSS  
- DOM-based XSS  

Each scenario demonstrates the vulnerability, how it’s exploited, and how CineShield’s layered protections neutralize it.

---

## 🧑‍💻 Author

**Avigail Laing**  
Computer Science @ University of Florida  
📧 avigaillaing@ufl.edu
🌐 https://www.linkedin.com/in/avigail-laing/

