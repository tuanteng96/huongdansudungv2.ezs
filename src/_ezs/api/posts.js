import http from "../utils/http";

const PostsAPI = {
  getTaxonomy: (id) =>
    http.get(`/wp-json/wp/v2/categories?parent=${id}&per_page=50`),
  getTaxonomySlug: (slug) =>
    http.get(`/wp-json/wp/v2/categories?per_page=50&slug=${slug}`),
  getPostList: (id) =>
    http.get(`/wp-json/wp/v2/posts?page=1&per_page=50&categories=${id}`),
};

export default PostsAPI;
