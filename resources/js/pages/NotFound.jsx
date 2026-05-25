import PageShell from '../components/PageShell.jsx';

export default function NotFound() {
    return (
        <PageShell
            eyebrow="404"
            title="Page not found"
            description="The page you are looking for does not exist."
        />
    );
}
