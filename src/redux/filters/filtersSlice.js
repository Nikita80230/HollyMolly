import { createSlice } from "@reduxjs/toolkit";
// import {} from "./operations";

const initialFiltersState = {
  priceRange: [],
  colors: [],
  materials: [],
  sizes: [],
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: initialFiltersState,
  reducers: {
    addFilter(state, action) {
      switch (action.payload.name) {
        case "priceRange":
          state.priceRange = action.payload.value;
          break;
        case "color":
          if (state.colors.includes(action.payload.value)) {
            state.colors = state.colors.filter(
              (color) => color !== action.payload.value
            );
          } else {
            state.colors = [...state.colors, action.payload.value];
          }
          break;
        case "size":
          if (state.sizes.includes(action.payload.value)) {
            state.sizes = state.sizes.filter(
              (size) => size !== action.payload.value
            );
          } else {
            state.sizes = [...state.sizes, action.payload.value];
          }
          break;
        case "material":
          if (state.materials.includes(action.payload.value)) {
            state.materials = state.materials.filter(
              (material) => material !== action.payload.value
            );
          } else {
            state.materials = [...state.materials, action.payload.value];
          }
          break;

        default:
          break;
      }
    },
    resetFilters: () => {
      return initialFiltersState;
    },
  },
  extraReducers: (builder) => {},
});

export const { addFilter, resetFilters } = filtersSlice.actions;

// priceRange;
// colors;
// materials;
// sizes;
export const selectFilters = (state) => state.filters;

export const selectPriceRange = (state) => state.filters.priceRange;
export const selectColors = (state) => state.filters.colors;
export const selectMaterials = (state) => state.filters.materials;
export const selectSizes = (state) => state.filters.sizes;

export const filtersReducer = filtersSlice.reducer;
