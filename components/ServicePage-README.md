# ServicePage Component

A complete, reusable Next.js service page component for digital marketing agencies.

## Features

- **Complete Service Page Layout**: Hero, About, Features, Why Choose Us, Testimonials, and CTA sections
- **Responsive Design**: Built with Bootstrap 5 grid system for mobile, tablet, and desktop
- **Modern Styling**: Professional design with CSS Modules and custom animations
- **Reusable**: Easy to customize for different services (SEO, PPC, Web Development, etc.)
- **Accessibility**: Proper focus states and semantic HTML
- **Dark Mode Support**: Compatible with your existing dark mode implementation

## Files Created

1. `components/ServicePage.jsx` - Main component
2. `styles/components/ServicePage.module.css` - Styling
3. `components/ServicePageExample.jsx` - Usage examples
4. `components/ServicePage-README.md` - This documentation

## Usage

### Basic Usage

```jsx
import ServicePage from './components/ServicePage';

export default function SEOPage() {
  return <ServicePage />;
}
```

### Custom Service Data

```jsx
import ServicePage from './components/ServicePage';

const customServiceData = {
  title: "Your Service Title",
  heroDescription: "Your service description...",
  aboutTitle: "About Our Service",
  aboutDescription: "Detailed description...",
  aboutImage: "/img/your-service.jpg",
  features: [
    {
      icon: <BsSearch />,
      title: "Feature 1",
      description: "Feature description..."
    }
    // ... more features
  ],
  whyChooseUs: [
    {
      icon: <BsBarChart />,
      title: "Advantage 1",
      description: "Why choose us..."
    }
    // ... more advantages
  ],
  testimonials: [
    {
      name: "Client Name",
      company: "Company Name",
      content: "Testimonial text...",
      rating: 5
    }
    // ... more testimonials
  ],
  ctaTitle: "Ready to get started?",
  ctaDescription: "Contact us today...",
  ctaButtonText: "Get Started",
  ctaButtonLink: "/contact"
};

export default function CustomServicePage() {
  return <ServicePage serviceData={customServiceData} />;
}
```

## Service Data Structure

### Required Properties

- `title` - Service title (string)
- `heroDescription` - Hero section description (string)
- `aboutTitle` - About section title (string)
- `aboutDescription` - About section description (string)
- `ctaTitle` - CTA section title (string)
- `ctaDescription` - CTA section description (string)
- `ctaButtonText` - CTA button text (string)
- `ctaButtonLink` - CTA button link (string)

### Optional Properties

- `aboutImage` - About section image path (string, defaults to placeholder)
- `features` - Array of feature objects
- `whyChooseUs` - Array of advantage objects
- `testimonials` - Array of testimonial objects

### Feature Object Structure

```jsx
{
  icon: <BsIcon />, // React icon component
  title: "Feature Title",
  description: "Feature description"
}
```

### Why Choose Us Object Structure

```jsx
{
  icon: <BsIcon />, // React icon component
  title: "Advantage Title",
  description: "Advantage description"
}
```

### Testimonial Object Structure

```jsx
{
  name: "Client Name",
  company: "Company Name",
  content: "Testimonial content",
  rating: 5 // Number 1-5
}
```

## Styling

The component uses CSS Modules with the following color scheme:

- **Primary Color**: #134377
- **Accent Color**: #3df3e5
- **Background**: #f9f9f9
- **Text Dark**: #333333
- **Text Light**: #666666

### Dark Mode Support

The component automatically adapts to your existing dark mode implementation using `[data-bs-theme="dark"]` selectors.

## Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## Dependencies

- React Icons (BsSearch, BsGraphUp, etc.)
- Next.js Image component
- Bootstrap 5 classes
- CSS Modules

## Examples

See `ServicePageExample.jsx` for complete examples of:
- SEO Service
- PPC Service
- Web Development Service

## Customization

### Adding New Sections

To add new sections, modify the `ServicePage.jsx` component and add corresponding styles in `ServicePage.module.css`.

### Changing Colors

Update the CSS variables in `ServicePage.module.css`:

```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-color;
  /* ... other variables */
}
```

### Adding Animations

The component includes fade-in animations. Add new animations in the CSS file:

```css
@keyframes yourAnimation {
  /* animation keyframes */
}

.yourElement {
  animation: yourAnimation 0.8s ease-out;
}
```

## Integration with Existing Project

1. Copy the files to your project
2. Import and use the component in your pages
3. Customize the service data for each service page
4. Update image paths to match your project structure

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Optimized images with Next.js Image component
- CSS Modules for efficient styling
- Minimal JavaScript bundle size
- Lazy loading for images

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus states for keyboard navigation
- Alt text for images
- ARIA labels where needed

## SEO Friendly

- Proper heading structure (H1, H2, H3)
- Semantic HTML elements
- Optimized image loading
- Clean URL structure support
