export class Cast {
    public name: string;
    public character: string;
}

export class Movie {
    public id: number;
    public name: string;
    public releaseDate: string;
    public genre: string;
    public producer: string;
    public director: string;
    public musicDirector: string;
    public runningTime: number;
    public language: string;
    public imageName: string;
    public description: string;
    public trailer: string;
    public cast: Cast[];

    // tslint:disable-next-line:max-line-length
    constructor(id: number, name: string, rdate: string, genre: string, pro: string, dir: string, mDir: string, rtime: number, lang: string, iName: string, desc: string, t: string, cast: Cast[]) {
        this.id = id;
        this.name = name;
        this.releaseDate = rdate;
        this.genre = genre;
        this.producer = pro;
        this.director = dir;
        this.musicDirector = mDir;
        this.runningTime = rtime;
        this.language = lang;
        this.imageName = iName;
        this.description = desc;
        this.trailer = t;
        this.cast = cast;
    }

    public static movieFromJSON(obj: any): Movie {
        // tslint:disable-next-line:max-line-length
        return new Movie(obj.id, obj.name, obj.releaseDate, obj.genre, obj.producer, obj.director, obj.musicDirector, obj.runningTime, obj.language, obj.imageName, obj.description, obj.trailer, obj.cast);
    }
}


