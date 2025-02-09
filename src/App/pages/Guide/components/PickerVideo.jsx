import React, { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import useQueryParams from "_ezs/hooks/useQueryParams";
import { useQuery } from "react-query";
import PostsAPI from "_ezs/api/posts";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { isNil, omitBy } from "lodash-es";
import { CopyToClipboard } from "react-copy-to-clipboard";

function PickerVideo(props) {
  const queryParams = useQueryParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["DetailId", queryParams.id],
    queryFn: async () => {
      const { data: Post } = await PostsAPI.getPostsId(`${queryParams.id}`);
      return Post;
    },
    enabled: Boolean(queryParams.id),
  });

  useEffect(() => {
    if (queryParams.app) {
      setActive(1);
    }
  }, [queryParams]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1000] bg-black/[.2] overflow-auto">
      <div
        className="absolute inset-0 z-[10]"
        onClick={() => {
          navigate({
            pathname: pathname,
            search: createSearchParams(
              omitBy(
                {
                  tag: queryParams.tag,
                },
                isNil
              )
            ).toString(),
          });
        }}
      ></div>
      <div className="absolute z-20 bg-white rounded shadow-lg top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-w-[1000px] w-full overflow-hidden">
        <div className="flex items-center justify-between px-4 py-5 border-b">
          <div
            className="flex-1 text-base font-semibold uppercase"
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
          ></div>
          <div
            className="flex items-center justify-center w-12 h-full cursor-pointer"
            onClick={() => {
              navigate({
                pathname: pathname,
                search: createSearchParams(
                  omitBy(
                    {
                      tag: queryParams.tag,
                    },
                    isNil
                  )
                ).toString(),
              });
            }}
          >
            <XMarkIcon className="w-8" />
          </div>
        </div>
        <div className="p-4">
          {data?.acf?.id_video_youtube && data?.acf?.app_id_video_youtube && (
            <div className="flex gap-3 mb-4">
              <div
                className={clsx(
                  "border cursor-pointer rounded font-semibold transition",
                  active === 0 && "border-primary text-primary"
                )}
                onClick={() => {
                  setActive(0);
                  navigate({
                    pathname: pathname,
                    search: createSearchParams(
                      omitBy(
                        {
                          tag: queryParams.tag,
                          id: queryParams.id,
                        },
                        isNil
                      )
                    ).toString(),
                  });
                }}
              >
                <CopyToClipboard
                  text={
                    window.location.origin +
                    pathname +
                    "?" +
                    createSearchParams(
                      omitBy(
                        {
                          tag: queryParams.tag,
                          id: queryParams.id,
                        },
                        isNil
                      )
                    ).toString()
                  }
                >
                  <div className="px-4 py-3.5">Video Pos Web</div>
                </CopyToClipboard>
              </div>
              {data?.acf?.app_id_video_youtube && (
                <div
                  className={clsx(
                    "border cursor-pointer rounded font-semibold transition",
                    active === 1 && "border-primary text-primary"
                  )}
                  onClick={() => {
                    setActive(1);
                    navigate({
                      pathname: pathname,
                      search: createSearchParams(
                        omitBy(
                          {
                            tag: queryParams.tag,
                            id: queryParams.id,
                            app: 1,
                          },
                          isNil
                        )
                      ).toString(),
                    });
                  }}
                >
                  <CopyToClipboard
                    text={
                      window.location.origin +
                      pathname +
                      "?" +
                      createSearchParams(
                        omitBy(
                          {
                            tag: queryParams.tag,
                            id: queryParams.id,
                            app: 1,
                          },
                          isNil
                        )
                      ).toString()
                    }
                  >
                    <div className="px-4 py-3.5">Video Pos App</div>
                  </CopyToClipboard>
                </div>
              )}
            </div>
          )}
          <div>
            {active === 0 && (
              <div>
                <iframe
                  className="w-full rounded aspect-video"
                  src={`https://www.youtube.com/embed/${data?.acf?.id_video_youtube}`}
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {active === 1 && (
              <div>
                <iframe
                  className="w-full rounded aspect-video"
                  src={`https://www.youtube.com/embed/${data?.acf?.app_id_video_youtube}`}
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickerVideo;
