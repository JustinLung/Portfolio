import type { Actions } from './$types';
export const prerender = false;

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Send the form data to Formspree
        const response = await fetch('https://formspree.io/f/mjkgrobl', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            return { success: false, error: 'Failed to send message' };
        }

        return { success: true };
    }
};
