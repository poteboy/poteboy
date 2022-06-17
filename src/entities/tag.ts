const tagNames = {
  css: 'css',
  figma: 'figma',
};

export type TagName = keyof typeof tagNames;

type Tag = {
  name: TagName;
  title: string;
};

const tags: Tag[] = [
  {
    name: 'css',
    title: 'CSS',
  },
  {
    name: 'figma',
    title: 'Figma',
  },
];

export const getTagByName = (name: TagName): Tag => {
  const tag = tags.find((tag) => tag.name === name);
  if (tag) return tag;
  else throw Error();
};
