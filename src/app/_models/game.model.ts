export interface Game{
    id: number,
    title: string,
    author: string,
    description: string,
    featureDescriptions: string[],
    featureImages: string[],
    genre: string,
    version: string,
    rating: string // may have to store as a number for calculations
    publishDate: {month: string, day: number, year: number },
    videoSrc: string, //this will be binded to the video tags src attribute in the media component
    imgSrc: string
}

// add players:number property