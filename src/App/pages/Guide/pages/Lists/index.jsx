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
import { useEffect, useRef, useState } from "react";
import { formatArray } from "_ezs/utils/formatArray";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useQueryParams from "_ezs/hooks/useQueryParams";
import { clsx } from "clsx";
import ModalVideo from "../../components/ModalVideo";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const ItemRender = ({ item }) => {
  let refMobile = useRef();
  let refDesktop = useRef();

  return (
    <>
      <div
        className="block p-4 transition-all border rounded shadow cursor-pointer hover:text-primary hover:border-primary min-h-[169px]"
        onClick={() => {
          if (item?.acf?.app_id_video_youtube && item?.acf?.id_video_youtube) {
            Swal.fire({
              title: "Bạn đang thao tác trên ?",
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokewidth="{1.5}"
  stroke="currentColor"
  classname="size-6"
>
  <path
    strokelinecap="round"
    strokelinejoin="round"
    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
  />
</svg>
App điện thoại`,
              denyButtonText: `
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokewidth="{1.5}"
  stroke="currentColor"
  classname="size-6"
>
  <path
    strokelinecap="round"
    strokelinejoin="round"
    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
  />
</svg>

              PC - Máy tính
            `,
              cancelButtonText: "Đóng",
              customClass: {
                confirmButton: "bg-success",
                denyButton: "bg-primary",
                cancelButton: "bg-[#999]",
              },
            }).then((result) => {
              if (result.isConfirmed) {
                refMobile?.current?.click();
              } else if (result.isDenied) {
                refDesktop?.current?.click();
              }
            });
          } else if (item?.acf?.app_id_video_youtube) {
            refMobile?.current?.click();
          } else if (item?.acf?.id_video_youtube) {
            refDesktop?.current?.click();
          }
        }}
      >
        <div>
          <div className="relative mb-2">
            <div className="absolute left-0 top-px">
              <PlayCircleIcon className="w-6 text-danger" />
            </div>
            <div
              style={{
                textIndent: "28px",
              }}
              dangerouslySetInnerHTML={{
                __html: item?.title?.rendered,
              }}
              className="text-[15px] leading-[24px] line-clamp-2 min-h-[48px]"
            ></div>
          </div>
          <div
            className="text-muted text-[14px] font-light leading-6"
            dangerouslySetInnerHTML={{
              __html: item?.excerpt?.rendered,
            }}
          ></div>
        </div>
      </div>
      {item?.acf?.app_id_video_youtube && (
        <ModalVideo Src={item?.acf?.app_id_video_youtube}>
          {({ open }) => <div ref={refMobile} onClick={open}></div>}
        </ModalVideo>
      )}
      {item?.acf?.id_video_youtube && (
        <ModalVideo Src={item?.acf?.id_video_youtube}>
          {({ open }) => <div ref={refDesktop} onClick={open}></div>}
        </ModalVideo>
      )}
    </>
  );
};

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

  // const Posts = useQuery({
  //   queryKey: [
  //     "TaxonomysPostsTOP",
  //     {
  //       slug,
  //       queryParams,
  //       pathname,
  //       id: TaxonomyInfo?.id,
  //     },
  //   ],
  //   queryFn: async () => {
  //     const { data } = await PostsAPI.getPosts(
  //       `page=1&per_page=100&categories=${TaxonomyInfo?.id}`
  //     );
  //     return data;
  //   },
  //   enabled: Boolean(slug && TaxonomyInfo),
  // });

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

  const { data, isLoading } = useQuery({
    queryKey: ["TaxonomysList", { id: TaxonomyInfo?.id, queryParams }],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await PostsAPI.getPosts(
        `page=${pageParam}&per_page=100&categories=${
          queryParams.tag ? queryParams.tag : TaxonomyInfo?.id
        }`
      );
      let newData = [];
      if (data && data.length > 0) {
        for (let item of data) {
          let TitleGroup = item?.acf?.group_title || "Chưa xác định";
          let index = newData.findIndex((x) => x.TitleGroup === TitleGroup);
          if (index > -1) {
            newData[index].Items.push(item);
          } else {
            newData.push({
              Items: [item],
              TitleGroup: TitleGroup,
              Index: TitleGroup === "Chưa xác định" ? 1 : 0,
            });
          }
        }
      }

      return newData
        .map((x) => ({
          ...x,
          Items:
            x.Items && x.Items.length > 0
              ? x.Items.sort((a, b) => a?.acf?.vi_tri - b?.acf?.vi_tri)
              : null,
        }))
        .sort((a, b) => a?.Index - b?.Index);
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.Pi === lastPage.Totalpages ? undefined : lastPage.Pi + 1;
    },
    enabled: Boolean(TaxonomyInfo?.id),
  });

  // useEffect(() => {
  //   if (Posts?.data && Posts?.data.length > 0) {
  //     let newQuicks = Posts?.data.filter((x) => x.acf.status);
  //     if (newQuicks.length > 0) {
  //       setQuicks(newQuicks);
  //     } else {
  //       setQuicks([]);
  //     }
  //   } else {
  //     setQuicks([]);
  //   }
  // }, [Posts?.data]);

  return (
    <>
      <Helmet>
        <title>
          {Taxonomy?.isLoading
            ? "Đang tải ..."
            : TaxonomyInfo?.name || "Không tìm thấy"}
        </title>
      </Helmet>

      <div className="w-full h-full px-3 py-3 overflow-auto md:px-8 md:py-7">
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
        <div className="flex flex-col w-full">
          {isLoading && (
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
              {Array(15)
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
            </div>
          )}

          <div>
            {!isLoading && (
              <>
                {data &&
                  data.map((group, idx) => (
                    <div className="mt-6" key={idx}>
                      {group.TitleGroup !== "Chưa xác định" && (
                        <div className="flex mb-4">
                          <div className="text-lg font-medium text-[#0087dd]">{idx + 1}. {group.TitleGroup}</div>
                        </div>
                      )}

                      {group.Items.length > 0 && (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
                          {group.Items.map((item, index) => (
                            <div key={index}>
                              <ItemRender item={item} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </>
            )}
          </div>

          {/* {Quicks && Quicks.length > 0 && (
            <div className="h-full overflow-auto lg:w-[400px] lg:min-w-[400px] mt-6">
              <div className="pb-3.5 mb-3.5 border-b">
                {Quicks.filter((x) => x.acf.status === "2")
                  .sort((a, b) => a.acf.vi_tri - b.acf.vi_tri)
                  .map((item, index) => (
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
                  ))}
              </div>
              <div>
                <div className="flex text-[14px] leading-[23px] font-semibold uppercase mb-3">
                  <QuestionMarkCircleIcon className="w-6 mr-1.5" />
                  Tình huống
                </div>
                <div>
                  {Quicks.filter((x) => x.acf.status === "3")
                    .sort((a, b) => a.acf.vi_tri - b.acf.vi_tri)
                    .map((item, index) => (
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
                    ))}
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
      {/* {queryParams.id &&
        createPortal(
          <AnimatePresence>
            <PickerVideo />
          </AnimatePresence>,
          document.body
        )} */}
    </>
  );
}

export default GuideLists;
