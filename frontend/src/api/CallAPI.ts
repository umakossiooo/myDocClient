import api from "./index";
import { Call, StatusUpdate } from "../types";

export const getCalls = async (): Promise<Call[]> => {
    const response = await api.get<Call[]>("/calls");
    return response.data;
};

export const addCall = async (call: Call): Promise<Call> => {
    const response = await api.post<Call>("/calls", call);
    return response.data;
};

export const updateCallStatus = async (callId: string, statusUpdate: StatusUpdate): Promise<Call> => {
    const response = await api.put<Call>(`/calls/${callId}`, statusUpdate);
    return response.data;
};
