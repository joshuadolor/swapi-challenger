import Films from '@/components/modules/Films';
import Starships from '@/components/modules/Starships';

import { FILMS_PAGE, STARSHIPS_PAGE } from '@/constants/routes';

export default [
    {
        name: FILMS_PAGE,
        path: '/films',
        alias: '/',
        component: Films,
        label: 'Films',
    },
    {
        name: STARSHIPS_PAGE,
        path: '/starships',
        component: Starships,
        label: 'Starships',
    },
];
