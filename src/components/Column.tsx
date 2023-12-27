'use client';
import React, { useEffect, useMemo } from 'react';
import Task from './Task';
import { Status, useTaskStore } from '@/store/store';

interface ColumnProps {
	title: string;
	status: Status;
}
const Column: React.FC<ColumnProps> = ({ title, status }) => {
	const tasks = useTaskStore((state) => state.tasks);
	const updateTask = useTaskStore((state) => state.updateTask);
	const draggedTask = useTaskStore((state) => state.draggedTask);
	const dragTask = useTaskStore((state) => state.dragTask);

	const filteredTasks = useMemo(
		() => tasks.filter((task) => task.status === status),
		[tasks, status]
	);
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		if (!draggedTask) return;
		updateTask(draggedTask, status);
		dragTask(null);
	};
	useEffect(() => {
		useTaskStore.persist.rehydrate();
	}, []);
	return (
		<section className='flex-1 min-h-[500px] flex flex-col'>
			<h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>
			<div
				className='mt-3.5 flex-1 rounded-xl bg-gray-700/50 p-4 overflow-y-auto'
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}>
				<div className='flex flex-col gap-4'>
					{filteredTasks.map((task) => (
						<Task
							key={task.id}
							{...task}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Column;
