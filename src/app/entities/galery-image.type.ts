export interface ImageGalery {
    id: string;
    alt_description: string;
    color: string;
    created_at: string;
    current_user_collections: Array<any>;
    description: string;
    width: number;
    height: number;
    is_loaded: boolean;
    liked_by_user: boolean;
    likes: number;
    links: { download: string, download_location: string, html: string, self: string };
    promoted_at: string;
    sponsorship: Object;
    topic_submissions: Object;
    updated_at: string;
    urls: {raw: string; full: string; regular: string; small: string; small_s3: string; thumb: string };
    profile_image: string;
    user: { username: string, profile_image: { small: string } };
}
