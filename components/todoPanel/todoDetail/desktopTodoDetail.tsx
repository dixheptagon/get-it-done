"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Overlay } from "@/components/ui/overlay";
import { formatShortDate } from "@/lib/dateFormatter";
import { formatDisplayUrl } from "@/lib/linkFormatter";
import { deleteTodo, toggleTodoDone, useTodoStore } from "@/store/useTodoStore";
import { closeTodoDetail, useTodoUIStore } from "@/store/useTodoUIStore";
import clsx from "clsx";
import Link from "next/link";
import { FaRegClock, FaUndo } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { IoClose, IoLinkSharp, IoTrashOutline } from "react-icons/io5";
import { MdOutlineCalendarToday, MdOutlineModeEdit } from "react-icons/md";
import { PiWarningOctagonFill } from "react-icons/pi";

const DesktopTodoDetail = () => {
  const isTodoDetailPanelOpen = useTodoUIStore(
    (state) => state.isTodoDetailPanelOpen,
  );

  const selectedTodoid = useTodoUIStore((state) => state.selectedTodoId);

  const selectedTodo = useTodoStore((state) =>
    state.todos.find((todo) => todo.id === selectedTodoid),
  );

  const {
    id,
    title,
    isImportant,
    description,
    startTime,
    endTime,
    date,
    attachmentLink,
    isDone,
  } = selectedTodo || {};

  return (
    <main>
      <Overlay
        isOpen={isTodoDetailPanelOpen}
        onClose={() => closeTodoDetail()}
      />

      <div
        className={clsx(
          "bg-primary-0 fixed top-0 right-0 z-100 h-screen w-[56vh] overflow-y-auto",
          "px-8 py-4 transition-all duration-300",
          "[&::-webkit-scrollbar-thumb]:bg-primary-300 resize-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-track]:bg-transparent",
          "flex flex-col",
          isTodoDetailPanelOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0",
        )}
      >
        <div className="flex items-center gap-2">
          {isDone && (
            <p className="font-jetbrains-mono bg-primary-800 text-primary-0 w-fit p-1 text-xs uppercase">
              DONE
            </p>
          )}

          {isImportant && (
            <>
              <p className="font-jetbrains-mono bg-primary-800 text-primary-0 w-fit p-1 text-xs uppercase">
                Urgent
              </p>
            </>
          )}
        </div>

        <p className="text-primary-800 pr-5 text-2xl font-bold">{title}</p>

        <div className="border-primary-200 -mx-8 my-6 border-b-2" />

        <button
          className="absolute top-2 right-5 z-10 rounded-md p-2 transition-colors hover:bg-neutral-100"
          onClick={() => closeTodoDetail()}
        >
          <IoClose className="h-8 w-8" />
        </button>

        <div className="grid grid-cols-2 gap-2">
          <div className="text-primary-800 space-y-2">
            <h1 className="font-jetbrains-mono text-primary-500 text-xs uppercase">
              Time
            </h1>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaRegClock className="h-5 w-5" />
              <p>{startTime}</p>
              <FaArrowRightLong className="text-primary-400 h-3 w-3" />
              <p>{endTime}</p>
            </div>
          </div>

          <div className="text-primary-800 space-y-2">
            <h1 className="font-jetbrains-mono text-primary-500 text-xs uppercase">
              Date
            </h1>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <MdOutlineCalendarToday className="h-5 w-5" />
              <p>{formatShortDate(date!)}</p>
            </div>
          </div>
        </div>

        <div className="border-primary-100 my-2 h-3 border-b-3" />

        <div className="mt-4 space-y-2">
          <h1 className="font-jetbrains-mono text-primary-500 text-sm uppercase">
            Description
          </h1>
          <p className="text-primary-800 text-base">{description}</p>
        </div>

        {attachmentLink && (
          <div className="border-primary-200 mt-4 rounded-xs border-2 p-3 transition-colors hover:bg-neutral-100">
            <h1 className="font-jetbrains-mono text-primary-500 text-sm uppercase">
              Reference Link
            </h1>
            <div className="flex items-center gap-2">
              <IoLinkSharp className="h-6 w-6" />
              <Link
                href={attachmentLink}
                target="_blank"
                className="text-primary-800 line-clamp-1 text-base underline"
              >
                {formatDisplayUrl(attachmentLink)}
              </Link>
            </div>
          </div>
        )}

        <div className="mt-auto flex w-full flex-col items-center justify-center gap-3 pt-20">
          <button
            onClick={() => {
              toggleTodoDone(id);
              closeTodoDetail();
            }}
            className="border-primary-800 flex w-full items-center justify-center gap-3 rounded-xs border-2 py-3"
          >
            {isDone ? (
              <FaUndo className="h-4 w-4" />
            ) : (
              <IoMdDoneAll className="h-6 w-6" />
            )}
            <p className="font-jetbrains-mono text-base font-bold uppercase">
              {isDone ? "Undo" : "Mark As Done"}
            </p>
          </button>
          <div className="flex w-full gap-3">
            <Dialog>
              <DialogTrigger className="border-primary-800 flex w-full items-center justify-center gap-3 rounded-xs border-2 py-3">
                <IoTrashOutline className="h-6 w-6" />
                <p className="font-jetbrains-mono text-base font-bold uppercase">
                  Delete
                </p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <PiWarningOctagonFill className="h-5 w-5" />
                    <p className="text-lg font-bold">Delete Task</p>
                  </DialogTitle>
                  <DialogDescription className="text-primary-800 text-base">
                    This action cannot be undone. Are you sure you want to
                    delete this{" "}
                    <span className="font-bold">&quot;{title}&quot;</span> todo?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="p-5 text-base">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => {
                        deleteTodo(id);
                        closeTodoDetail();
                      }}
                      className="p-5 text-base"
                    >
                      <IoTrashOutline className="h-6 w-6" />
                      Delete Todo
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <button className="border-primary-800 bg-primary-800 text-primary-0 flex w-full items-center justify-center gap-3 rounded-xs border-2 py-3">
              <MdOutlineModeEdit className="h-6 w-6" />
              <p className="font-jetbrains-mono text-base font-bold uppercase">
                Edit Task
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { DesktopTodoDetail };
