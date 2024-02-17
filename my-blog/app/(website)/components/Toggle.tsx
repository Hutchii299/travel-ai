"use client";

import { Switch } from "@headlessui/react";
import cn from "classnames";

type Props = {
  text: string;
  enabled: boolean;
  onToggle: (toggle: boolean) => void;
  isValid?: boolean;
};

export default function Toggle({
  text,
  enabled,
  onToggle,
  isValid = true,
}: Props) {
  const handleToggle = () => {
    onToggle(!enabled);
  };

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch.Label as="span" className="mr-3 text-sm">
        <span
          className={`font-medium ${
            isValid ? "text-gray-900 dark:text-white" : "text-red-500"
          }`}
        >
          {text}
        </span>
      </Switch.Label>
      <Switch
        checked={enabled}
        onChange={handleToggle}
        className={cn(
          { "bg-blue-600": enabled },
          { "bg-gray-200 dark:bg-gray-600": !enabled },
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            { "translate-x-5": enabled },
            { "translate-x-0": !enabled },
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-slate-100 shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
