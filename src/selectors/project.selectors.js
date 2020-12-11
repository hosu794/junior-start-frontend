export const projectsSelector = (state) => state.project.projects;
export const projectLoadingSelector = (state) => state.project.loading;
export const projectSizeSelector = (state) => state.project.size;
export const projectTotalElementSelector = (state) =>
  state.project.totalElement;
export const projectLastSelector = (state) => state.project.last;
export const projectPageSelector = (state) => state.project.page;
export const projectErrorSelector = (state) => state.project.error;
export const projectCurrentItemSelector = (state) => state.project.currentItem;
