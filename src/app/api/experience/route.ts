import { NextResponse } from 'next/server';

const experience = [
  {
    id: 1,
    title: 'Frontend Developer at EZCLOUD LLC',
    logo: '/ezcloud.png',
    location: 'USA (Remote)',
    duration: 'Dec 2021 - Sept 2025 (3 years 10 months)',
    projects: [
      {
        id: 1,
        title: 'Amazon P&L Tracker',
        shortDescription: 'Dashboard built with Vuetify to track seller profits. Pulled analytics via Amazon SP-API, optimized performance for large datasets.',
        description:
          'Internal web application for Amazon sales teams to track profit & loss, expenses, sales performance, advertising costs, returns, and key product metrics. Integrated with multiple Amazon APIs (Orders, Finance, Inventory, Catalog, Advertising) for automated data sync. Features include alerts system with urgency levels, filters, dashboards, team performance tables, historical reports, and user role management (Super Admin, Team Manager, Buyer). Supports multiple Amazon accounts.',
        stack: ['Vue.js', 'Vuetify', 'TypeScript', 'Amazon SP API', 'REST APIs', 'Pinia'],
        duration: '18 months',
      },
      {
        id: 2,
        title: 'Scanly',
        shortDescription: 'Vue.js + Quasar-based UI for Amazon product comparison. Integrated with Amazon SP-API for real-time pricing and inventory data.',
        description:
          'Built the admin dashboard for an automated Amazon product sourcing platform. Features include: Managing sourcing filters (ROI %, profit, category, rank), tracking product leads scraped from online retailers, viewing built-in profit calculations, scheduling product tests and email campaigns, monitoring clicks, open rates, and live product stats, importing/exporting product files for bulk management, integrating with Amazon SP API for real-time product data and updates, focused on delivering a smooth, data-driven interface for efficient arbitrage workflows.',
        stack: ['Vue.js', 'Quasar', 'TypeScript', 'Amazon SP API', 'REST APIs', 'Pinia'],
        duration: '12 months',
      },
      {
        id: 3,
        title: 'EZCELL',
        shortDescription: 'Admin panel for phone top-ups using Plivo IVR integration and Cardknox for secure payment processing. Built with React, TypeScript, and Next.js.',
        description:
          'Developed the system web portal, enabling users to manage phone refills with carrier and plan selection, payment handling, manual and scheduled top-ups, notifications, and detailed transaction views. The interface supports saved payment methods, searchable dropdowns, and prefilled forms for a smooth user experience. Additionally, the platform includes a rental feature allowing device bookings by country and device type, with filters, payment options, tax handling, and booking status tracking.',
        stack: ['React', 'Next.js', 'TypeScript', 'Plivo IVR API', 'Cardknox payment API', 'Redux', 'Tailwind CSS'],
        duration: '10 months',
      },
      {
        id: 4,
        title: 'Hayoim Yoim',
        shortDescription: 'React-based tool for scheduling and managing ad campaigns. Used OAuth for user authentication and Google Maps API for location-targeted ads.',
        description:
          'Developed an application for scheduling and managing digital ad campaigns with a focus on usability and efficiency. Users can create campaigns by selecting dates, times, target locations via an interactive Google Maps interface, and ad creatives, with real-time validation and previews. The system supports campaign status tracking, detailed performance dashboards, and easy duplication of past campaigns for faster setup. Secure OAuth authentication ensures user data protection and personalized access to campaign history. The responsive design allows seamless use across desktop and mobile devices, enhancing accessibility for marketing teams on the go.',
        stack: ['React', 'TypeScript', 'OAuth', 'Google Maps API', 'Material UI', 'Redux'],
        duration: '8 months',
      },
      {
        id: 5,
        title: 'Sendy',
        shortDescription: 'Designed responsive HTML email templates. Managed email delivery and tracking via SendGrid API. Improved engagement through A/B tested templates.',
        description:
          'Designed and implemented responsive HTML email templates. Integrated SendGrid API for email delivery, tracking, and analytics. Developed an internal tool for uploading templates and creating email campaigns. The platform supports scheduling emails, tracking open and click rates (including clicks on specific CTA buttons), and managing campaign templates. Ran A/B tests to optimize engagement.',
        stack: ['Vue.js', 'Vuetify', 'Vuex', 'JavaScript (ES6+)', 'SendGrid API'],
        duration: '6 months',
      },
      {
        id: 6,
        title: 'Kosher Supplements',
        shortDescription: 'Developed product listings and shopping cart. API-driven order processing. Improved performance with lazy loading and code splitting.',
        description:
          'Developed frontend for an e-commerce platform featuring dynamic product listings and a fully functional shopping cart. Integrated with backend APIs for order processing, inventory updates, and real-time stock status. Improved performance through lazy loading of images and code splitting to optimize load times. Ensured seamless and responsive user experience across devices with smooth transitions and clear feedback. Implemented error handling and validation to support reliable checkout processes.',
        stack: ['Vue.js', 'JavaScript (ES6+)', 'Bootstrap', 'REST APIs'],
        duration: '6 months',
      },
      {
        id: 7,
        title: 'Code Quality & Maintenance',
        shortDescription: 'Refactored legacy Vue/React codebases. Adopted TypeScript, conducted code reviews, optimized API calls, and improved overall maintainability.',
        description:
          'Refactored legacy Vue/React codebases. Adopted TypeScript, conducted code reviews, optimized API calls, and improved overall maintainability. Utilized AWS S3 and CloudFront for hosting and delivering frontend assets, ensuring fast and reliable content distribution. Managed domain settings with Route 53 and access permissions via IAM. Configured GitLab CI/CD pipelines for automated builds and deployments to AWS infrastructure.',
        stack: ['TypeScript', 'AWS S3', 'CloudFront', 'Route 53', 'IAM', 'GitLab CI/CD', 'EC2'],
        duration: 'Throughout employment',
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(experience);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}