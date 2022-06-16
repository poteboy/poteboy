export type MicroList<T> = {
  contents: T[];
  limit: number;
  offset: number;
  totalCount: number;
};

export type MicoModel = {
  id: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};
