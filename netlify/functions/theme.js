exports.handler = async (event, context) => {
    const defaultTheme = "light-mode.css";
    const currentTheme = event.headers.cookie ? event.headers.cookie.match(/(?<=theme=)[^;]+/g) || defaultTheme : defaultTheme;

    return {
        statusCode: 301,
        headers: {
            location: event.path.replace("/assets/css/theme.css", "/assets/css/" + currentTheme),
        },
    };
};
