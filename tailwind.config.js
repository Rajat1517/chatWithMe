module.exports = {
    // ...existing config...
    content: [
        // ...existing content...
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '100%',
                        p: {
                            marginTop: '0.5em',
                            marginBottom: '0.5em',
                        },
                        'code': {
                            backgroundColor: '#f0f0f0',
                            padding: '0.2em 0.4em',
                            borderRadius: '3px',
                            fontSize: '85%',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                            padding: 0,
                        },
                        // Add these new styles for links
                        a: {
                            color: '#3b82f6', // Tailwind blue-500
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#2563eb', // Tailwind blue-600
                                textDecoration: 'underline',
                            },
                            transition: 'color 150ms ease-in-out',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...other plugins
    ],
}