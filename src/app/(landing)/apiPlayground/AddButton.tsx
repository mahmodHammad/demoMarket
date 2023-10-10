'use client';

import { Button } from '@/wrappers';
import React from 'react';

const AddButton = () => {

	const handleAdd = () => {
		console.log('add')
	}
	return <Button onClick={handleAdd}>Add</Button>;
};

export default AddButton;
