interface VideoSnippet {
  title: string
  description: string
  thumbnails: {
    high: {
      url: string
    }
  }
  channelTitle: string
}

interface Video {
  id: {
    videoId: string
    kind: string
  }
  snippet: VideoSnippet
} 