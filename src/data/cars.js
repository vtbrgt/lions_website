import product1 from '../assets/products/frente1.webp'
import product2 from '../assets/products/frente2.webp'
import product3 from '../assets/products/frente3.webp'

export const CARS = [
{id: 1, brand: "Toyota", name: "Corolla XEi 2.0", year: 2021, km: 38200, price: 124900, type: "sedan", color: "#d9d9de", tag: "Único dono", fuel: "Flex", image: product1}, 
{id: 2, brand: "Honda", name: "Civic EXL 2.0", year: 2020, km: 51000, price: 118500, type: "sedan", color: "#7d8590", tag: "", fuel: "Flex", image: product2}, 
{id: 3, brand: "Jeep", name: "Compass Longitude", year: 2022, km: 29800, price: 149900, type: "suv", color: "#2f5d8a", tag: "Destaque", fuel: "Flex", image: product3}, 
{id: 4, brand: "Volkswagen", name: "T-Cross Highline", year: 2021, km: 42100, price: 109900, type: "suv", color: "#b3392f", tag: "", fuel: "Flex", image: product1}, 
{id: 5, brand: "Hyundai", name: "HB20 Platinum", year: 2022, km: 24500, price: 82900, type: "hatch", color: "#e8e8ea", tag: "Baixa km", fuel: "Flex", image: product2}, 
{id: 6, brand: "Chevrolet", name: "Onix Premier", year: 2021, km: 36700, price: 79900, type: "hatch", color: "#4a4a52", tag: "", fuel: "Flex", image: product3}, 
{id: 7, brand: "Toyota", name: "Corolla Cross XRE", year: 2023, km: 17900, price: 164900, type: "suv", color: "#c9c9ce", tag: "Novo no estoque", fuel: "Híbrido", image: product1}, 
{id: 8, brand: "Honda", name: "City Touring", year: 2022, km: 27300, price: 104900, type: "sedan", color: "#2c2c33", tag: "", fuel: "Flex", image: product2}, 
{id: 9, brand: "Volkswagen", name: "Polo Highline", year: 2022, km: 31800, price: 89900, type: "hatch", color: "#8a2f2f", tag: "", fuel: "Flex", image: product3}]

export const CAR_TYPES = [
  { value: 'sedan', label: 'Sedã' },
  { value: 'suv', label: 'SUV' },
  { value: 'hatch', label: 'Hatch' },
]

export const BRANDS = [...new Set(CARS.map((c) => c.brand))].sort()
