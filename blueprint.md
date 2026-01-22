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

## **Current Plan**

1.  **Modify `index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Add a `<lotto-numbers>` custom element to the body.
    *   Add a button to trigger the number generation.
2.  **Modify `style.css`:**
    *   Add styles for the overall layout, the `<lotto-numbers>` component, and the button.
3.  **Modify `main.js`:**
    *   Create the `LottoNumbers` custom element.
    *   Implement the logic for generating and displaying the lottery numbers.
    *   Add an event listener to the button to update the numbers.
