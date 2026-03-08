# GENESIS Digital Agency

A premium digital agency portfolio and services website.

## Features

- Pure static files (HTML, CSS, JavaScript)
- No backend, no server-side code, no databases
- No framework builds that require a dev server
- Fully responsive design
- Tailwind CSS via CDN
- Custom animations and glassmorphism effects

## Project Structure

```
/
├── index.html (Home)
├── about.html (About Us)
├── services.html (Services)
├── portfolio.html (Portfolio)
├── contact.html (Contact)
├── css/
│   └── styles.css (Custom styles)
├── js/
│   ├── main.js (Interactivity)
│   └── tailwind-config.js (Tailwind configuration)
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Deployment

This website is designed to be hosted directly on GitHub Pages without any build steps.

1. Push the code to a GitHub repository.
2. Go to the repository settings.
3. Navigate to the **Pages** section.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Click **Save**.

The site will be available at your GitHub Pages URL. All asset paths are relative, ensuring compatibility when served from a subdirectory.
