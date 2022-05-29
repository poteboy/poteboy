
export type Blog = {
    content: any;
    createdAt: string;
    publishedAt: string;
    title: string;
}

export type BlogList = {
    contents: Blog[];
    limit: number;
    offset: number;
    totalCount: number;
}