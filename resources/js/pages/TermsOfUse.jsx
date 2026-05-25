import LegalPage from '../components/LegalPage.jsx';

const sections = [
    {
        title: '1. Services',
        description: 'We provide consultancy services including EPF, ESIC registration, compliance management, payroll services, and labour law advisory. All services are delivered online unless otherwise specified.',
    },
    {
        title: '2. User Responsibilities',
        items: [
            'You agree to provide accurate and complete information.',
            'You are responsible for maintaining confidentiality of any account details.',
            'Misuse of services or fraudulent activities are strictly prohibited.',
        ],
    },
    {
        title: '3. Payments',
        items: [
            'All payments must be made in advance unless agreed otherwise.',
            'Payments are processed securely via third-party payment gateways like Razorpay.',
            'We are not responsible for payment failures due to bank or network issues.',
        ],
    },
    {
        title: '4. Service Delivery',
        description: 'Service timelines depend on document submission and government processing. Delays due to incorrect information or third-party authorities are not our responsibility.',
    },
    {
        title: '5. Intellectual Property',
        description: 'All content on this website is owned by Chakraborty Consultancy Services LLP and cannot be copied or reused without permission.',
    },
    {
        title: '6. Limitation of Liability',
        items: [
            'Government delays or rejections.',
            'Loss due to incorrect client information.',
            'Indirect or incidental damages.',
        ],
    },
    {
        title: '7. Termination',
        description: 'We reserve the right to suspend services if terms are violated.',
    },
    {
        title: '8. Changes to Terms',
        description: 'We may update these terms at any time without prior notice.',
    },
    {
        title: '9. Contact Us',
        items: ['Email: support@pfesiconsultancy.com', 'Phone: +91 8001 044 044'],
    },
];

export default function TermsOfUse() {
    return (
        <LegalPage
            eyebrow="Version 1.0 | Effective Date: September 1, 2021"
            title="Terms & Conditions"
            intro="Welcome to pfesiconsultancy.com, operated by Chakraborty Consultancy Services LLP. By accessing or using our website and services, you agree to the following terms."
            sections={sections}
        />
    );
}
