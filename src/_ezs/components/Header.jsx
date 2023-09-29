import { Combobox } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PostsAPI from "_ezs/api/posts";
import { useLayout } from "_ezs/layout";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HeaderPage() {
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const { openSidebar } = useLayout();

  const { data, isLoading } = useQuery({
    queryKey: ["DetailSlug", query],
    queryFn: async () => {
      const { data } = await PostsAPI.getPosts(
        `?search=adadadad&categories=70&_embed=wp:term`
      );
      return data;
    },
    enabled: Boolean(query),
  });

  const toLink = (item) => {
    if (item._embedded["wp:term"][0]) {
      return (
        "/huong-dan/" +
        item._embedded["wp:term"][0][item._embedded["wp:term"][0].length - 1]
          .slug +
        "/" +
        item.slug
      );
    }
  };

  const onClick = (e) => {
    setValue(e?.title?.rendered);
    navigate(toLink(e));
  };

  return (
    <div className="h-[62px] border-b flex relative z-10">
      <div className="w-[200px] md:block hidden">
        <Link className="flex items-center justify-center h-full" to="/">
          <img
            className="w-[70px]"
            src="https://cser.vn/admin/themes/images/logo_ezs.png"
            alt=""
          />
        </Link>
      </div>
      <div
        className="md:hidden w-16 flex items-center justify-center border-r"
        onClick={openSidebar}
      >
        <Bars4Icon className="w-7" />
      </div>
      <div className="relative flex-1 px-5">
        <div className="h-full relative flex items-center justify-center">
          <div
            className={clsx(
              "border flex rounded-3xl h-12 w-full max-w-[700px] transition relative",
              isFocus && "border-primary"
            )}
          >
            <div className="h-full flex-1">
              <Combobox value={value?.title?.rendered} onChange={onClick}>
                <Combobox.Input
                  className="w-full h-full border-0 outline-none text-base rounded-l-3xl pl-5"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Bạn cần gì ?"
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                />
                <Combobox.Options className="bg-white shadow-3xl rounded-2xl mt-2 py-3 max-h-[300px] overflow-auto z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded">
                  {isLoading && (
                    <div className="px-5 py-1 font-semibold md:text-[14px] text-sm">
                      Đang tìm kiếm ...
                    </div>
                  )}
                  {!isLoading && (
                    <>
                      {data &&
                        data.map((item, index) => (
                          <Combobox.Option key={index} value={item}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.title?.rendered,
                              }}
                              className="md:text-[14px] text-sm leading-6 font-bold px-5 py-2 cursor-pointer hover:text-primary transition"
                            ></div>
                          </Combobox.Option>
                        ))}
                      {(!data || data.length === 0) && (
                        <div className="px-5 py-1 font-semibold md:text-[14px] text-sm">
                          Không tìm thấy.
                        </div>
                      )}
                    </>
                  )}
                </Combobox.Options>
              </Combobox>
            </div>
            <div className="bg-[#F3F6F9] rounded-r-3xl w-[50px] md:w-[70px] border-l cursor-pointer flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 md:w-6" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HeaderPage;
