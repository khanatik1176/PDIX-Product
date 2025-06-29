import { backendUrl } from "@/utils/config";
import axios from "axios";

export const GetCaseStudiesBySlug = async (slug: string) => {
    const res = await axios.get(`${backendUrl}/api/case-studies/${slug}`);
    return res.data;
    }