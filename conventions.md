# Conventions for Aider: Ember.js Frontend

## 1. Project Structure

- **Application Structure:** Follow the default structure provided by Ember CLI.
- **Naming Conventions:**
  - Use `kebab-case` for filenames (e.g., `user-profile.js`).
  - Use `PascalCase` for Ember components (e.g., `UserProfile`).
  - Use camelCase for variable and function names.

## 2. Components

- **Component Structure:**
  - Place components under the `app/components/` directory.
  - Use template-only components unless logic is necessary, then create a `.js` file along with the `.hbs` template.

- **Component Naming:**
  - Component names should be descriptive of the functionality (e.g., `asset-list`).

- **Arguments and Properties:**
  - Prefix arguments with `@` in templates (`@property`).
  - Define explicit, readable APIs for your components.

## 3. Route and Controller

- **Route Files:**
  - Keep routes focused on data loading.
  - Organize route files in the `app/routes/` directory and templates in `app/templates/`.

- **Controller Use:**
  - Use controllers sparingly; prefer “routeable components” as suggested by Ember Octane.

## 4. Services

- **Service Usage:**
  - Use services for shared functionality and state across the application.
  - Place services in the `app/services/` directory.
  - Access services via dependency injection.

## 5. Templates and Helpers

- **Templates:**
  - Use `{{component}}` and `{{helper}}` helpers consistently.
  - Prefer clean, readable, and maintainable HTML structures.

- **Helpers:**
  - Define helpers in `app/helpers/`.
  - Only create custom helpers if needed for repetitive logic.

## 6. Ember Data

- **Models:**
  - Define models in `app/models/`.
  - Use clear, plural nouns for the model registration.
- **Store:**
  - Use the Ember Data store for managing application data and consistent data access patterns.

## 7. Ember CLI

- **Usage:**
  - Use Ember CLI commands for generating new files and scaffoldings (`ember generate`).
  - Use glimmer components whenever applicatable
- **Build Process:**
  - Optimize your build for production using the Ember CLI build tools.

## 8. Testing

- **Test Setup:**
  - Use ember CLI constructed tests

- **Testing Practices:**
  - Ensure every component, service, and route has corresponding test cases.
  - Write descriptive test titles and use assertions effectively.

## 9. Code Quality

- **Linters:**
  - Utilize ESLint with Ember-specific rules.
  - Run linters as part of CI/CD pipelines.

- **Conventions:**
  - Follow the JavaScript standard style guide as closely as possible.
  - Use meaningful variable and function names.

## 10. Documentation

- **Inline Comments:**
  - Provide inline comments where logic may not be immediately obvious.

- **Documentation Tools:**
  - Maintain documentation using tools like Storybook if applicable.

## 11. API Integration

### 11.1 Serializing API Output

- **Custom Serialization:**
  - If the Snipe-IT API does not naturally conform to the JSON API specification, use Ember Data's `Serializer` to transform the API response into an Ember-compatible format.

#### Custom Serializer Conventions

- **Serializer Location:**
  - Place serializers in the `app/serializers/` directory.

- **Creating a Custom Serializer:**
  - Create a custom serializer by subclassing from `JSONAPISerializer` or `RESTSerializer` based on your needs.

```javascript
// app/serializers/application.js

import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Transform the payload into a JSON API-compliant format here

    return this._super(
      store,
      primaryModelClass,
      transformedPayload,
      id,
      requestType,
    );
  }

  normalize(modelClass, resourceHash) {
    // If necessary, transform individual records here
    return this._super(modelClass, resourceHash);
  }
}
```

- **Attribute and Relationship Key Formatting:**
  - Use `camelCase` for JSON keys in Ember, converting from `snake_case` or other formats in the API response.

- **Handling Nested Data:**
  - Correctly map nested data structures into Ember's `relationships` structure using appropriate `hasMany` and `belongsTo` relationships in Ember Data models.

### 11.2 Error Handling

- **Error Normalization:**
  - Implement error normalization within serializers to ensure consistent error handling in the application. Use Ember Data's error handling hooks.

### 11.3 Testing Serializers

- **Test Coverage:**
  - Provide comprehensive tests for custom serializers to ensure they correctly transform API responses into the desired format. Place tests in the `tests/unit/serializers/` directory.

- **Mocking API Responses:**
  - Use tools like Mirage or Pretender to mock API responses in development and testing, ensuring your serializers handle various scenarios.

## 11. API Integration

### 11.1 Serializing API Output

- **JSON API Specification:**
  - Ensure that the API output adheres to the JSON API specification, which is the default expectation for Ember Data. This includes properly formatted `type`, `id`, `attributes`, and `relationships`.

- **Custom Serialization:**
  - If the Snipe-IT API does not naturally conform to the JSON API specification, use Ember Data's `Serializer` to transform the API response into an Ember-compatible format.

#### Custom Serializer Conventions

- **Serializer Location:**
  - Place serializers in the `app/serializers/` directory.

- **Creating a Custom Serializer:**
  - Create a custom serializer by subclassing from `JSONAPISerializer` or `RESTSerializer` based on your needs.

```javascript
// app/serializers/application.js

import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Transform the payload into a JSON API-compliant format here

    return this._super(
      store,
      primaryModelClass,
      transformedPayload,
      id,
      requestType,
    );
  }

  normalize(modelClass, resourceHash) {
    // If necessary, transform individual records here
    return this._super(modelClass, resourceHash);
  }
}
```

