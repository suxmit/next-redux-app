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
                image: '/images/products/cowpeas-hero.png',
                varieties: [{ name: 'White Cowpeas', image: '/images/products/white-cowpeas.png' }, { name: 'Brown Cowpeas', image: '/images/products/brown-cowpeas.png' }]
            },
            // {
            //     id: 'kidney-beans',
            //     name: 'Kidney Beans (Rajma)',
            //     slug: 'kidney-beans',
            //     description: 'Rich and creamy Kidney Beans.',
            //     varieties: [{ name: 'Red Kidney Beans' }, { name: 'White Kidney Beans' }]
            // },
            // {
            //     id: 'moth-beans',
            //     name: 'Moth Beans (Matki)',
            //     slug: 'moth-beans',
            //     description: 'Drought-resistant Moth Beans, high in protein.',
            //     varieties: [{ name: 'Whole Moth Beans' }]
            // }
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
                image: '/images/products/rice-hero.png',
                varieties: [{ name: 'Basmati Rice', image: '/images/products/basmati-rice.png' }, { name: 'Non-Basmati Rice', image: '/images/products/non-basmati-rice.png' }]
            },
            {
                id: 'maize',
                name: 'Maize / Corn',
                slug: 'maize',
                description: 'High-quality yellow maize.',
                image: '/images/products/maize-hero.png',
                varieties: [{ name: 'Yellow Maize', image: '/images/products/yellow-maize.png' }, { name: 'White Maize', image: '/images/products/white-maize.png' }]
            },
            {
                id: 'barley',
                name: 'Barley',
                slug: 'barley',
                description: 'Nutritious Barley grains.',
                image: '/images/products/barley-hero.png',
                varieties: [{ name: 'Whole Barley', image: '/images/products/whole-barley.png' }]
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
                image: '/images/products/millets-hero.png',
                varieties: [{ name: 'Whole Bajra', image: '/images/products/whole-bajra.png' }]
            },
            {
                id: 'sorghum',
                name: 'Sorghum (Jowar)',
                slug: 'sorghum',
                description: 'Fibre-rich Sorghum grains.',
                image: '/images/products/sorghum-hero.png',
                varieties: [{ name: 'Whole Jowar', image: '/images/products/whole-jowar.png' }]
            },
            {
                id: 'finger-millet',
                name: 'Finger Millet (Ragi)',
                slug: 'finger-millet',
                description: 'Calcium-rich Finger Millet.',
                image: '/images/products/finger-millet-hero.png',
                varieties: [{ name: 'Whole Ragi', image: '/images/products/whole-ragi.png' }]
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
                image: '/images/products/spices-hero.png',
                varieties: [
                    { name: 'Chilli', image: '/images/products/chilli.png' },
                    { name: 'Turmeric', image: '/images/products/turmeric.png' },
                    { name: 'Black Pepper', image: '/images/products/black-pepper.png' },
                    { name: 'Coriander', image: '/images/products/coriander.png' },
                    { name: 'Cumin', image: '/images/products/cumin.png' },
                    { name: 'Fennel', image: '/images/products/fennel.png' },
                    { name: 'Fenugreek', image: '/images/products/fenugreek.png' },
                    { name: 'Mustard', image: '/images/products/mustard.png' },
                    { name: 'Cardamom', image: '/images/products/cardamom.png' },
                    { name: 'Cloves', image: '/images/products/cloves.png' },
                    { name: 'Cinnamon', image: '/images/products/cinnamon.png' },
                    { name: 'Bay Leaf', image: '/images/products/bay-leaf.png' },
                    { name: 'Asafoetida', image: '/images/products/asafoetida.png' }
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
                image: '/images/products/vegetables-hero.png',
                varieties: [
                    { name: 'Onion', image: '/images/products/onion.png' },
                    { name: 'Garlic', image: '/images/products/garlic.png' },
                    { name: 'Ginger', image: '/images/products/ginger.png' },
                    { name: 'Green Chilli', image: '/images/products/green-chilli.png' },
                    { name: 'Okra', image: '/images/products/okra.png' },
                    { name: 'Beetroot', image: '/images/products/beetroot.png' },
                    { name: 'Bottle Gourd', image: '/images/products/bottle-gourd.png' }, { name: 'Bitter Gourd', image: '/images/products/bitter-gourd.png' }, { name: 'French Beans', image: '/images/products/french-beans.png' },
                    { name: 'Spinach', image: '/images/products/spinach.png' }, { name: 'Fenugreek Leaves', image: '/images/products/fenugreek-leaves.png' }, { name: 'Coriander Leaves', image: '/images/products/coriander-leaves.png' }
                ]
            },
            {
                id: 'dehydrated-products',
                name: 'Dehydrated Products',
                slug: 'dehydrated',
                description: 'Long-lasting dehydrated vegetable powders.',
                image: '/images/products/dehydrated-hero.png',
                varieties: [{ name: 'Onion Powder', image: '/images/products/onion-powder.png' }, { name: 'Garlic Powder', image: '/images/products/garlic-powder.png' }, { name: 'Ginger Powder', image: '/images/products/ginger-powder.png' }]
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
                image: '/images/products/fruits-hero.png',
                varieties: [
                    { name: 'Mango', image: '/images/products/mango.png' }, { name: 'Banana', image: '/images/products/banana.png' }, { name: 'Grapes', image: '/images/products/grapes.png' },
                    { name: 'Papaya', image: '/images/products/papaya.png' }, { name: 'Guava', image: '/images/products/guava.png' }, { name: 'Citrus Fruits', image: '/images/products/citrus-fruits.png' },
                    { name: 'Melons', image: '/images/products/melons.png' }, { name: 'Custard Apple', image: '/images/products/custard-apple.png' }, { name: 'Jack Fruit', image: '/images/products/jack-fruit.png' }
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
                image: '/images/products/flour-hero.png',
                varieties: [
                    { name: 'Wheat Flour', image: '/images/products/wheat-flour.png' }, { name: 'Rice Flour', image: '/images/products/rice-flour.png' }, { name: 'Maize Flour', image: '/images/products/maize-flour.png' },
                    { name: 'Millet Flours', image: '/images/products/millet-flours.png' }, { name: 'Gram Flour (Besan)', image: '/images/products/gram-flour.png' }
                ]
            }
        ]
    }
];
