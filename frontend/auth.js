document.addEventListener('DOMContentLoaded', () => {
    // Internet Identity Login
    document.querySelector('.ii-login').addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const authClient = await window.authClient.create();
            await authClient.login({
                identityProvider: "https://identity.ic0.app",
                onSuccess: () => {
                    window.location.href = '/dashboard';
                }
            });
        } catch (error) {
            console.error('Login failed:', error);
        }
    });

    // Form Validation
    document.querySelector('.email-auth').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),
            location: formData.get('location'),
            role: formData.get('role')
        };
        
        // Add your registration logic here
        console.log('User data:', userData);
        alert('Registration successful! Redirecting...');
    });

    // Role Selection Styling
    document.querySelectorAll('.role-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.role-option').forEach(o => {
                o.style.borderColor = '#cbd5e1';
            });
            option.style.borderColor = 'var(--primary-blue)';
            option.querySelector('input').checked = true;
        });
    });
});