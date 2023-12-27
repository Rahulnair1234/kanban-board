import Columns from '@/components/Columns';

export default function Home() {
	return (
		<main className='flex flex-col h-screen overflow-hidden overflow-y-auto bg-gradient-to-br from-gray-700 to-gray-900 py-12 text-white'>
			<h1 className='text-4xl text-center'>Kanban Board</h1>
			<section className='mx-auto w-full max-w-7xl px-6'>
				<Columns />
			</section>
		</main>
	);
}
