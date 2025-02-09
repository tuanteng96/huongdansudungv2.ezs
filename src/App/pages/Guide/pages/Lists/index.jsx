import PostsAPI from "_ezs/api/posts";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInfiniteQuery, useQuery } from "react-query";
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { formatArray } from "_ezs/utils/formatArray";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useQueryParams from "_ezs/hooks/useQueryParams";
import { clsx } from "clsx";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";
import PickerVideo from "../../components/PickerVideo";
import { AnimatePresence } from "framer-motion";
import { isNil, omitBy } from "lodash-es";

function GuideLists() {
  const [TaxonomyInfo, setTaxonomyInfo] = useState();
  const [Quicks, setQuicks] = useState([]);
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

  const Posts = useQuery({
    queryKey: [
      "TaxonomysPostsTOP",
      {
        slug,
        queryParams,
        pathname,
        id: TaxonomyInfo?.id,
      },
    ],
    queryFn: async () => {
      const { data } = await PostsAPI.getPosts(
        `page=1&per_page=100&categories=${TaxonomyInfo?.id}`
      );
      return data;
    },
    enabled: Boolean(slug && TaxonomyInfo),
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
    onSuccess: (data) => {
      if (!queryParams.id) {
        if (data && data.length > 0) {
          navigate({
            pathname: pathname,
            search: createSearchParams({
              tag: data[0].id,
            }).toString(),
          });
        } else {
          navigate({
            pathname: pathname,
          });
        }
      }
    },
  });

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["TaxonomysList", { id: TaxonomyInfo?.id, queryParams }],
    queryFn: async ({ pageParam = 1 }) => {
      const { data, Totalpages } = await PostsAPI.getPosts(
        `page=${pageParam}&per_page=100&categories=${
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

  useEffect(() => {
    if (Posts?.data && Posts?.data.length > 0) {
      let newQuicks = Posts?.data.filter((x) => x.acf.status);
      if (newQuicks.length > 0) {
        setQuicks(newQuicks);
      } else {
        setQuicks([]);
      }
    } else {
      setQuicks([]);
    }
  }, [Posts?.data]);

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
        className="w-full h-full px-3 py-3 overflow-auto md:px-8 md:py-7"
        ref={rootRef}
      >
        <div>
          <div className="flex text-xl font-bold md:text-2xl">
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
                <div className="w-48 bg-gray-300 rounded-full h-7"></div>
              </div>
            )}
          </div>
          {Tags?.data && Tags?.data.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-3">
              {/* <div
                className={clsx(
                  "border px-3.5 py-2 cursor-pointer rounded font-semibold transition",
                  !queryParams?.tag && "border-primary text-primary"
                )}
                onClick={() => navigate(pathname)}
              >
                {Quicks && Quicks.length > 0 ? "Hướng dẫn nhanh" : "Tất cả"}
              </div> */}
              {Tags?.data &&
                Tags.data.map((tag, index) => (
                  <div
                    className={clsx(
                      "border px-3.5 py-2 cursor-pointer rounded font-semibold transition",
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
        <div className="flex flex-col w-full gap-4 lg:gap-10 lg:flex-row">
          {Quicks && Quicks.length > 0 && (
            <div className="h-full overflow-auto lg:w-[320px] lg:min-w-[320px] mt-6">
              <div className="pb-3.5 mb-3.5 border-b">
                {Quicks.filter((x) => x.acf.status === "1").map(
                  (item, index) => (
                    <div className="mb-3 last:mb-0" key={index}>
                      <div
                        className="cursor-pointer group"
                        onClick={() => {
                          navigate({
                            pathname: pathname,
                            search: createSearchParams(
                              omitBy(
                                {
                                  tag: queryParams.tag,
                                  id: item.id,
                                },
                                isNil
                              )
                            ).toString(),
                          });
                        }}
                      >
                        <div
                          className="text-[14px] leading-[23px] font-semibold uppercase mb-1 text-gray-800"
                          dangerouslySetInnerHTML={{
                            __html: item?.title?.rendered,
                          }}
                        ></div>
                        <div className="flex items-center text-[14px] leading-6 text-muted">
                          Chi tiết hướng dẫn
                          <ChevronDoubleRightIcon className="w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex text-[14px] leading-[23px] font-semibold uppercase mb-3">
                  <QuestionMarkCircleIcon className="w-6 mr-1.5" />
                  Tình huống
                </div>
                <div>
                  {Quicks.filter((x) => x.acf.status === "2").map(
                    (item, index) => (
                      <div
                        key={index}
                        className="text-[14px] leading-6 text-muted hover:text-primary transition mb-3 last:mb-0 block cursor-pointer"
                        onClick={() => {
                          navigate({
                            pathname: pathname,
                            search: createSearchParams(
                              omitBy(
                                {
                                  tag: queryParams.tag,
                                  id: item.id,
                                },
                                isNil
                              )
                            ).toString(),
                          });
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item?.title?.rendered,
                        }}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
              {isLoading &&
                Array(15)
                  .fill()
                  .map((_, index) => (
                    <div className="animate-pulse" key={index}>
                      <div className="aspect-[180/101] bg-gray-300 rounded-xl"></div>
                      <div className="pt-3">
                        <div className="mb-2">
                          <div className="w-full h-4 bg-gray-300 rounded-full"></div>
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
                      <div
                        className="block cursor-pointer"
                        key={index}
                        ref={sentryRef}
                        onClick={() => {
                          navigate({
                            pathname: pathname,
                            search: createSearchParams(
                              omitBy(
                                {
                                  tag: queryParams.tag,
                                  id: item.id,
                                },
                                isNil
                              )
                            ).toString(),
                          });
                        }}
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
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {queryParams.id &&
        createPortal(
          <AnimatePresence>
            <PickerVideo />
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default GuideLists;
