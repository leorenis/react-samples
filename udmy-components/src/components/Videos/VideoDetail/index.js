import React from 'react'

const VideoDetail = ({ video }) => {
    const videoSrcBase = 'https://www.youtube.com/embed'
  return video ? (
    <div>
      <div className={'ui embed'}>
        <iframe title={video.snippet.title} src={`${videoSrcBase}/${video.id.videoId}`} />
      </div>
      <div className={'ui segment'}>
        <h4 className={'header'}>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : null
}
export default VideoDetail
