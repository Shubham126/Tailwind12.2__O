import React from 'react'

export const VideoCard = (props : any) => {
  return (
    <div>
        <img src={props.image} className='rounded-xl'></img>
        <div className='grid grid-cols-12 pt-2'>
            <div className="col-span-1">
                <img className='rounded-full w-20 h-20' src={props.thumbImage} />
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div className="col-span-11 pl-2 text-gray-400 text-base">
                <h2>{props.author}</h2>
                </div>
                <div className="col-span-11 pl-2 text-gray-400 text-base">
                    <h2>{props.views} | {props.timestamp} </h2>
                </div>
            </div>
        </div>
    </div>
  )
}
