"use client";

import { getPresentTime, getTodayDate } from "@/lib/date";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TodoFormValues, todoSchema } from "@/types/todoSchema";
import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { IoLink } from "react-icons/io5";

function MobileTodoFormPanel({
  isTodoFormPanelOpen,
  setIsTodoFormPanelOpen,
}: {
  isTodoFormPanelOpen: boolean;
  setIsTodoFormPanelOpen: (isTodoFormPanelOpen: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      date: getTodayDate(),
      startTime: getPresentTime(),
      endTime: getPresentTime(true),
      attachmentLink: "",
      isImportant: false,
    },
  });

  const isImportant = useWatch({
    control,
    name: "isImportant",
  });

  const onSubmit = (data: TodoFormValues) => {
    const todo = {
      id: crypto.randomUUID(),
      ...data,
    };

    console.log("Data", todo);
  };

  return (
    <div
      className={clsx(
        "bg-primary-0 fixed right-0 bottom-0 left-0 z-100 min-h-100 rounded-t-lg",
        "px-6 py-4 transition-all duration-300",
        isTodoFormPanelOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0",
      )}
    >
      <div className="bg-primary-200 mx-auto h-1 max-w-[8vh] rounded-sm" />

      <div className="mt-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">New Task</h1>
        <button type="button" onClick={() => setIsTodoFormPanelOpen(false)}>
          <IoIosClose className="h-12 w-12" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="text-primary-400">
          <div className="flex items-center justify-between">
            <label
              htmlFor="title"
              className="font-jetbrains-mono text-sm uppercase"
            >
              Title
            </label>
            {errors.title && (
              <span className="text-sm text-red-500">
                *{errors.title.message}
              </span>
            )}
          </div>
          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="What needs to be done?"
            className={clsx(
              "ring-primary-200 focus:ring-primary-500 text-primary-800 mt-1 w-full rounded-xs p-2 ring-1 transition-all outline-none",
              errors.title && "ring ring-red-500!",
            )}
          />
        </div>

        <div className="text-primary-400">
          <div className="flex items-center justify-between">
            <label
              htmlFor="title"
              className="font-jetbrains-mono text-sm uppercase"
            >
              Description
            </label>
            {errors.description && (
              <span className="text-sm text-red-500">
                *{errors.description.message}
              </span>
            )}
          </div>
          <textarea
            {...register("description")}
            className={clsx(
              "ring-primary-200 focus:ring-primary-500 text-primary-800 mt-1 w-full rounded-xs p-2 ring-1 transition-all outline-none",
              errors.description && "ring ring-red-500!",
            )}
            placeholder="Add context or notes..."
          ></textarea>
        </div>

        <div className="text-primary-400 grid grid-cols-2 gap-2">
          <h1 className="font-jetbrains-mono text-sm uppercase">Date</h1>
          <h1 className="font-jetbrains-mono text-sm uppercase">Time</h1>

          <div>
            <input
              {...register("date")}
              type="date"
              className={clsx(
                "ring-primary-200 focus:ring-primary-500 text-primary-800 [&::-webkit-calendar-picker-indicator]:text-primary-500 w-full rounded-xs px-2 py-2 ring-1 transition-all outline-none",
                errors.date && "ring ring-red-500!",
              )}
              placeholder="Select a date..."
            />
          </div>

          <div className="ring-primary-200 focus-within:ring-primary-500 flex items-center gap-2 rounded-xs px-2 ring-1 transition-all">
            <input
              {...register("startTime")}
              type="time"
              className={clsx(
                "text-primary-800 flex w-full justify-center border-none bg-transparent outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
                errors.startTime && "ring ring-red-500!",
              )}
            />

            <FaArrowRightLong className="text-primary-400 h-8 w-8" />

            <input
              {...register("endTime")}
              type="time"
              className={clsx(
                "text-primary-800 flex w-full justify-center border-none bg-transparent outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
                errors.endTime && "ring ring-red-500!",
              )}
            />
          </div>
        </div>

        <div className="border-primary-100 my-2 h-3 border-b-3" />

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Mark as Urgent</h1>
            <h2 className="font-jetbrains-mono text-primary-400 text-xs uppercase">
              Priority Task
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setValue("isImportant", !isImportant)}
            className={clsx(
              "relative h-8 w-16 rounded-full transition-colors duration-300",
              isImportant ? "bg-primary-800" : "bg-primary-300",
            )}
          >
            <span
              className={clsx(
                "absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300",
                isImportant ? "translate-x-8" : "translate-x-0",
              )}
            />
          </button>
        </div>

        <div className="border-primary-100 my-2 h-3 border-b-3" />

        <div className="space-y-3">
          <h1 className="font-jetbrains-mono text-primary-400 uppercase">
            Attachment Link
          </h1>

          <div className="border-primary-200 flex items-center gap-2 rounded-xs border p-3">
            <IoLink className="text-primary-800 h-6 w-6" />
            <input
              {...register("attachmentLink")}
              id="attachmentLink"
              type="text"
              placeholder="Add attachment link..."
              className={clsx(
                "ring-primary-200 text-primary-800 focus:ring-primary-500 mt-1 w-full rounded-xs p-2 ring-1 transition-all outline-none",
                errors.attachmentLink && "ring ring-red-500!",
              )}
            />
          </div>
          {errors.attachmentLink && (
            <span className="text-xs text-red-500">
              {errors.attachmentLink.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary-800 text-primary-0 font-jetbrains-mono mt-8 w-full rounded-xs p-3 text-center text-lg uppercase"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export { MobileTodoFormPanel };
