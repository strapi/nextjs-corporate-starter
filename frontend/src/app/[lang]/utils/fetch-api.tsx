
import qs from "qs";
import { getStrapiURL } from "./api-helpers";


export async function fetchAPI(path: string, query: any, authToken?: string) {
  const baseURL = getStrapiURL();
  const url = new URL("/api" + path , baseURL);
  url.search = qs.stringify(query);

  const baseHeader = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Strapi-Response-Format": "v4", // add this
    }
  }

  const headerWithAuth = {
    ...baseHeader,
    headers: {
      ...baseHeader.headers,
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headerWithAuth : baseHeader);
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}