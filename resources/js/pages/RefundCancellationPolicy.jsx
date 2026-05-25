import LegalPage from '../components/LegalPage.jsx';

const sections = [
    {
        title: '1. Cancellation Policy',
        items: [
            'Clients can request cancellation before the service process has started.',
            'Once documentation or filing has begun, cancellation may not be allowed.',
        ],
    },
    {
        title: '2. Refund Policy',
        description: 'Refunds are applicable only if the service has not been initiated or duplicate payment is made. Partial refunds may be provided depending on the stage of work completed.',
    },
    {
        title: '3. Non-Refundable Cases',
        items: [
            'Government fees and statutory charges.',
            'Work already completed or submitted.',
            'Delay caused by client-side issues.',
        ],
    },
    {
        title: '4. Processing Time',
        description: 'Approved refunds will be processed within 5-10 business days to the original payment method.',
    },
    {
        title: '5. Contact for Refunds',
        items: ['Email: support@pfesiconsultancy.com', 'Phone: +91 8001 044 044'],
    },
    {
        title: '6. Dispute Resolution',
        description: 'For any disputes, please contact us first. We aim to resolve issues quickly and fairly.',
    },
];

export default function RefundCancellationPolicy() {
    return (
        <LegalPage
            eyebrow="Version 1.0 | Effective Date: September 1, 2021"
            title="Refund and Cancellation Policy"
            intro="Welcome to Chakraborty Consultancy Services LLP. By accessing or using our website and services, you agree to the following terms."
            sections={sections}
        />
    );
}
