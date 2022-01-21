export interface IPet {
    id: number;
    category: ICategory;
    name: string;
    photoUrls: IPhotoUrls;
    tags: ITag;
    status: string;
}

interface ICategory {
    id: number;
    name: string;
}

interface IPhotoUrls {
    photoUrl: string;
}

interface ITag {
    id: number;
    name: string;
}