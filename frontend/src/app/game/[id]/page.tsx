import { useRouter } from 'next/router';

export default function GamePage({ params }: { params: { id: string } }) {
    const { id } = params;
    return <div>Game Page - Game ID: {id}</div>;
}