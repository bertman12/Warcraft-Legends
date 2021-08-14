export interface Game{
    id: number,
    title: string,
    author: string,
    description: string,
    featureDescriptions: string[],
    featureImages: string[],
    genre: string,
    version: number,
    rating: number 
    publishDate: {month: string, day: number, year: number},
    videoSrc: string, //this will be binded to the video tags src attribute in the media component
    imgSrc: string //default image source for preview in the reviews list
}
