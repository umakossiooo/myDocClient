export interface CurrentUser {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface Message {
    id: string;
    name: string;
    phone: string;
    content: string;
    status: string;
    timestamp: string;
}

export interface Call {
    id: string;
    name: string;
    phone: string;
    timestamp: string;
    status: string;
}

export interface StatusUpdate {
    status: string;
}

export interface Solicitud {
    id: string;
    nombre: string;
    telefono: string;
    type: "message" | "call";
    content?: string;
    status: string;
    timestamp: string;
    messages?: { sender: string; text: string; timestamp: string }[]; // Added messages property
}

export interface SolicitudesResponse {
    solicitudes: Solicitud[];
    conversaciones_activas: Solicitud[];
}
