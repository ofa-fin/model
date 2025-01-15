import type { Dimension } from "./Dimension.js";

export const ExampleCostCenter: Dimension = {
    id: '7382a2ed-2edf-46d1-b5f5-e6b1ec151d38',
    name: {
        "fi": "Kerhotoiminta",
        "en": "Club activities"
    },
    /* In this system, fixed id '@COST_CENTER' is used for cost center dimension category. */
    parent: '@COST_CENTER'
}

export const ExampleBoysClub : Dimension = {
    id: 'f04abc48-fd19-49ba-881d-082c232ff62d',
    name: {
        "fi": "Poikakerho",
        "en": "Boys club"
    },
    parent: '7382a2ed-2edf-46d1-b5f5-e6b1ec151d38'
}
