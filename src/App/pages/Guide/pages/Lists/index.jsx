import PostsAPI from "_ezs/api/posts";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";

function GuideLists() {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
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
    <>
      <Helmet>
        <title>{isLoading ? "Đang tải ..." : data?.Taxonomy?.name}</title>
      </Helmet>
      <div className="px-3 md:px-8 py-3 md:py-7 h-full overflow-auto">
        <div className="flex mb-6 text-xl md:text-2xl font-bold">
          {!isLoading && (
            <>
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
                  <polygon
                    points="10 14.65 15 12 10 9.35 10 14.65"
                    fill="#fff"
                  />
                </g>
              </svg>
              <span
                dangerouslySetInnerHTML={{ __html: data?.Taxonomy?.name }}
              ></span>
            </>
          )}
          {isLoading && (
            <div className="animate-pulse">
              <div className="bg-gray-300 rounded-full w-48 h-7"></div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-5">
          {isLoading &&
            Array(15)
              .fill()
              .map((_, index) => (
                <div className="animate-pulse" key={index}>
                  <div className="aspect-[180/101] bg-gray-300 rounded-xl"></div>
                  <div className="pt-3">
                    <div className="mb-2">
                      <div className="h-4 bg-gray-300 rounded-full w-full"></div>
                    </div>
                    <div className="font-medium text-muted text-[13px]">
                      <div className="h-2.5 bg-gray-300 rounded-full w-48"></div>
                    </div>
                  </div>
                </div>
              ))}
          {!isLoading && (
            <>
              {data?.List &&
                data?.List.map((item, index) => (
                  <Link
                    className="cursor-pointer block"
                    to={item.slug}
                    key={index}
                  >
                    <div className="aspect-[180/101]">
                      <LazyLoadImage
                        wrapperClassName="aspect-[180/101] !block"
                        className="aspect-[180/101] h-full object-cover rounded-xl"
                        effect="blur"
                        src={`https://img.youtube.com/vi/${item?.acf?.id_video_youtube}/0.jpg`}
                      />
                    </div>
                    <div className="pt-3">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.title?.rendered,
                        }}
                        className="text-[15px] leading-6 font-bold mb-1 line-clamp-2"
                      ></div>
                      <div className="font-medium text-muted text-[13px]">
                        <span>
                          {moment(item.date).format(
                            "[Đăng lúc ] HH:mm, [Ngày] DD MMM yyyy"
                          )}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default GuideLists;
