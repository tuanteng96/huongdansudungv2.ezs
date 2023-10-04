import PostsAPI from "_ezs/api/posts";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInfiniteQuery, useQuery } from "react-query";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { formatArray } from "_ezs/utils/formatArray";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useQueryParams from "_ezs/hooks/useQueryParams";
import { clsx } from "clsx";

function GuideLists() {
  const [TaxonomyInfo, setTaxonomyInfo] = useState();
  const { slug } = useParams();
  const queryParams = useQueryParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const Taxonomy = useQuery({
    queryKey: ["TaxonomysInfo", slug],
    queryFn: async () => {
      const { data } = await PostsAPI.getTaxonomySlug(slug);
      return data && data.length > 0 ? data[0] : null;
    },
    enabled: Boolean(slug),
    onSuccess: (data) => {
      setTaxonomyInfo(data);
    },
  });

  const Tags = useQuery({
    queryKey: ["TaxonomyTags", TaxonomyInfo?.id],
    queryFn: async () => {
      const { data } = await PostsAPI.getCategories(
        `parent=${TaxonomyInfo?.id}&per_page=50`
      );
      return data
        ? data.sort((a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri))
        : [];
    },
    enabled: Boolean(TaxonomyInfo?.id),
  });

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["TaxonomysList", { id: TaxonomyInfo?.id, queryParams }],
    queryFn: async ({ pageParam = 1 }) => {
      const { data, Totalpages } = await PostsAPI.getPosts(
        `page=${pageParam}&per_page=20&categories=${
          queryParams.tag ? queryParams.tag : TaxonomyInfo?.id
        }`
      );
      return {
        data: data,
        Pi: pageParam,
        Totalpages,
      };
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.Pi === lastPage.Totalpages ? undefined : lastPage.Pi + 1;
    },
    enabled: Boolean(TaxonomyInfo?.id),
  });

  const Lists = formatArray.useInfiniteQuery(data?.pages);

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasNextPage,
    onLoadMore: fetchNextPage,
    //disabled: !!error,
  });
  return (
    <>
      <Helmet>
        <title>
          {Taxonomy?.isLoading
            ? "Đang tải ..."
            : TaxonomyInfo?.name || "Không tìm thấy"}
        </title>
      </Helmet>
      <div
        className="px-3 md:px-8 py-3 md:py-7 h-full overflow-auto"
        ref={rootRef}
      >
        <div className="mb-6">
          <div className="text-xl md:text-2xl font-bold flex">
            {!Taxonomy?.isLoading && (
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
                  dangerouslySetInnerHTML={{ __html: TaxonomyInfo?.name }}
                ></span>
              </>
            )}
            {Taxonomy?.isLoading && (
              <div className="animate-pulse">
                <div className="bg-gray-300 rounded-full w-48 h-7"></div>
              </div>
            )}
          </div>
          {Tags?.data && Tags?.data.length > 0 && (
            <div className="flex flex-wrap mt-3">
              <div
                className={clsx(
                  "border mr-3 px-3.5 py-2 cursor-pointer rounded font-semibold transition mb-2",
                  !queryParams?.tag && "border-primary text-primary"
                )}
                onClick={() => navigate(pathname)}
              >
                Tất cả
              </div>
              {Tags?.data &&
                Tags.data.map((tag, index) => (
                  <div
                    className={clsx(
                      "border mr-3 px-3.5 py-2 cursor-pointer rounded font-semibold transition mb-2",
                      Number(queryParams?.tag) === tag.id &&
                        "border-primary text-primary"
                    )}
                    key={index}
                    onClick={() => navigate(`${pathname}?tag=${tag.id}`)}
                  >
                    <div dangerouslySetInnerHTML={{ __html: tag?.name }}></div>
                  </div>
                ))}
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
              {Lists &&
                Lists.map((item, index) => (
                  <Link
                    className="cursor-pointer block"
                    to={item.slug}
                    key={index}
                    ref={sentryRef}
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
