




export const categories = [
    {
        name: 'tech' as const,
        color: '#ff395c'
    },
    {
        name: 'business' as const,
        color: '#2ac479'
    },
    {
        name: 'diary' as const,
        color: '#395cff'
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