import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import Header from './components/Header.jsx';
import { InitialPreloader, RouteLoader } from './components/Preloader.jsx';
import { FloatingScrollToTop, ScrollToTopOnRouteChange } from './components/ScrollToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const RefundCancellationPolicy = lazy(() => import('./pages/RefundCancellationPolicy.jsx'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const Review = lazy(() => import('./pages/Review.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const PaidConsulting = lazy(() => import('./pages/PaidConsulting.jsx'));
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const PFServices = lazy(() => import('./pages/PFServices.jsx'));
const ESIServices = lazy(() => import('./pages/ESIServices.jsx'));
const MonthlyFiling = lazy(() => import('./pages/MonthlyFiling.jsx'));

export default function App() {
    return (
        <BrowserRouter>
            <InitialPreloader />
            <main className="min-h-screen bg-slate-50 text-slate-950">
                <ScrollToTopOnRouteChange />
                <Header />
                <Suspense fallback={<RouteLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Main Services Page */}
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/pf-services" element={<PFServices />} />
                        <Route path="/services/esi-services" element={<ESIServices />} />
                        <Route path="/services/monthly-filing" element={<MonthlyFiling />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
                        <Route path="/terms-of-use" element={<TermsOfUse />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/paid-consulting" element={<PaidConsulting />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
                <FloatingScrollToTop />
                <FloatingContact />
            </main>
        </BrowserRouter>
    );
}
