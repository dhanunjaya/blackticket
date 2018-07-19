export interface Cast {
    name: string;
    character: string;
}

export interface Movie {
    id: number;
    name: string;
    releaseDate: string;
    genre: string;
    producer: string;
    director: string;
    musicDirector: string;
    runningTime: number;
    language: string;
    imageName: string;
    description: string;
    trailer: string;
    cast: Cast[];
}
