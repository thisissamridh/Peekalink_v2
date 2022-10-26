## PeekaLink API for fetching metadata

Here is the simple way to call the api described bellow:

Just send a GET request on our API endpoint like this -

```js
https://PeekaLink.vercel.app/api?url=:url
```

### Javascript example

```js
const apiUrl = "https://PeekaLink.vercel.app/api";
const url = "https://example.com";

const result = await fetch(`${apiUrl}?url=${url}`).json;
console.log(result);
```

### Example Response

```json
{
    "domain": "spotify.com",
    "redirectedDomain": "open.spotify.com",
    "protocol": "https:",
    "title": "Spotify - Web Player: Music for everyone",
    "favicon": "https://open.spotifycdn.com/cdn/images/favicon.5cb2bd30.ico",
    "ogSiteName": "Spotify",
    "description": "Spotify is a digital music service that gives you access to millions of songs.",
    "ogTitle": "Spotify - Web Player: Music for everyone",
    "ogDescription": "Spotify is a digital music service that gives you access to millions of songs.",
    "ogUrl": "https://open.spotify.com/",
    "ogImage": [
        "https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png"
    ],
    "ogType": "website",
    "alAndroidAppName": "Spotify",
    "alAndroidPackage": "com.spotify.music",
    "alAndroidUrl": "spotify://",
    "alIosAppName": "Spotify",
    "alIosAppStoreId": "324684580",
    "alIosUrl": "spotify://",
    "twitterSite": "@spotify",
    "twitterTitle": "Spotify - Web Player: Music for everyone",
    "twitterDescription": "Spotify is a digital music service that gives you access to millions of songs.",
    "twitterImage": [
        "https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png"
    ],
    "twitterCard": "summary"
}
```
