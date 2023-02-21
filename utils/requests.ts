import { baseUrl } from "./config";

export const fetchMainLayout =async ()=>{


    const response = await fetch(
        `${baseUrl}/en/desktop/layout/main-page`
    )
    const { success, payload } = await response.json();
    return {success,payload};

} 