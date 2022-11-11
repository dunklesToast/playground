var defaultSrc = "'self'" ;
var imgSrc = "'self' data: cdn.instamotion.com images.ctfassets.net";
var scriptSrc = "'self' 'unsafe-inline' app.crossengage.io www.autouncle.de widget.trustpilot.com cookie-cdn.cookiepro.com www.googletagmanager.com";
var styleSrc = "'self' 'unsafe-inline'";
var objectSrc = "'none'";
var connectSrc = "cookie-cdn.cookiepro.com im-graphql.dev.instamotion.com";

function handler(event) {
    var response = event.response;
    var headers = response.headers;

    headers['content-security-policy'] = {
        value: 'default-src ' + defaultSrc + '; img-src ' + imgSrc + '; script-src ' + scriptSrc + '; style-src ' + styleSrc + '; object-src ' + objectSrc + '; connect-src ' + connectSrc
    }

    return response;
}