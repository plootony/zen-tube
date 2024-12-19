import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { q } = request.query

  if (!q) {
    return response.status(400).json({ error: 'Query parameter is required' })
  }

  try {
    const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: q,
        key: process.env.YOUTUBE_API_KEY
      }
    })

    return response.status(200).json(youtubeResponse.data)
  } catch (error) {
    return response.status(500).json({ error: 'Failed to fetch data from YouTube API' })
  }
} 