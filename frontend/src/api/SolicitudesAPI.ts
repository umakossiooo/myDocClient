import api from "./index";
import { SolicitudesResponse } from "../types";

export const getSolicitudes = async (): Promise<SolicitudesResponse> => {
    const response = await api.get<SolicitudesResponse>("/solicitudes");
    return response.data;
};

export const updateSolicitudStatus = async (id: string, type: "message" | "call", status: "accepted" | "ignored") => {
    const endpoint = type === "message" ? `/messages/${id}` : `/calls/${id}`;
    await api.put(endpoint, { status });
};
