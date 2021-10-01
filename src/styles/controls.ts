import { createUseStyles } from "react-jss"
import { Theme } from "../themes"

export const useStyles = createUseStyles((theme: Theme) => ({
    //specific styles
    app:{
        background: theme.backgroundColor,
        '& a,p,h1,h2,h3,h4,h5,h6, span, label': {
            color: theme.primaryTextColor
        },
        '& div': {
            scrollbarWidth: 'none'
        },
        '& div::-webkit-scrollbar': {
            display: 'none'
        }
    },
    layout: {
        alignItems: "stretch",
        height: "100vh",
        padding: "8px",
        overflow: "auto"
    },
    sidebar: {
        minWidth: "300px",
        maxWidth: "300px",
        marginRight: "8px"
    },
    page:{
        height: '100%',
        overflow: 'auto'
    },
    content: {
        overflow: 'scroll',
        height: '100%'
    },
    smallSidebar: {
        minWidth: "72px",
        maxWidth: "72px",
        marginRight: "8px"
    },
    navButtonContainer: {
        marginBottom: "4px"
    },
    input: {
        color: theme.primaryTextColor,
        boxShadow: "none !important", //overwrite grommet
        backgroundColor: "transparent",
        padding: "4px 8px",
        border: "1px solid ",
        '&::placeholder': {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: theme.primaryTextColor,
            opacity: "1" /* Firefox */
          },
          '&:-ms-input-placeholder': {
              /* Internet Explorer 10-11 */
            color: theme.primaryTextColor
          },
          '&::-ms-input-placeholder': {
              /* Microsoft Edge */
            color: theme.primaryTextColor
          }
    },
    // important to overwrite the given stuff because of not working or buging around
    button: {
        color: theme.primaryTextColor,
        backgroundColor: "transparent",
        lineHeight: "inherit",
        boxShadow: "none !important", //overwrite grommet
        '&:hover': {
            backgroundColor: theme.secondaryBackgroundColor + "A0",
            boxShadow: "none"
        },
    },
    table: {
        borderCollapse: "collapse",
        color: theme.primaryTextColor,
    },
    tableRow: {
        color: theme.primaryTextColor,
        '&:nth-child(even)': {
            backgroundColor: theme.lightPrimaryColor
        },
         '&:hover': {
             backgroundColor: theme.accentColor
        }
    },
    title: {
        fontSize: "20pt",
        color: theme.primaryTextColor,
        fontWeight: "bold"
    },
    icon: {
        margin: "4px 8px",
        height: "200px"
    },
    //complex commands
    disabled: {
        color: theme.disabledColor + " !important",
        borderColor: theme.disabledColor
    },
    enabled: {
        color: theme.enabledColor + " !important",
        borderColor: theme.enabledColor
    },
    spaceBefore: {
        paddingTop: "16px"
    },
    //simple commands
    noDecoration: {
        textDecoration: "none"
    },
    fill: {
        height: "100%",
        width: "100%"
    },
    h100: {
        height: "100%"
    },
    w100: {
        width: "100%"
    },
    middle: {
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center"
    },
    vMidd: {
        verticalAlign: "middle"
    },
    vTop: {
        verticalAlign: "top"
    },
    vTextTop: {
        verticalAlign: "text-top"
    },
    vBottom: {
        verticalAlign: "bottom"
    },
    vTextBottom: {
        verticalAlign: "text-bottom"
    },
    vBaseline: {
        verticalAlign: "baseline"
    },
    vSub: {
        verticalAlign: "sub"
    },
    vSuper: {
        verticalAlign: "super"
    },
    vInherit: {
        verticalAlign: "inherit"
    },
    vInitial: {
        verticalAlign: "initial"
    },
    alignStart: {
        alignSelf: "flex-start"
    },
    alignCenter: {
        alignSelf: "center"
    },
    alignEnd: {
        alignSelf: "flex-end"
    },
    alignAuto: {
        alignSelf: "auto"
    },
    alignStretch: {
        alignSelf: "stretch"
    },
    alignBaseline: {
        alignSelf: "baseline"
    },
    alignInherit: {
        alignSelf: "inherit"
    },
    alignInitial: {
        alignSelf: "initial"
    },
    justifySpageBetween: {
        justifyContent: "space-between"
    },
    justifyCenter: {
        justifyContent: "center"
    },
    justifyAround: {
        justifyContent: "space-around"
    },
    justifyEvenly: {
        justifyContent: "space-evenly"
    },
    justifyStart: {
        justifyContent: "flex-start"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    justifyInherit: {
        justifyContent: "inherit"
    },
    justifyInitial: {
        justifyContent: "initial"
    },
    flex: {
        display: "flex"
    },
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    //needs to be the last  class with display in it -> otherwise it will be overwritten
    invisible: {
        display: "none"
    },
    grow: {
        flexGrow: "1"
    },
    shrink: {
        flexShrink: "1"
    },
    nowrap: {
        flexWrap: "nowrap",
        boxSizing: "border-box"
    },
    wrap: {
        flexWrap: "wrap",
        boxSizing: "border-box"
    },
    //custom styling here

}))

export default useStyles    