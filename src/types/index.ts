export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  slug: string;
}

export interface Appointment {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceId?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status?: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  avatarUrl?: string;
}
