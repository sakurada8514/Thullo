import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { List, ListCreateRequest } from "models/list/list.model";

export const createList = (requestBody: ListCreateRequest): Promise<List> =>
  apiClient.post(ENDPOINT.LIST_CREATE, requestBody).then((_res) => _res.data);
