import { AxiosResponse } from "axios";
import { ENDPOINT } from "config/api";
import { apiClient } from "libs/apiClient";
import { User } from "models";

// export const fetchPrincipalUser = (): Promise<User> =>
//   apiClient
//     .get(ENDPOINT.PRINCIPAL_USER)
//     .then((_res: AxiosResponse<User>) => _res.data)
//     .catch(() => {
//       throw new Error();
//     });
