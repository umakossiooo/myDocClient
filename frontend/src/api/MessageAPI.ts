import api from "./index";
import { Message, StatusUpdate } from "../types";

export const getMessages = async (): Promise<Message[]> => {
    const response = await api.get<Message[]>("/messages");
    return response.data;
};

export const addMessage = async (message: Message): Promise<Message> => {
    const response = await api.post<Message>("/messages", message);
    return response.data;
};

export const updateMessageStatus = async (messageId: string, statusUpdate: StatusUpdate): Promise<Message> => {
    const response = await api.put<Message>(`/messages/${messageId}`, statusUpdate);
    return response.data;
};
