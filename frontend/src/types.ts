export interface Message {
    sender: string;
    text: string;
    timestamp: string;
}

export interface Solicitud {
    id: string;
    nombre: string;
    telefono: string;
    type: "message" | "call";
    content?: string;
    messages?: Message[];
    timestamp: string;
}

export interface CurrentUser {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface ChatProps {
    conversation: Solicitud | null;
    currentUser: CurrentUser | null;
}