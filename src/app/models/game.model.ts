export interface Game{
    title: string,
    author: string,
    description: string,
    publishDate: {month: string, day: number, year: number },
    videoSrc: string, //this will be binded to the video tags src attribute in the media component
    imgSrc: string
}