import '@btechlabs/fiber-styles/index.css';
import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '.';
import { CheckedState } from '@radix-ui/react-checkbox';

const App = () => {
	const [checked, setChecked] = useState<CheckedState>(false);

	return (
		<div style={{ display: 'flex', gap: 4 }}>
			<Checkbox
				aria-label="checkbox"
				checked={checked}
				onCheckedChange={() => {
					setChecked((checked) => {
						switch (checked) {
							case true:
								return false;
							case false:
								return 'indeterminate';
							case 'indeterminate':
								return true;
						}
					});
				}}
			/>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
