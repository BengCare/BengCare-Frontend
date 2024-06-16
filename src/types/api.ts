export type ApiReturn<T> = {
  success: boolean;
  message: string;
  data: T;
  code?: number;
};

export type ApiError = {
  message: string;
  code: number;
  success: boolean;
};

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

export type DefaultMeta = {
  page: number;
  max_page: number;
};

export type PaginateData<Data, Meta> = {
  data_per_page: Data;
  meta: DefaultMeta & Meta;
};

export interface PaginatedApiResponse<DataType, MetaType = DefaultMeta> {
  code: number;
  success: string;
  data: PaginateData<DataType, MetaType>;
}