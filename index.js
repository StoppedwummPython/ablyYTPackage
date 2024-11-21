import {URL} from 'node:url';
/**
 * Generates a URL for a YouTube video to be used in a st-collab command.
 * @param {string} ytURL - A YouTube URL.
 * @param {string} channelID - The ID of the channel to generate the URL for.
 * @returns {string} The URL to use in the st-collab command.
 */
export default async function Generate(ytURL, channelID) {
    let video_id = new URL(ytURL).searchParams.get("v")
    return `https://ably-yt.vercel.app/?channel=${channelID}_${video_id}&videoId=${video_id}`
}