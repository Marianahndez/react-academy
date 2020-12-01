import React from 'react';

export const theme = {
    globalStyles: {
        center: {
            textAlign: 'center'
        },
        titleH2: {
            textAlign: 'center',
            fontWeight: 'bold'
        },
        links: {
            textDecoration: 'none',
            color: '#fff'
        }
    },
    header: {
        decorativeTitle: {
            fontSize: '1.1rem',
            color: 'coral',
            display: 'flex',
            padding: '0.5rem 1.2rem',
            marginTop: '2rem',
            fontFamily: 'Cabin, sans-serif',
            fontWeight: '100',
            justifyContent: 'center',
            'after': {
                position: 'relative',
                bottom: '0.7rem',
                display: 'block',
                width: '12px',
                height: '34px',
                content: " ",
                border: '2px solid coral',
                left: '0',
                borderLeft: 'none',
            },
            'before': {
                position: 'relative',
                bottom: '0.7rem',
                display: 'block',
                width: '12px',
                height: '34px',
                content: " ",
                border: '2px solid coral',
                left: '0',
                borderRight: 'none',
            }
        },
        mainTitle: {
            fontSize: '3.5rem',
            position: 'relative',
            bottom: '2rem',
        },
        navigationCategories: {
            marginBottom: '2rem'
        },
        navigationButtons: {
            padding: '0.9rem 1.5rem',
            textTransform: 'inherit',
            fontSize: '1rem',
            fontFamily: 'Cabin, sans-serif'
        }
    },
    dialog: {
        form: {
            padding: '0.5rem 0 3rem 0',
            width: '100%'
        },
        MuiFormControlRoot: {
            margin: '1rem 0',
            width: '100%'
        },
        button: {
            display: 'block',
            float: 'right',
            marginLeft: '1rem'
        },
        circleBtn: {
            background: 'coral',
            color: '#fff',
            position: 'fixed',
            right: '5rem',
            top: '11rem',
            zIndex: '999'
        },
        flatBtn: {
            color: '#fff'
        }
    },
    post: {
        postsContainer: {
            display: 'flex',
            margin: '0'
        },
        container: {
            height: '62vh',
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: 'block',
            padding: '4.5rem 2rem 2rem 2rem',
            position: 'relative'
        },
        title: {
            color: '#fff',
        },
        comments: {
            color: '#fff',
            fontFamily: 'Cabin, sans-serif',
            fontStyle: 'italic',
            fontSize: '0.9rem'
        },
        description: {
            color: '#fff',
            fontSize: '1rem',
            width: '80%',
            fontFamily: 'Cabin, sans-serif'
        },
        category: {
            color: '#fff',
            textTransform: 'uppercase',
            fontFamily: 'Cabin, sans-serif',
            letterSpacing: '2px',
            fontSize: '0.9rem',
        },
        absoluteBtns: {
            position: 'absolute',
            right: '0',
            bottom: '2rem',
            zIndex: '999999',
            'white': {
                color: '#fff',
                marginLeft: '-1.5rem'
            }
        }
    },
    postView: {
        title: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '3.5rem',
            position: 'relative',
            top: '30%'
        },
        button: {
           color: '#fff', 
           textTransform: 'initial',
           fontSize: '1rem',
           fontWeight: 'bold',
        },
        icon: {
            fontSize: '1rem'
        },
        dataContianer: {
            display: 'block',
            padding: '2rem',
            background: 'rgba(128,128,128,.1)'
        },
        description: {
            fontSize: '2rem',
            margin: '0'
        },
        comentsContainer: {
            width: '50%',
            margin: '2rem auto'
        },
        comments: {
            display: 'flex',
            padding: '0.8rem 0.5rem',
            boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            border: '1px solid rgba(0,0,0,.09)',
            borderRadius: '8px',
            background: '#fff',
            marginBottom: '1rem'
        },
        headerContainer: {
            margin: '0 0 0 1rem'
        },
        commentsTitle: {
            fontSize: '1.6rem',
            fontWeight: '500',
            margin: '-0.1rem 0 -0.8rem 0'
        },
        iconUser: {
            fontSize: '2.3rem'
        },
        form: {
            width: '50%',
            margin: '0 auto',
            button: {
                textTransform: 'inherit'
            }
        }
    }
}

const ThemeContext = React.createContext(theme);

export default ThemeContext;