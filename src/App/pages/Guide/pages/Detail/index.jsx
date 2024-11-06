import PostsAPI from "_ezs/api/posts";
import moment from "moment";
import React from "react";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

function GuideDetail() {
  const { slug, cate } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["DetailSlug", slug],
    queryFn: async () => {
      const { data: Post } = await PostsAPI.getPosts(`slug=${slug}`);
      const { data: List } = await PostsAPI.getPosts(
        `id=${Post[0].categories[Post[0].categories.length - 1]}&exclude=${
          Post[0].id
        }&page=1&per_page=6&categories=70`
      );
      return {
        Post: Post[0],
        List,
      };
    },
    enabled: Boolean(slug),
  });

  return (
    <>
      <Helmet>
        <title>
          {isLoading ? "Đang tải ..." : data?.Post?.title?.rendered}
        </title>
      </Helmet>

      <div className="px-3 md:px-8 py-3 md:py-7 h-full overflow-auto">
        <div className="flex 2xl:flex-row flex-col">
          <div className="flex-1 2xl:pr-8">
            {isLoading && (
              <>
                <div className="aspect-video animate-pulse bg-gray-300 rounded-xl"></div>
                <div className="text-2xl font-bold mt-4 animate-pulse">
                  <div className="h-6 bg-gray-300 rounded-full w-80"></div>
                </div>
              </>
            )}
            {!isLoading && (
              <>
                <div>
                  <iframe
                    className="w-full aspect-video rounded-xl"
                    src={`https://www.youtube.com/embed/${data?.Post?.acf?.id_video_youtube}`}
                    allowFullScreen
                  ></iframe>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.Post?.title?.rendered,
                  }}
                  className="text-xl md:text-2xl font-bold mt-4"
                ></div>
              </>
            )}
          </div>
          <div className="w-full 2xl:w-[400px] mt-5 2xl:mt-0 pt-5 2xl:pt-0 border-t 2xl:border-t-0 grid 2xl:grid-cols-1 lg:grid-cols-3 grid-cols-2 gap-5 2xl:gap-0 2xl:block">
            {!isLoading && (
              <>
                {data?.List &&
                  data.List.map((item, index) => (
                    <Link
                      className="cursor-pointer 2xl:flex 2xl:mb-3.5 last:mb-0"
                      to={"/huong-dan/" + cate + "/" + item.slug}
                      key={index}
                    >
                      <div className="2xl:w-[170px]">
                        <LazyLoadImage
                          wrapperClassName="aspect-[84/47] !block"
                          className="aspect-[84/47] h-full object-cover rounded-xl"
                          effect="blur"
                          src={`https://img.youtube.com/vi/${item?.acf?.id_video_youtube}/0.jpg`}
                        />
                      </div>
                      <div className="flex-1 2xl:pl-3 pt-3 2xl:pt-0">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.title?.rendered,
                          }}
                          className="text-[14px] leading-6 font-bold mb-1 line-clamp-2"
                        ></div>
                        <div className="font-medium text-muted text-sm">
                          <span>
                            {moment(item.date).format(
                              "[Đăng lúc ] HH:mm, DD MMM yyyy"
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </>
            )}
            {isLoading &&
              Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    className="animate-pulse 2xl:flex 2xl:mb-3.5 last:mb-0"
                    key={index}
                  >
                    <div className="aspect-[84/47] 2xl:w-[170px] bg-gray-300 rounded-xl"></div>
                    <div className="flex-1 2xl:pl-3 pt-3 2xl:pt-0">
                      <div className="mb-2">
                        <div className="h-4 bg-gray-300 rounded-full w-full"></div>
                        <div className="h-4 bg-gray-300 rounded-full mt-1 w-2/4"></div>
                      </div>
                      <div className="font-medium text-muted text-[13px]">
                        <div className="h-2.5 bg-gray-300 rounded-full w-48 max-w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideDetail;
