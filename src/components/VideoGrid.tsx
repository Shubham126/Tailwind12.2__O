import React from 'react'
import { VideoCard } from './VideoCard'

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Aao kabhi haweli mein",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "46M",
    timestamp: "13 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn JavaScript in 2022 | JavaScript programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn React in 2022 | React programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
},  {
    title: "Learn Python in 2022 | Python programming for beginners",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Subham kumar",
    views: "100k",
    timestamp: "2 days ago"
}
]

export const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {VIDEOS.map(video => <div>
            <VideoCard 
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp} />
        </div>)}
    </div>
  )
}
