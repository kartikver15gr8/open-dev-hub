"use client";

import { getDevProfile } from "@/helper/apis";
import { openModal } from "@/redux/slices/modalSlice";
import { setUserDetails } from "@/redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const session = useSession();
  const getDevProfile = async () => {
    try {
      const res = await axios.get(`/api/user/${session?.data?.user?.email}`);
      dispatch(setUserDetails(res.data));
    } catch (error) {}
  };
  useEffect(() => {
    getDevProfile();
  }, [session]);

  const pathname = usePathname();

  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen mt-20 transition-transform -translate-x-full   md:translate-x-0 ">
        <div className="h-full px-3 pb-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/project"
                className={`rounded-full  flex items-center   px-4 py-2 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15  ${
                  pathname === "/project" ? "text-yellow-300" : "text-gradient"
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-500  transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Project</span>
              </Link>
            </li>

            <li>
              <Link
                href="/project/community"
                className={`rounded-full  flex items-center   px-4 py-2  outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15  ${
                  pathname === "/project/community"
                    ? "text-yellow-300"
                    : "text-gradient"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 primaryspace-nowrap">
                  Community
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/project/devs"
                className={`rounded-full  flex items-center   px-4 py-2 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15  ${
                  pathname === "/project/devs"
                    ? "text-yellow-300"
                    : "text-gradient"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 primaryspace-nowrap">Devs</span>
              </Link>
            </li>

            {session.status === "authenticated" ? (
              <>
                <li>
                  <Link
                    href={`/project/profile/${user?._id}`}
                    className={`rounded-full  flex items-center   px-4 py-2 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15  ${
                      pathname === "/project/profile/:id"
                        ? "text-yellow-300"
                        : "text-gradient"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="flex-1 ms-3 primaryspace-nowrap">
                      {session?.data?.user?.name}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/project/profile/${user?._id}/newproject`}
                    className={`rounded-xl ml-4 w-fit flex items-center border border-border   px-4 py-1 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15  ${
                      pathname === "/project/profile/:id"
                        ? "text-yellow-300"
                        : "text-gradient"
                    }`}
                  >
                    <span className="primaryspace-nowrap">Add Project</span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href={"/login"}
                  className="rounded-xl cursor-pointer text-gradient border-border border   flex items-center   px-4 py-2 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10   hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 flex-1 ms-3 primaryspace-nowrap"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
