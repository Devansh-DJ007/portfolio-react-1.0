import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  
  console.log("Executing fetchPageInfo");
  console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL );
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`;
  console.log("API URL:", apiUrl); // Log the constructed API URL

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  console.log("Response status:", res.status); // Log the HTTP status code
  console.log("Response headers:", res.headers);
  console.log("API response:", res);

  const data = await res.json();

  console.log("API response data:", data);
  // const pageInfo: PageInfo = data.result as PageInfo;
  const pageInfo: PageInfo = data.pageInfo;

  console.log("Page info:", pageInfo);

  return pageInfo;
};
