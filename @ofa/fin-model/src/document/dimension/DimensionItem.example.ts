import type { DimensionItem } from "./DimensionItem.js";

/** 
 * Dimension are used to catecorize entry for cost center 'Club activities' 
 * and then for boys club 60 % and girls club 40 %.
 * Without percentages, percentages are considered to be equal (50 % each).
*/
const dimensionedForClubs : DimensionItem = {
    id: '@COST_CENTER',
    name: 'Cost center',
    values: [
        {
            id: '7382a2ed-2edf-46d1-b5f5-e6b1ec151d38',
            name: 'Club activities',
            values: [ 
                {
                    id: 'f04abc48-fd19-49ba-881d-082c232ff62d',
                    name: 'Boys club',
                    percentage: 60
                },
                {
                    id: 'a72a6d0c-23b4-4a04-b650-d0b73823db22',
                    name: 'Girls club',
                    percentage: 40
                }
            ] 
        }
    ]
}