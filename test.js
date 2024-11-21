import Generate from "./index.js";
const generated = await Generate("https://www.youtube.com/watch?v=3G0a7r4b7Eg", "test")

if (generated != "https://ably-yt.vercel.app/?channel=test_3G0a7r4b7Eg&videoId=3G0a7r4b7Eg") {
    throw new Error("Failed to check, given https://ably-yt.vercel.app/?channel=test_3G0a7r4b7Eg&videoId=3G0a7r4b7Eg, recieved " + generated)
}