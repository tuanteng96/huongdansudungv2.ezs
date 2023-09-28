import PostsAPI from "_ezs/api/posts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function GuideLists() {
  const { slug } = useParams();
  const { data } = useQuery({
    queryKey: ["TaxonomysList", slug],
    queryFn: async () => {
      const { data: Taxonomy } = await PostsAPI.getTaxonomySlug(slug);
      const { data: List } = await PostsAPI.getPostList(Taxonomy[0].id);
      return {
        Taxonomy: Taxonomy[0],
        List,
      };
    },
    enabled: Boolean(slug),
  });

  return (
    <div className="px-8 pt-8">
      <div className="mb-6 text-2xl font-bold flex">
        <svg
          className="w-6 mr-1"
          viewBox="0 0 24 24"
          focusable="false"
          style={{
            pointerEvents: "none",
            display: "block",
          }}
        >
          <g>
            <path
              d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
              fill="red"
            />
            <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff" />
          </g>
        </svg>

        {data?.Taxonomy?.name}
      </div>
      <div className="grid grid-cols-5 gap-5">
        {data?.List &&
          data?.List.map((item, index) => (
            <div className="cursor-pointer" key={index}>
              <div>
                <img
                  className="aspect-[180/101] h-full object-cover rounded-xl"
                  src={`https://img.youtube.com/vi/${item?.acf?.id_video_youtube}/0.jpg`}
                  alt={item}
                />
              </div>
              <div className="pt-3">
                <div
                  dangerouslySetInnerHTML={{ __html: item?.title?.rendered }}
                  className="text-[15px] leading-6 font-bold mb-1"
                ></div>
                <div className="font-medium text-muted text-[13px]">
                  <span>{data?.Taxonomy?.name}</span>
                  <span className="px-1">•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GuideLists;
