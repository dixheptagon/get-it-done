"use client";

import { getPresentTime, getTodayDate } from "@/lib/date";
import { addTodo } from "@/store/useTodoStore";
import { setIsTodoFormPanelOpen, useTodoUIStore } from "@/store/useTodoUIStore";
import { TodoFormValues, todoSchema } from "@/types/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { IoLink } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";

function DesktopTodoFormPanel() {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;

    textarea.style.height = "auto";

    if (textarea.scrollHeight > 300) {
      textarea.style.height = "auto";
    }
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const isTodoFormPanelOpen = useTodoUIStore(
    (state) => state.isTodoFormPanelOpen,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      date: getTodayDate(),
      startTime: getPresentTime(),
      endTime: getPresentTime(true),
      isImportant: false,
    },
  });

  const onSubmit = useCallback(
    (data: TodoFormValues) => {
      const todo = {
        id: crypto.randomUUID(),
        isDone: false,
        ...data,
      };

      addTodo(todo);

      reset();
      setIsTodoFormPanelOpen(false);
    },
    [reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={clsx(
          "bg-primary-0 fixed right-0 bottom-0 z-100 min-h-screen min-w-[60vh]",
          "px-8 py-4 transition-all duration-300",
          "flex flex-col justify-between",
          isTodoFormPanelOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0",
        )}
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">New Task</h1>
            <button
              type="button"
              className="rounded-md p-1 transition-colors hover:bg-neutral-100"
              onClick={() => setIsTodoFormPanelOpen(false)}
            >
              <IoIosClose className="h-8 w-8" />
            </button>
          </div>

          <div className="border-primary-200 -mx-8 border-b-2" />
        </div>

        <div className="my-8 space-y-4">
          <div className="text-primary-400">
            <div className="flex items-center justify-between">
              <label
                htmlFor="title"
                className="font-jetbrains-mono text-sm uppercase"
              >
                Task Title
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

          <div className="text-primary-400 grid grid-cols-2 gap-2">
            <h1 className="font-jetbrains-mono text-sm uppercase">Date</h1>

            <h1 className="font-jetbrains-mono text-sm uppercase">Time</h1>

            <div>
              <input
                {...register("date")}
                type="date"
                min={new Date().toLocaleDateString("fr-CA")}
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

            <div>
              {errors.date && (
                <span className="text-xs text-red-500">
                  *{errors.date.message}
                </span>
              )}
            </div>

            <div>
              {errors.startTime && (
                <span className="text-xs text-red-500">
                  *{errors.startTime.message}
                </span>
              )}

              {errors.endTime && (
                <span className="text-xs text-red-500">
                  *{errors.endTime.message}
                </span>
              )}
            </div>
          </div>

          <div className="text-primary-400">
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
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
              ref={(e) => {
                register("description").ref(e);
                descriptionRef.current = e;
              }}
              onInput={handleTextareaInput}
              className={clsx(
                "ring-primary-200 focus:ring-primary-500 text-primary-800 mt-1 w-full rounded-xs p-2 ring-1 transition-all outline-none",
                "max-h-42 min-h-24 overflow-y-auto",
                "[&::-webkit-scrollbar-thumb]:bg-primary-200 resize-none [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent",
                errors.description && "ring ring-red-500!",
              )}
              placeholder="Add context or notes..."
            ></textarea>
          </div>

          <div>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                {...register("isImportant")}
                type="checkbox"
                className="peer sr-only"
              />

              <div className="text-primary-0 ring-primary-200 flex h-5 w-5 items-center justify-center rounded-xs ring-2 transition-colors peer-checked:bg-black peer-checked:ring-0">
                <FaCheck className="h-4 w-4 text-white transition-transform peer-checked:opacity-100" />
              </div>

              <span className="font-jetbrains-mono text-primary-400 peer-checked:text-primary-800 text-sm uppercase transition-colors">
                Mark as urgent (high priority)
              </span>
            </label>
          </div>

          <div className="space-y-3">
            <h1 className="font-jetbrains-mono text-primary-400 text-sm uppercase">
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
                  "ring-primary-200 text-primary-800 focus:ring-primary-500 mt-1 w-full rounded-xs p-2 text-sm ring-1 transition-all outline-none",
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
        </div>

        <div>
          <div className="border-primary-200 -mx-8 border-b-2" />

          <button
            type="submit"
            className="bg-primary-800 ring-primary-800 text-primary-0 font-jetbrains-mono hover:bg-primary-600 mt-4 flex w-full items-center justify-center gap-2 rounded-xs p-2.5 text-center text-sm uppercase ring-2 transition-colors"
          >
            <MdAddTask className="h-5 w-5" />
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
}

export { DesktopTodoFormPanel };
