import { createSelector } from 'reselect'

const selectoryDirectory = state => state.directory;

export const selectDirectorySections = createSelector(

    [selectoryDirectory],
    directory => directory.sections
)

