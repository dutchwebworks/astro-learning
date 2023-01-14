exports.handler = async(event, context) => {
    let default_theme = "light-mode.css";
    let theme_name = event.headers.cookie ? event.headers.cookie.match(/(?<=theme=)[^;]+/g) || default_theme : default_theme

    return {
        statusCode: 301,
        headers: {
            "location": event.path.replace("theme.css", "assets/css/" + theme_name)
        }
    };
};
