export type SingleBlogType = 
{
    blog_post_id: number;
    category: string;
    content: string;
    published_at: string;
    slug: string;
    thumbnail_url: string;
    title: string;
    created_by: {
        full_name: string;
        picture: string;
    };
}

export interface BlogBannerProps {
  images: string;
}

export type BlogCardProps = {
  src: string;
  alt: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  DarkModeActive?: boolean;
};