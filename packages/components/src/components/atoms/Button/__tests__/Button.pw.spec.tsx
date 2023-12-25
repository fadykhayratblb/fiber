import { expect, test } from '@playwright/experimental-ct-react';
import React from 'react';
import { Button } from '..';

test.describe('Button', () => {
	test('click event should work', async ({ mount }) => {
		let clicked = false;

		// Mount a component. Returns locator pointing to the component.
		const component = await mount(
			<Button
				title="Submit"
				onClick={() => {
					clicked = true;
				}}
			>
				Submit
			</Button>,
		);

		// As with any Playwright test, assert locator text.
		await expect(component).toContainText('Submit');

		// Perform locator click. This will trigger the event.
		await component.click();

		expect(clicked).toBeTruthy();
	});

	test('should support rendering elements within the button through the `children` prop', async ({
		mount,
	}) => {
		const component = await mount(
			<Button>
				<span>child</span>
			</Button>,
		);
		await expect(component.locator('text=child')).toBeVisible();
	});
});
