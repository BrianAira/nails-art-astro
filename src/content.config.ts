//Definicion de contrato de datos (Content Collections)

import { defineCollection, z } from "astro:content";
// import { z } from "astro/zod";
import { glob } from "astro/loaders";

const services=defineCollection({
    loader:glob({pattern:'**/[^_]*.{md,mdx}', base:'./src/content/servicios'}),

    // type:'content',
    schema: z.object({
        title:z.string(),
        description:z.string(),
        price:z.number(),
        duration:z.string(),
        category:z.enum(['Manicura', 'Pedicura', 'Pestañas']),
        image:z.string(),
        featured:z.boolean().default(false)
    }),
});

export const collections={services};