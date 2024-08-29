import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import PostsAPI from "../api/posts";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Avatar from "../assets/images/ezslogo.png";
import { JSONSidebar } from "_ezs/utils/SidebarMenuJSON";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

function SidebarPage() {
  const { pathname } = useLocation();
  
  const { data } = useQuery({
    queryKey: ["Taxonomys"],
    queryFn: async () => {
      const { data: ParentList } = await PostsAPI.getTaxonomy("70");
      let result = [];
      for (let item of ParentList) {
        const { data: itemList } = await PostsAPI.getTaxonomy(item.id);
        let obj = {
          ...item,
          children: itemList
            ? itemList.sort(
                (a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri)
              )
            : [],
        };
        result.push(obj);
      }
      return result.sort((a, b) => Number(a.acf.vi_tri) - Number(b.acf.vi_tri));
    },
  });

  const isOpen = (children) => {
    if (!children || children.length === 0) return;
    let index = children.findIndex((x) => pathname.includes(x.slug));
    return index > -1;
  };

  return (
    <>
      <div
        className={clsx(
          "h-full flex flex-col transition-transform absolute z-50 bg-white md:relative -translate-x-full md:!translate-x-0 group-[.is-sidebar]:translate-x-0"
        )}
      >
        <PerfectScrollbar
          options={perfectScrollbarOptions}
          className="grow overflow-hidden relative border-r"
        >
          <div className="flex flex-col items-center p-5 border-b">
            <div>
              <img className="rounded-full w-[75px]" src={Avatar} alt="EZS.VN" />
            </div>
            <div className="uppercase font-bold text-sm mt-4">Admin System</div>
            <div className="text-xs text-center text-danger font-medium mt-1">
              <div>EZS Hà Nội</div>
              <div className="flex items-end">
                Administrator <ChevronDownIcon className="w-3 ml-1.5" />
              </div>
            </div>
          </div>
          <Sidebar
            width="200px"
            backgroundColor="#f7f9fa"
            className="!border-r-0"
          >
            <Menu
              renderExpandIcon={({ open }) => (
                <div>
                  <ChevronRightIcon
                    className={clsx("w-4 transition", open && "rotate-90")}
                  />
                </div>
              )}
              menuItemStyles={{
                button: ({ level }) => {
                  if (level === 1)
                    return {
                      paddingLeft: "30px",
                      height: "42px",
                      [`&.ps-active`]: {
                        background: "#1BC5BD",
                        color: "#fff",
                      },
                    };
                },
              }}
            >
              {data &&
                data.map((item, index) => (
                  <SubMenu
                    label={
                      <div
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      ></div>
                    }
                    key={index}
                    className="border-b text-sm uppercase font-bold"
                    defaultOpen={isOpen(item.children)}
                    active={isOpen(item.children)}
                  >
                    {item.children &&
                      item.children.map((sub, i) => (
                        <MenuItem
                          component={<Link to={`huong-dan/${sub.slug}`} />}
                          key={i}
                          className="border-t normal-case text-gray-700 font-semibold"
                          active={pathname.includes(sub.slug)}
                        >
                          {
                            <div
                              dangerouslySetInnerHTML={{ __html: sub.name }}
                            ></div>
                          }
                        </MenuItem>
                      ))}
                  </SubMenu>
                ))}
            </Menu>
          </Sidebar>
        </PerfectScrollbar>
      </div>
      {/* <div
        className="fixed z-10 w-full h-full top-0 left bg-black/[.2] md:hidden"
      ></div> */}
    </>
  );
}

export default SidebarPage;
