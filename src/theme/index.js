import { rgba } from "polished";

export default {
  // example colors with dark mode
  colors: {
    text: "#fff0f0", // body color and primary color
    textSecondary: "#BEA6A0", // secondary body color
    heading: "#ffdddd", // primary heading color
    headingSecondary: "#fff0f0", // heading color
    background: "", // body background color :#900e0c

    backgroundSecondary: "#af0705", // secondary background color
    borderColor: "#ffc841", // border color
    primary: "#e50300", // primary button and link color
    accent: "#e50300", // a contrast color for emphasizing UI
    lightRed: "#ec5d55",
    darkRed: "#a00303",
    secondary: "#ffc0c0", // secondary color - can be used for hover states
    muted: "#BEA6A0", // muted color
    dark: "#1a0000",
    link: "#4A271E", // default link color
    danger: "#732525",
    // light: "#ffc0bf",
    // bet: "#ff4240", // secondary color - can be used for hover states
    //3: "#bf0300", // muted color
    // dark: "#400100",

    red: {
      50: "#fff0f0",
      100: "#ffdddd",
      200: "#ffc2c1",
      300: "#ff9695",
      400: "#ff5b59",
      500: "#ff2926",
      600: "#fc0906",
      700: "#e50300",
      800: "#af0705",
      900: "#900e0c",
    },

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#09c",
        muted: "#111",
      },
    },
  },
  fonts: {
    body: "DM Sans",
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "DM Sans",
    // heading: 'Bree Serif',
    monospace: "Menlo, monospace",
    fontFamily: "'Montserrat', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: "normal",
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25,
    // heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [0, 4, 8, 12, 16, 32, 48, 64, 96, 128],
  sizes: {},
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1200px",
    "1367px",
    "1440px",
  ],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ["100%", null, null, null, "970px", "1140px", "1260px"],
      paddingLeft: [20, 30],
      paddingRight: [20, 30],
      m: "0 auto",
    },
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      padding: "20px 0",
      transition: "all 0.3s ease-in-out 0s",
      "&.is-mobile-menu": {
        backgroundColor: "white",
      },
      "@media only screen and (min-width: 768px)": {
        position: "absolute",
        backgroundColor: "white",
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      // justifyContent: 'space-between',
    },

    main: {
      position: "relative",
      height: "100%",
    },
    footer: {
      backgroundColor: "#F9FAFC",
      pt: 6,
    },
  },
  section: {
    banner: {
      background: "",
      background: "#8d0707",
      // backgroundImage:
      // "linear-gradient(90deg, rgba(229,3,0,1) 0%, rgba(144,14,12,1) 40%)",
      height: "100vh",
      // "@media only screen and (max-width: 958px)": {
      //   background: "rgba(144,14,12,1) ",
      // },
      opacity: " 0.9",
      backgroundImage:
        "  radial-gradient(#E5E5F7 0.30000000000000004px, transparent 0.30000000000000004px), radial-gradient(#E5E5F7 0.30000000000000004px, #8d0707 0.30000000000000004px)",
      backgroundSize: " 12px 12px",
      backgroundPosition: " 0 0,6px 6px",
    },
    products: {
      backgroundColor: "#8d0707",
      height: "100%",
      overflow: "hidden",
    },
    features: {
      pt: [7, 7, 7, 8, 8, 7, 7],
      pb: [7, 7, 7, 8, 9, 130, 150],
    },
    clients: {
      pt: [7, 7, 7, 8, 8, 7, 150],
      pb: [7, 7, 7, 8, 9, 150],
    },
    stats: {
      backgroundImage: "background",
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 8],
    },
    subs: {
      backgroundColor: "backgroundSecondary",
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 8],
    },

    usefulFeatures: {
      backgroundColor: "backgroundSecondary",
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 150],
    },
    testimonials: {
      // pt: [7, 7, 7, 7, 8],
      // pb: [7, 7, 7, 7, 8],
    },
    whyUs: {
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 6, 8],
    },

    faq: {
      pt: [6, 6, 6, 8],
      pb: [7, 7, 7, 7, 150],
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },

    heroTitle: {
      fontSize: [4, null, null, 5, null, 5, 6],
      fontWeight: 700,
      letterSpacing: "heading",
      lineHeight: [1.4, null, null, null, null, null, 1.57],
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
    },
    logo: {
      display: "inline-flex",
      alignItems: "flex-start",
    },
    learnMore: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: 700,
      color: "primary",
    },
    nav: {
      display: ["none", null, "inline-flex"],
      p: 2,
      // transitionProperty: 'background-color',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: '.2s',
      // borderRadius: 2,
      // '&:hover': {
      //   bg: 'highlight',
      // },
      // '&.active': {
      //   color: 'primary',
      //   bg: 'highlight',
      // },
    },
    footer: {
      display: "flex",
      px: 0,
      color: "inherit",
      textDecoration: "none",
      fontSize: "14px",
      lineHeight: 2.5,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: ["block", null, null, "none", "none"],
      svg: {
        width: "32px",
      },
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    default: {
      backgroundColor: "transparent",
      fontFamily: "body",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.5s ease-in-out 0s",
      whiteSpace: "nowrap",
    },
    primary: {
      variant: "buttons.default",
      color: "white",
      bg: "primary",
      backgroundImage:
        "linear-gradient(to right, #e50300 0%, #ec5d55  51%, #e50300  100%)",

      textAlign: "center",
      textTransform: "uppercase",
      backgroundSize: "200% auto",
      color: "white",
      boxShadow: "0 0 10px #400100",
      transitionDuration: "0.3s",
      // display: "block",

      "&:hover": {
        backgroundPosition:
          "right center" /* change the direction of the change here */,
        color: "#fff",
        textDecoration: "none",
      },

      minHeight: ["50px", "50px", "50px", "50px", "50px"],
      padding: ["0 25px", "0 25px", "0 25px", "0 30px"],
    },
    primaryMd: {
      variant: "buttons.primary",
      minHeight: "50px",
      px: "25px",
    },
    secondary: {
      cursor: "pointer",
      fontFamily: "body",
      color: "text",
      bg: "secondary",
      transition: "0.3s ease-in-out 0s",
    },
    glass: {
      cursor: "pointer",
      fontFamily: "body",
      color: "text",
      boxShadow: "0 4px 7px 0 rgb(31 38 135 / 28%)",
      color: "#fff",
      margin: "40px auto",
      backgroundColor: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      transition: "0.3s ease-in-out 0s",
    },
    darkGlass: {
      cursor: "pointer",
      fontFamily: "body",
      color: "dark",
      boxShadow: "0 4px 7px 0 rgb(31 38 135 / 28%)",
      color: "dark",
      margin: "40px auto",
      backgroundColor: "rgba(231 ,231 ,231 , 0.18)",
      border: "1px solid black",
      backdropFilter: "blur(16px)",
      transition: "0.3s ease-in-out 0s",
    },

    muted: {
      variant: "buttons.default",
      backgroundColor: "#EDF0F2",
      color: "text",
      ":hover": {
        backgroundColor: "primary",
        color: "#fff",
      },
    },
    white: {
      variant: "buttons.default",
      backgroundColor: "white",
      color: "#020718",
    },
    text: {
      variant: "buttons.default",
      color: "text",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5,
    },
    featureCard: {
      display: "flex",
      alignItems: ["center", "flex-start"],
      flexDirection: ["column", "row"],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderRadius: 8,
      borderColor: "borderColor",
      height: 60,
      "&::placeholder": {
        color: "red",
      },
    },
    "input::placeholder": {
      color: "red",
    },
  },

  badges: {
    primary: {
      color: "background",
      bg: "#28A5FF",
      borderRadius: 30,
      p: "3px 11px",
      fontSize: 1,
      letterSpacing: "-0.5px",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
    glass: {
      background: " rgba( 255, 255, 255, 0.3 )",
      boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: " blur(16px) saturate(100%)",
      borderRadius: "15px",
      border: " 1px solid rgba(209, 213, 219, 0.4)",
    },
    transparent: {
      background: "transparent",
      // boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      // backdropFilter: " blur(16px) saturate(100%)",
      borderRadius: "15px",
      borderBottom: " 1px solid rgba(209, 213, 219, 0.4)",
      height: "200px !important",
      img: {
        height: ["100px", "100px", "150px"],
      },
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.

    html: {
      overflowX: "hidden",
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      textTransform: "uppercase !important ",
    },
    body: {
      backgroundColor: "white !important",
      backgroundColor: "white",
    },
    // h1-h6 Heading styles
    h1: {
      variant: "text.heading",
      fontSize: 6,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },

    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};
