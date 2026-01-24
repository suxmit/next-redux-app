export interface Variety {
    name: string;
    image?: string;
    description?: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image?: string;
    varieties: Variety[];
    slug: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

export const products: Category[] = [
    {
        id: 'pulses-legumes',
        name: 'Pulses & Legumes',
        slug: 'pulses-legumes',
        products: [
            {
                id: 'chickpeas',
                name: 'Chickpeas (Chana)',
                slug: 'chickpeas',
                description: 'Premium quality chickpeas sourced from the finest farms. Available in Desi and Kabuli varieties.',
                image: '/images/products/chickpeas-hero.png',
                varieties: [
                    { name: 'Desi Chickpeas', image: '/images/products/desi-chickpeas.png' },
                    { name: 'Kabuli Chickpeas', image: '/images/products/kabuli-chickpeas.png' },
                    { name: 'Chana Dal', image: '/images/products/chana-dal.png' }
                ]
            },
            {
                id: 'pigeon-peas',
                name: 'Pigeon Peas (Toor)',
                slug: 'pigeon-peas',
                description: 'High-protein Pigeon Peas, a staple in Indian cuisine. Offered whole and split.',
                image: '/images/products/pigeon-peas-hero.png',
                varieties: [{ name: 'Whole Toor Dal', image: '/images/products/whole-toor.png' }, { name: 'Split Toor Dal', image: '/images/products/split-toor.png' }]
            },
            {
                id: 'green-gram',
                name: 'Green Gram (Moong)',
                slug: 'green-gram',
                description: 'Nutrient-rich Green Gram, available whole or split.',
                image: '/images/products/green-gram-hero.png',
                varieties: [{ name: 'Whole Green Gram', image: '/images/products/whole-green-gram.png' }, { name: 'Split Green Gram (Moong Dal)', image: '/images/products/split-green-gram.png' }]
            },
            {
                id: 'black-gram',
                name: 'Black Gram (Urad)',
                slug: 'black-gram',
                description: 'Versatile Black Gram used in many traditional dishes.',
                image: '/images/products/black-gram-hero.png',
                varieties: [{ name: 'Whole Black Gram', image: '/images/products/whole-black-gram.png' }, { name: 'Split Black Gram (Urad Dal)', image: '/images/products/split-black-gram.png' }]
            },
            {
                id: 'lentils',
                name: 'Lentils (Masoor)',
                slug: 'lentils',
                description: 'Quick-cooking red lentils, perfect for soups and curries.',
                image: '/images/products/lentils-hero.png',
                varieties: [{ name: 'Whole Lentils', image: '/images/products/whole-lentils.png' }, { name: 'Split Lentils (Masoor Dal)', image: '/images/products/split-lentils.png' }]
            },
            {
                id: 'cowpeas',
                name: 'Cowpeas (Lobia)',
                slug: 'cowpeas',
                description: 'Flavorful Cowpeas, available in white and brown varieties.',
                varieties: [{ name: 'White Cowpeas' }, { name: 'Brown Cowpeas' }]
            },
            {
                id: 'kidney-beans',
                name: 'Kidney Beans (Rajma)',
                slug: 'kidney-beans',
                description: 'Rich and creamy Kidney Beans.',
                varieties: [{ name: 'Red Kidney Beans' }, { name: 'White Kidney Beans' }]
            },
            {
                id: 'moth-beans',
                name: 'Moth Beans (Matki)',
                slug: 'moth-beans',
                description: 'Drought-resistant Moth Beans, high in protein.',
                varieties: [{ name: 'Whole Moth Beans' }]
            }
        ]
    },
    {
        id: 'cereals-grains',
        name: 'Cereals & Grains',
        slug: 'cereals-grains',
        products: [
            {
                id: 'rice',
                name: 'Rice',
                slug: 'rice',
                description: 'Premium Indian rice varieties including Basmati.',
                varieties: [{ name: 'Basmati Rice' }, { name: 'Non-Basmati Rice' }]
            },
            {
                id: 'maize',
                name: 'Maize / Corn',
                slug: 'maize',
                description: 'High-quality yellow maize.',
                varieties: [{ name: 'Yellow Maize' }, { name: 'White Maize' }]
            },
            {
                id: 'barley',
                name: 'Barley',
                slug: 'barley',
                description: 'Nutritious Barley grains.',
                varieties: [{ name: 'Whole Barley' }]
            }
        ]
    },
    {
        id: 'millets',
        name: 'Millets',
        slug: 'millets',
        products: [
            {
                id: 'pearl-millet',
                name: 'Pearl Millet (Bajra)',
                slug: 'pearl-millet',
                description: 'Gluten-free Pearl Millet.',
                varieties: [{ name: 'Whole Bajra' }]
            },
            {
                id: 'sorghum',
                name: 'Sorghum (Jowar)',
                slug: 'sorghum',
                description: 'Fibre-rich Sorghum grains.',
                varieties: [{ name: 'Whole Jowar' }]
            },
            {
                id: 'finger-millet',
                name: 'Finger Millet (Ragi)',
                slug: 'finger-millet',
                description: 'Calcium-rich Finger Millet.',
                varieties: [{ name: 'Whole Ragi' }]
            }
        ]
    },
    {
        id: 'spices',
        name: 'Spices',
        slug: 'spices',
        products: [
            {
                id: 'spices-assorted',
                name: 'Assorted Spices',
                slug: 'assorted',
                description: 'Aromatic Indian spices.',
                varieties: [
                    { name: 'Chilli' }, { name: 'Turmeric' }, { name: 'Black Pepper' },
                    { name: 'Coriander' }, { name: 'Cumin' }, { name: 'Fennel' },
                    { name: 'Fenugreek' }, { name: 'Mustard' }, { name: 'Cardamom' },
                    { name: 'Cloves' }, { name: 'Cinnamon' }, { name: 'Bay Leaf' },
                    { name: 'Asafoetida' }
                ]
            }
        ]
    },
    {
        id: 'vegetables',
        name: 'Vegetables',
        slug: 'vegetables',
        products: [
            {
                id: 'fresh-vegetables',
                name: 'Fresh Vegetables',
                slug: 'fresh',
                description: 'Farm fresh vegetables.',
                varieties: [
                    { name: 'Onion' }, { name: 'Garlic' }, { name: 'Ginger' },
                    { name: 'Green Chilli' }, { name: 'Okra' }, { name: 'Beetroot' },
                    { name: 'Bottle Gourd' }, { name: 'Bitter Gourd' }, { name: 'French Beans' },
                    { name: 'Spinach' }, { name: 'Fenugreek Leaves' }, { name: 'Coriander Leaves' }
                ]
            },
            {
                id: 'dehydrated-products',
                name: 'Dehydrated Products',
                slug: 'dehydrated',
                description: 'Long-lasting dehydrated vegetable powders.',
                varieties: [{ name: 'Onion Powder' }, { name: 'Garlic Powder' }, { name: 'Ginger Powder' }]
            }
        ]
    },
    {
        id: 'fruits',
        name: 'Fruits',
        slug: 'fruits',
        products: [
            {
                id: 'fresh-fruits',
                name: 'Fresh Fruits',
                slug: 'fresh',
                description: 'Seasonal fresh fruits.',
                varieties: [
                    { name: 'Mango' }, { name: 'Banana' }, { name: 'Grapes' },
                    { name: 'Papaya' }, { name: 'Guava' }, { name: 'Citrus Fruits' },
                    { name: 'Melons' }, { name: 'Custard Apple' }, { name: 'Jack Fruit' }
                ]
            }
        ]
    },
    {
        id: 'processed',
        name: 'Flour & Processed',
        slug: 'processed',
        products: [
            {
                id: 'flours',
                name: 'Flours',
                slug: 'flours',
                description: 'Premium stone-ground flours.',
                varieties: [
                    { name: 'Wheat Flour' }, { name: 'Rice Flour' }, { name: 'Maize Flour' },
                    { name: 'Millet Flours' }, { name: 'Gram Flour (Besan)' }
                ]
            }
        ]
    }
];
