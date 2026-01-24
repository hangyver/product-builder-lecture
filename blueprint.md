# **Project Blueprint: Lotto Number Generator**

## **Overview**

This application generates and displays a set of 6 unique lottery numbers. The goal is to provide a simple, user-friendly, and visually appealing way for users to get their lucky numbers.

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

## **Previous Plan (Completed)**

1.  **Modify `index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Add a `<lotto-numbers>` custom element to the body.
    *   Add a button to trigger the number generation.
    *   Add a theme toggle switch.
2.  **Modify `style.css`:**
    *   Add styles for the overall layout, the `<lotto-numbers>` component, and the button.
    *   Implement light and dark theme styles using CSS variables.
3.  **Modify `main.js`:**
    *   Create the `LottoNumbers` custom element.
    *   Implement the logic for generating and displaying the lottery numbers.
    *   Add an event listener to the button to update the numbers.
    *   Add logic to handle theme switching and save the preference to `localStorage`.

## **AdSense Integration**

1.  **AdSense Script:** The main Google AdSense script has been added to the `<head>` of `index.html`.
2.  **Meta Tag for Account Verification:** A meta tag for Google AdSense account verification will be added to the `<head>` of `index.html`.
3.  **ads.txt file:** An `ads.txt` file will be created in the root directory of the site with the provided content for AdSense crawler verification.
4.  **Ad Unit Placeholder:** A placeholder ad unit has been added to the `<body>` of `index.html` after the `<lotto-numbers>` element. This `data-ad-slot` needs to be updated with a real ad slot ID from the AdSense account.

## **Current Plan**

1.  Update `blueprint.md` to include AdSense integration details. (Completed)
2.  Add the `ads.txt` file to the root directory with the provided content: `google.com, pub-4321765361722071, DIRECT, f08c47fec0942fa0`.
3.  Add the Google AdSense meta tag (`<meta name="google-adsense-account" content="ca-pub-4321765361722071">`) to the `<head>` of `index.html`.