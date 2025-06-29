import { backendUrl } from "@/utils/config";
import axios from "axios";

export const GetBlogsBySlug = async (slug: string) => {
    const res = await axios.get(`${backendUrl}/api/blogs/${slug}`);
    return res.data;
    }