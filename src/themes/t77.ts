export const theme = {
    global: {
        colors: {
            brand: '#301C87',
            'accent-1': '#FF13BB'
        },
        font: {
            family: 'Roboto',
            size: '22px',
            height: '20px',
        },
        hover: {
            background: {
                color: '#FF13BB'
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
            color: '#FF13BB'
        },
        button: {
            color: 'FF13BB',
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
    darkPrimaryColor: '#F51D3E',
    lightPrimaryColor: '#9236FF',
    backgroundColor: '#301C87',
    accentColor: '#FF13BB',
    primaryTextColor: '#FF13BB',
    secondaryTextColor: '#FF13BB',
    dividerColor: '#301C87',

    disabledColor: '#e25252',
    enabledColor: '#52e25e',
    secondaryBackgroundColor: '#301C87'
}

export default theme