"use client";

import { useRef } from "react";
import Draggable from "react-draggable";
// import { useDebouncedCallback } from "use-debounce";
import type { DraggableData, DraggableEvent } from "react-draggable";

const HANDLER_SIZE = 40;
const DROPPABLE_SIZE = 320;
const BOUNDS = { top: 0, bottom: DROPPABLE_SIZE - HANDLER_SIZE };

export default function Timeline() {
  const handlerRef = useRef(null);

  function handleStop(_: DraggableEvent, data: DraggableData) {
    const { y } = data;
    const scrollRatio = y / (DROPPABLE_SIZE - HANDLER_SIZE);

    const windowScrollTop =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) *
      scrollRatio;

    window.scrollTo({
      top: windowScrollTop,
      behavior: "smooth",
    });
  }

  return (
    <div className={`h-80 border-l-2 sticky top-4`}>
      <Draggable axis="y" bounds={BOUNDS} onStop={handleStop}>
        <div className={`h-10 w-3 bg-slate-200`} ref={handlerRef} />
      </Draggable>
    </div>
  );
}
