# **Project Blueprint: Lotto Number Generator**

## **Overview**

This application generates and displays a set of 6 unique lottery numbers. The goal is to provide a simple, user-friendly, and visually appealing way for users to get their lucky numbers, while adhering to Google AdSense policies for high-quality sites.

**GitHub Repository:** [https://github.com/hangyver/product-builder-lecture](https://github.com/hangyver/product-builder-lecture)

## **Design and Style**

*   **Layout:** A centered, clean interface that focuses the user's attention on the generated numbers and the "Generate" button.
*   **Color Palette:** A modern and energetic color scheme will be used.
*   **Typography:** Clear, readable fonts will be used to display the numbers and other text.
*   **Iconography:** Icons will be used to enhance the user experience.
*   **Visual Effects:** Subtle animations and shadows will be used to create a polished look and feel.

## **Features**

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Web Component:** A custom web component, `<lotto-numbers>`, will be used to display the generated numbers. This component will encapsulate the HTML, CSS, and JavaScript required to render the numbers, making the code more modular and reusable.
*   **Interactive Button:** A button allows the user to generate a new set of numbers at any time.
*   **Theme Switching (Dark/Light Mode):**
    *   A toggle switch allows users to switch between a dark and a light theme.
    *   The user's preference is saved in `localStorage` and applied on subsequent visits.
    *   The entire UI, including text, backgrounds, and buttons, adapts to the selected theme.
*   **Navigation:** A clear and simple navigation bar with links to Home, About, and Contact pages.
*   **Footer:** A footer with links to the Privacy Policy, About, and Contact pages.
*   **Content Pages:**
    *   `about.html`: An "About Us" page to build trust and credibility.
    *   `contact.html`: A "Contact Us" page.
    *   `privacy.html`: A privacy policy page, which is a requirement for AdSense.
*   **Enhanced Content:** More original and engaging content on the main page to provide more value to the user.

## **AdSense Integration**

1.  **AdSense Script:** The main Google AdSense script has been added to the `<head>` of `index.html`.
2.  **Meta Tag for Account Verification:** A meta tag for Google AdSense account verification will be added to the `<head>` of `index.html`.
3.  **ads.txt file:** An `ads.txt` file has been created in the root directory of the site with the provided content for AdSense crawler verification.
4.  **Ad Unit Placeholder:** A placeholder ad unit has been added to the `<body>` of `index.html`. The `data-ad-slot` needs to be updated with a real ad slot ID from the AdSense account.

## **Current Plan: High-Quality Site for AdSense**

1.  **Update `blueprint.md`:** Reflect the new site structure and features for AdSense compliance. (Completed)
2.  **Create `privacy.html`:** A simple privacy policy page.
3.  **Create `about.html`:** An "About Us" page.
4.  **Create `contact.html`:** A "Contact Us" page.
5.  **Update `index.html`:**
    *   Add a navigation bar.
    *   Add a footer.
    *   Add new content sections to provide more value to the user.
6.  **Update `style.css`:**
    *   Add styles for the navigation bar, footer, and new content sections.
    *   Ensure a consistent look and feel across all pages.
7.  **Push changes to GitHub:** Once all changes are implemented, push them to the remote repository.