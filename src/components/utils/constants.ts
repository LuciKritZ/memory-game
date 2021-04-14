export const constants = {
    BEGINNER_LEVEL: 1,
    INTERMEDIATE_LEVEL: 2,
    ADVANCED_LEVEL: 3,
    AUTOMATIC_LEVEL: 4,
} as const;

export const dropdownOptions = [
    {
        label: 'Beginner',
        value: constants.BEGINNER_LEVEL,
    },
    {
        label: 'Intermediate',
        value: constants.INTERMEDIATE_LEVEL,
    },
    {
        label: 'Advanced',
        value: constants.ADVANCED_LEVEL,
    },
    {
        label: 'Automatic',
        value: constants.AUTOMATIC_LEVEL,
    },
];
