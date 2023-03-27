import axios from "axios"

export const Url = "https://back-end-saboaria.vercel.app"

export const urlMercadoPago = axios.create({baseURL:"https://api.mercadopago.com"})

