import api from "./index";
import { CurrentUser } from "../types";

export const getCurrentUser = async (): Promise<CurrentUser> => {
    const response = await api.get<CurrentUser>("/current_user");
    return response.data;
};

export const setCurrentUser = async (user: CurrentUser): Promise<CurrentUser> => {
    const response = await api.post<CurrentUser>("/current_user", user);
    return response.data;
};
