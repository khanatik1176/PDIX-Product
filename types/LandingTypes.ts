export type LandingGeneralProps = {
  isDarkModeActive?: boolean;
  setIsDarkModeActive?: (value: boolean) => void;
  DarkModeActive?: boolean;
};

export type CaseStudies = {
  case_study_id: number;
  project_title: string;
  summary: string;
  thumbnail_url: string;
  slug: string;
};

export type CaseStudiesDetails = {
  case_study_id: number;
  project_title: string;
  problem_statement: string;
  thumbnail_url: string;
  solution: string;
  technologies_used: string[];
  outcome: string;
  project_url: string;
  published_at: string;
  status: string;
  created_by: {
    full_name: string;
    picture: string;
  };
};

// Types
export type Blogs = 
{
  blog_post_id: number;
  title: string;
  summary: string;
  category: string;
  thumbnail_url: string;
  published_at: string;
  slug?: string;
}
