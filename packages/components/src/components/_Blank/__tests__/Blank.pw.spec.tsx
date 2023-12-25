import { expect, test } from '@playwright/experimental-ct-react';
import React from 'react';
import { Blank } from '..';

test.describe('Blank', () => {
	test.skip('component should render', async ({ mount }) => {
		const component = await mount(<Blank>Blank</Blank>);

		// As with any Playwright test, assert locator text.
		await expect(component).toContainText('Blank');
	});
});
