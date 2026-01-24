# **Project Blueprint: Lotto Number Generator**

## **Overview**

This application generates and displays a set of 6 unique lottery numbers. The goal is to provide a simple, user-friendly, and visually appealing way for users to get their lucky numbers, while adhering to Google AdSense policies for high-quality sites. The application supports both English and Korean languages.

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
*   **Internationalization (i18n):**
    *   Users can switch between English and Korean.
    *   The selected language is saved in `localStorage`.
    *   All text content on the site is translated.
    *   Translations are stored in `en.json` and `ko.json` files.
    *   A language switcher is available in the header.

## **AdSense Integration**

1.  **AdSense Script:** The main Google AdSense script has been added to the `<head>` of `index.html`.
2.  **Meta Tag for Account Verification:** A meta tag for Google AdSense account verification will be added to the `<head>` of `index.html`.
3.  **ads.txt file:** An `ads.txt` file has been created in the root directory of the site with the provided content for AdSense crawler verification.
4.  **Ad Unit Placeholder:** A placeholder ad unit has been added to the `<body>` of `index.html`. The `data-ad-slot` needs to be updated with a real ad slot ID from the AdSense account.

## **Current Plan: Internationalization**

1.  **Update `blueprint.md`:** Document the new i18n feature. (Completed)
2.  **Create translation files:** Create `en.json` and `ko.json` files with all the text content of the website.
3.  **Implement language switcher:** Add a language switcher to the header of all pages.
4.  **Implement translation logic:** Create a JavaScript function to load the translations and update the content of the pages based on the selected language.
5.  **Refactor HTML:** Add `data-i18n` attributes to all HTML elements that need to be translated.
6.  **Update CSS:** Add styles for the language switcher.
7.  **Push changes to GitHub:** Once all changes are implemented, push them to the remote repository.