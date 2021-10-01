export const theme = {
    global: {
        colors: {
            brand: '#383c4a',
            'accent-1': '#5294e2'
        },
        font: {
            family: 'Roboto',
            size: '22px',
            height: '20px',
        },
        hover: {
            background: {
                color: '#5294e2'
            }
        }
    },
    table:{
        body:{
            pad:{
                "horizontal": "8px",
                "vertical": "8px"
            }
        },
        header: {
            pad:{
                "horizontal": "8px",
                "vertical": "8px"
            }
        }
    },
    box:{
        extend: {
            
        }
    },
    checkBox: {
        color: 'accent-1',
    },
    pagination: {
        icons: {
            color: '#7c818c'
        },
        button: {
            color: '7c818c',
            active: {
                background: {
                    color: 'accent-1'
                }
            }
        }
    },
    formField: {
        border: {
            color: 'transparent'
        },
        focus: {
            border: {
                color: 'transparent'
            }
        },
        margin:{
            left: "xsmall",
            right: "xsmall"
        }
    },
    spinner: {
        container: {
            color: 'accent-1'
        }
    },
    darkPrimaryColor: '#404552',
    lightPrimaryColor: '#4b5162',
    backgroundColor: '#383c4a',
    accentColor: '#5294e2',
    primaryTextColor: '#7c818c',
    secondaryTextColor: '#7c818c',
    dividerColor: '#383c4a',

    disabledColor: '#e25252',
    enabledColor: '#52e25e',
    secondaryBackgroundColor: '#383c4a'
}

export default theme