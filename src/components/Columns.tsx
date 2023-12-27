'use client';

import React from 'react';
import Column from './Column';
import { NewTodoDialog } from './NewTodoDialog';

const Columns = () => {
	return (
		<div>
			<NewTodoDialog />
			<section className='my-10 flex gap-6 lg:gap-12'>
				<Column
					key={1}
					title='TODO'
					status='TODO'
				/>
				<Column
					key={2}
					title='In Progress'
					status='IN_PROGRESS'
				/>
				<Column
					key={3}
					title='Done'
					status='DONE'
				/>
			</section>
		</div>
	);
};

export default Columns;
