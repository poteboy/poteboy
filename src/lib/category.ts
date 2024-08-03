




export const categories = [
    {
        name: 'tech' as const,
        color: '#5299fa'
    },
    {
        name: 'business' as const,
        color: '#2ac479'
    },
    {
        name: 'diary' as const,
        color: '#ff9712'
    }
]

export type Category = typeof categories[number]['name']

export const isCategory = (value: string): value is Category => {
    return categories.some((category) => category.name === value)
}

const CATEGORY_MAP = categories.reduce((acc, category) => {
    acc[category.name] = category
    return acc
}   , {} as Record<Category, typeof categories[number]>)


export const pickCategoryColor = (category: Category) => {
    return CATEGORY_MAP[category].color
}