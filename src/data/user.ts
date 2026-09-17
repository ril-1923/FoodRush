import type { User, Address } from "../types";

export const mockUser: User = {
  name: "Aravind Kumar",
  email: "aravind.kumar@example.com",
  phone: "+91 98765 43210",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=75",
};

export const mockAddresses: Address[] = [
  {
    id: "a1",
    label: "Home",
    name: "Aravind Kumar",
    phone: "+91 98765 43210",
    address: "14, Kongu Nagar 2nd Street",
    city: "Tiruppur",
    pincode: "641601",
  },
  {
    id: "a2",
    label: "Work",
    name: "Aravind Kumar",
    phone: "+91 98765 43210",
    address: "Tex Towers, 3rd Floor, Avinashi Road",
    city: "Tiruppur",
    pincode: "641603",
  },
];
