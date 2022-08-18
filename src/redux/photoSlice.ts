import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

type Photo = {
  Id: number;
  Title: string;
  Description: string;
  Family: string;
  CollectiveNoun?: string;
  Genus?: string;
  Width: number;
  Height: number;
  ImageURLs: {
    FullSize: string;
    Thumb: string;
  };
};

type EndPoint = "animals" | "fruitveg" | "buyproperly-demo";

const url =
  "https://raw.githubusercontent.com/BuyProperly/interview/main/photos";

export const fetchPhotos = createAsyncThunk<
  [EndPoint, Photo[]],
  EndPoint,
  { rejectValue: AxiosError }
>("fetch/photos", async (endPoint, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${url}/${endPoint}.json`);
    return [endPoint, data];
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err);
    } else {
      throw new Error("Server Error");
    }
  }
});

type PhotoState = {
  photos: Photo[];
  loadingPhotos: boolean;
  tabSelected: EndPoint;
};

const initialState: PhotoState = {
  photos: [],
  loadingPhotos: true,
  tabSelected: "buyproperly-demo",
};

export const photoSlice = createSlice({
  name: "photoReducer",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<EndPoint>) => {
      const endPoint = action.payload;
      state.loadingPhotos = false;
      state.tabSelected = endPoint;
    },
  },
  extraReducers: (builder) => {
    // get photos
    builder.addCase(
      fetchPhotos.fulfilled,
      (state, action: PayloadAction<[EndPoint, Photo[]]>) => {
        const [endPoint, photos] = action.payload;
        state.photos = photos;
        state.loadingPhotos = false;
        state.tabSelected = endPoint;
      }
    );

    builder.addCase(fetchPhotos.pending, (state) => {
      state.loadingPhotos = true;
    });

    builder.addCase(fetchPhotos.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default photoSlice.reducer;

export const { setTab } = photoSlice.actions;
export type { Photo, EndPoint };
