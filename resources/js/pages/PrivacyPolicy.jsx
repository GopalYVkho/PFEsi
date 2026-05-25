import LegalPage from '../components/LegalPage.jsx';

const sections = [
    {
        title: '1. Introduction',
        description: 'Chakraborty Consultancy Services LLP ("Company", "we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our consultancy services. By using our website, you agree to this Privacy Policy.',
    },
    {
        title: '2. Information We Collect',
        items: [
            'Personal information: full name, phone number, email address, business name and details, and address.',
            'Service and compliance data: employee details for EPF/ESIC processing, company registration details, and documents submitted for consultancy.',
            'Payment information: transaction ID and billing details processed through Razorpay or other payment gateways. We do not store card or banking details.',
        ],
    },
    {
        title: '3. How We Use Your Information',
        items: [
            'To provide EPF, ESIC, payroll, and consultancy services.',
            'To process payments securely.',
            'To communicate with you regarding services.',
            'To improve our website and customer experience.',
            'To comply with legal and government requirements.',
        ],
    },
    {
        title: '4. Legal Basis & Consent',
        description: 'By using our website and services, you consent to the collection and use of your personal data. You have the right to access your data, correct incorrect data, request deletion, and withdraw consent as per India\'s Digital Personal Data Protection Act, 2023.',
    },
    {
        title: '5. Sharing of Information',
        items: [
            'We do not sell or rent your personal data.',
            'We may share information only with government authorities such as EPFO and ESIC, payment gateways such as Razorpay, and trusted service providers such as hosting, CRM, and IT services.',
            'All third parties are required to keep your data secure.',
        ],
    },
    {
        title: '6. Payment Security',
        items: [
            'We use trusted third-party payment gateways like Razorpay.',
            'Your payment data is encrypted.',
            'We do not store sensitive financial details.',
            'Transactions are processed securely as per industry standards.',
        ],
    },
    {
        title: '7. Data Retention',
        description: 'We retain your data only as long as necessary to complete services, comply with legal obligations, and resolve disputes. After that, data may be securely deleted.',
    },
    {
        title: '8. Cookies & Tracking Technologies',
        description: 'We may use cookies to improve website performance, understand user behavior, and enhance user experience. You can disable cookies in your browser settings.',
    },
    {
        title: '9. Data Security',
        description: 'We implement security measures including secure servers, limited access to data, encryption, and protection systems. However, no system is 100% secure due to internet risks.',
    },
    {
        title: '10. Third-Party Links',
        description: 'Our website may contain links to external websites. We are not responsible for their privacy practices.',
    },
    {
        title: '11. Children\'s Privacy',
        description: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect data from minors.',
    },
    {
        title: '12. Changes to This Policy',
        description: 'We may update this Privacy Policy from time to time. Changes will be posted on this page.',
    },
    {
        title: '13. Grievance Officer',
        items: [
            'Name: Arnab Chakraborty',
            'Email: support@pfesiconsultancy.com',
            'Phone: +91 8001 044 044',
            'We will respond within 7-15 working days.',
        ],
    },
    {
        title: '14. Contact Us',
        items: [
            'Email: support@pfesiconsultancy.com',
            'Phone: +91 8001 044 044',
            'Website: https://pfesiconsultancy.com',
        ],
    },
    {
        title: '15. Jurisdiction',
        description: 'This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Kolkata, West Bengal.',
    },
];

export default function PrivacyPolicy() {
    return (
        <LegalPage
            eyebrow="Version 1.0 | Effective Date: June 1, 2021"
            title="Privacy Policy"
            intro="This page explains how Chakraborty Consultancy Services LLP collects, uses, stores, and protects your information."
            sections={sections}
        />
    );
}
