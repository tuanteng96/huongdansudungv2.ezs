import { Combobox } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PostsAPI from "_ezs/api/posts";
import { useLayout } from "_ezs/layout";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function HeaderPage() {
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const { openSidebar } = useLayout();

  const elRef = useRef();

  const { pathname, search } = useLocation();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (elRef.current && !elRef?.current?.contains(event.target)) {
        setIsFocus(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elRef]);

  const { data, isLoading } = useQuery({
    queryKey: ["DetailSlug", query],
    queryFn: async () => {
      const { data } = await PostsAPI.getPosts(
        `search=${query}&categories=70&_embed=wp:term`
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
    setIsFocus(false);
    //setQuery("");
    setValue(e?.title?.rendered);
    navigate(toLink(e));
  };

  const arrTop = [
    {
      Title: "Chấm công",
      Href: "/huong-dan/cong-ca?tag=150",
    },
    {
      Title: "Bán hàng / tích thẻ",
      Href: "/huong-dan/pos-quan-ly",
    },
    {
      Title: "Nhập xuất kho",
      Href: "/huong-dan/kho-hang-ton-kho-hang-ton",
    },
    {
      Title: "Xem báo cáo",
      Href: "/huong-dan/tong-quan",
    },
    {
      Title: "Quản lý SP/DV",
      Href: "/huong-dan/cai-dat-quan-ly-sp-dv",
    },
    {
      Title: "Khuyến mại",
      Href: "/huong-dan/khuyen-mai",
    },
    {
      Title: "Voucher",
      Href: "/huong-dan/voucher-coupon",
    },
  ];

  return (
    <div className="h-[62px] border-b flex relative z-10">
      <div className="w-[200px] md:block hidden">
        <Link className="flex items-center justify-center h-full" to="/">
          <img
            className="w-[70px]"
            src="https://cserbeauty.com/admin/themes/images/logo_ezs.png"
            alt=""
          />
        </Link>
      </div>
      <div
        className="flex items-center justify-center w-16 border-r md:hidden"
        onClick={openSidebar}
      >
        <Bars4Icon className="w-7" />
      </div>
      <div className="relative flex-1 pl-5 pr-5 lg:pl-0">
        <div className="relative flex items-center h-full">
          <div
            className={clsx(
              "border flex rounded-3xl h-12 w-full transition relative",
              isFocus && "border-primary",
              isFocus ? "max-w-[600px]" : "lg:max-w-[200px]"
            )}
            ref={elRef}
          >
            <div className="flex-1 h-full">
              {/* <Combobox value={value?.title?.rendered}>
                <Combobox.Input
                  ref={elRef}
                  className="w-full h-full pl-5 text-base border-0 outline-none rounded-l-3xl"
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                  placeholder="Bạn cần gì ?"
                  onFocus={() => {
                    setIsFocus(true);
                  }}
                  onBlur={() => {
                    //setIsFocus(false);
                  }}
                  onKeyUp={(e) => {
                    if (e.key === "Enter" || e.keyCode === 13) {
                      console.log(e);
                      setIsFocus(true);
                    }
                  }}
                />
                {isFocus && (
                  <Combobox.Options className="bg-white shadow-3xl rounded-2xl mt-2 py-3 max-h-[300px] overflow-auto z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded">
                    adad
                    {isLoading && (
                      <div className="px-5 py-1 font-semibold md:text-[14px] text-sm">
                        Đang tìm kiếm ...
                      </div>
                    )}
                    {!isLoading && (
                      <>
                        {data &&
                          data.map((item, index) => (
                            <Combobox.Option
                              key={index}
                              value={item}
                              onMouseDown={() => onClick(item)}
                            >
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
                )}
              </Combobox> */}
              <input
                placeholder="Bạn cần tìm ?"
                type="text"
                value={query}
                className="w-full h-full pl-5 text-base border-0 outline-none rounded-l-3xl"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                onFocus={() => {
                  setIsFocus(true);
                }}
              />
              {isFocus && (
                <div className="bg-white shadow-3xl rounded-2xl mt-2 py-3 max-h-[300px] overflow-auto z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded">
                  {isLoading && (
                    <div className="px-5 py-1 font-semibold md:text-[14px] text-sm">
                      Đang tìm kiếm ...
                    </div>
                  )}
                  {!isLoading && (
                    <>
                      {data &&
                        data.map((item, index) => (
                          <div
                            key={index}
                            value={item}
                            onMouseDown={() => onClick(item)}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.title?.rendered,
                              }}
                              className="md:text-[14px] text-sm leading-6 font-bold px-5 py-2 cursor-pointer hover:text-primary transition"
                            ></div>
                          </div>
                        ))}
                      {(!data || data.length === 0) && (
                        <div className="px-5 py-1 font-semibold md:text-[14px] text-sm">
                          Không tìm thấy.
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="bg-[#F3F6F9] rounded-r-3xl w-[50px] md:w-[70px] border-l cursor-pointer flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 md:w-6" />
            </div>
          </div>
          {!isFocus && (
            <div className="justify-end flex-1 gap-2.5 hidden lg:flex">
              {arrTop &&
                arrTop.map((item, index) => (
                  <NavLink
                    className={({ isActive }) => {
                      return clsx(
                        "h-[40px] flex items-center justify-center bg-[#f5f5f9] text-[#6c7293] font-medium px-3.5 rounded hover:text-primary transition-colors",
                        isActive && "!text-primary"
                      );
                    }}
                    to={item.Href}
                    key={index}
                  >
                    {item.Title}
                  </NavLink>
                ))}
            </div>
          )}
          <div className="flex-wrap flex-1 gap-x-2.5 hidden">
            {arrTop &&
              arrTop.map((item, index) => (
                <NavLink
                  className={({ isActive }) => {
                    return clsx(
                      "text-[#6c7293] hover:text-primary transition-colors",
                      isActive && "!text-primary"
                    );
                  }}
                  to={item.Href}
                  key={index}
                >
                  {item.Title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
