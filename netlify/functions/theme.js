exports.handler = async (event, context) => {
    const theme = new Array();
    theme.light = `:root {
        --body-bg-color: #fff;
        --body-text-color: #999;
        --body-text-color-alt: #333;
    }`;
    theme.dark = `:root {
        --body-bg-color: #333;
        --body-text-color: #fff;
        --body-text-color-alt: #aaa;
    }`;

    // const currentTheme = event.headers.cookie ? event.headers.cookie.split("=")[1] || "light" : "light";
    currentTheme = "dark";

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers': 'Content-Type',
            "Content-Type": "text/css",
        },
        body: theme[currentTheme]
  };
};