- **Attribute and Relationship Key Formatting:**
  - Use `camelCase` for JSON keys in Ember, converting from `snake_case` or other formats in the API response.

- **Handling Nested Data:**
  - Correctly map nested data structures into Ember's `relationships` structure using appropriate `hasMany` and `belongsTo` relationships in Ember Data models.

### 11.2 Error Handling

- **Error Normalization:**
  - Implement error normalization within serializers to ensure consistent error handling in the application. Use Ember Data's error handling hooks.

### 11.3 Testing Serializers

- **Test Coverage:**
  - Provide comprehensive tests for custom serializers to ensure they correctly transform API responses into the desired format. Place tests in the `tests/unit/serializers/` directory.

## 12. Testing API Calls

### 12.1 Mocking Server Data with Static JSON Files

For development and testing purposes, Aider will use static JSON files to simulate server responses. This approach allows us to perform HTTP requests just like a live API server, providing a consistent and easy-to-manage testing environment.

#### Setting Up Mock Data

- **Directory Structure:**
  - Organize JSON files within the `public` directory. Structure the files to mirror real API endpoints as follows:

    ```
    public
    ├── api
    │   ├── assets
    │   │   ├── computers.json
    │   │   ├── monitors.json
    │   │   └── peripherals.json
    │   └── assets.json
    ├── assets
    │   └── images
    │       └── example.png
    └── robots.txt
    ```

- **Data Preparation:**
  - Create realistic JSON files to mimic the API outputs expected from the Snipe-IT API.

- **Accessing Mock Data:**
  - Use relative URL paths to fetch data in the application. Example:
    ```javascript
    fetch("/api/assets.json")
      .then((response) => response.json())
      .then((data) => {
        // Handle the data within your application
      });
    ```

- **Verification:**
  - Test that the mock data is served correctly by visiting URLs like `http://localhost:4200/api/assets.json` in your browser.

### 12.2 Benefits of Using Static JSON Files

- **Ease of Implementation:** Avoids the need for a real server during the development phase, streamlining the setup process.
- **Consistency:** Offers a stable dataset for both development and testing, ensuring reliability.

- **Seamless Transition:** Simplifies switching from mock data to live API endpoints once backend development catches up.

### 12.3 Testing Practices

- **Varied Scenarios:**
  - Modify JSON files to simulate different edge cases and data scenarios to test application robustness.

- **Test Integration:**
  - Incorporate these static files into your unit and integration tests to verify component and service behavior under controlled conditions.

- **Transition Plans:**
  - Ensure your API interactions are abstracted such that switching from static data files to live endpoints requires minimal changes.

By using static JSON files for testing, Aider's development process is streamlined, allowing you to focus on the frontend implementation while maintaining flexibility for backend integration.

# Directive for Pinterest-Like UI

## Overview

The purpose of this directive is to standardize the design and layout of our Aider project's user interface to mimic the look and feel of Pinterest, with its clean, responsive, and grid-based aesthetic.

## 1. Layout

### 1.1 Masonry Grid

- **Grid Style:**
  - Implement a masonry grid to allow items of varying sizes to fit seamlessly into a single, unified layout, avoiding empty spaces.

- **Responsive Design:**
  - Use CSS Flexbox or Grid layout with media queries to ensure the design is responsive and gracefully adjusts to different screen sizes.

### 1.2 Spacing and Margins

- **Gutters:**
  - Maintain consistent spacing (e.g., 16px) between grid items.

- **Margins:**
  - Keep outer margins uniform to create visually pleasing alignment.

## 2. Styling

### 2.1 Card Design

- **Item Container:**
  - Each item should be presented in a "card" format, featuring a border radius (e.g., 8px) for smooth edges.
  - Include a shadow effect (e.g., `box-shadow: 0 4px 8px rgba(0,0,0,0.1)`) to create depth.

- **Content Arrangement:**
  - An image occupies the top portion of the card.
  - Descriptive text and interaction buttons are below the image.

### 2.2 Color Palette

- **Background Colors:**
  - Use light, neutral background colors (e.g., white or light gray) for cards to enhance readability.

- **Accent Colors:**
  - Apply brand-specific accent colors sparingly to highlight interactive elements like buttons and links.

## 3. Typography

### 3.1 Fonts

- **Primary Font:**
  - Use sans-serif fonts for clean, modern appearance (e.g., Arial, Helvetica, or Roboto).

### 3.2 Text Alignment and Spacing

- **Alignment:**
  - Left-align text for readability.
- **Line-Height:**
  - Employ adequate line-height (e.g., 1.5) to improve legibility.

## 4. Interaction

### 4.1 User Interactions

- **Hover Effects:**
  - Implement subtle hover effects on cards, such as a slight scale transform or shadow intensification, to indicate interactivity.

- **Buttons:**
  - Use easily recognizable icons and text labels for buttons. Clear call-to-action text for maximum clarity.

### 4.2 Loading Experience

- **Lazy Loading:**
  - Incorporate lazy loading for images to optimize performance, especially on devices with limited bandwidth.

## 5. Accessibility

### 5.1 Ensure Accessibility

- **Contrast Ratios:**
  - Maintain proper contrast between text and background to enhance visibility.

- **ARIA Attributes:**
  - Utilize appropriate ARIA attributes for interactive elements to support screen readers.

By following these guidelines, your team can create a UI resembling Pinterest's aesthetic, known for its visual clarity and engaging user experience. Adjust specifics according to the project's branding and user needs while maintaining adherence to best practices for design and accessibility.
