"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CanvasHTMLAttributes } from "react";

import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import type { ICloud, SimpleIcon } from "react-icon-cloud";

type IconCloudProps = {
  iconSlugs: string[];
};

// Rendered icon edge, in CSS pixels, when an icon is at the front of the cloud.
const ICON_DISPLAY_SIZE = 40;
const ICON_SOURCE_SIZE = 64;

/**
 * TagCanvas hit-tests in canvas pixels but reads the mouse in CSS pixels, so
 * the canvas must be exactly its on-screen size or hover lands on the wrong
 * icon. `size` is the measured CSS size of the container.
 */
function buildCloudProps(size: number): Omit<ICloud, "children"> {
  return {
    id: "skills-icon-cloud",
    containerProps: {
      style: {
        width: "100%",
        height: "100%",
        background: "transparent",
      },
    },
    // The library types canvasProps as generic HTMLAttributes, which omit the
    // canvas-only width/height attributes; React still forwards them.
    canvasProps: {
      ...({ width: size, height: size } as CanvasHTMLAttributes<HTMLCanvasElement>),
      style: {
        width: `${size}px`,
        height: `${size}px`,
        background: "transparent",
      },
    },
    options: {
      clickToFront: 500,
      decel: 0.99,
      depth: 1,
      imageScale: ICON_DISPLAY_SIZE / ICON_SOURCE_SIZE,
      initial: [0.1, -0.1],
      interval: 20,
      minSpeed: 0.02,
      maxSpeed: 0.05,
      outlineColour: "#0000",
      reverse: true,
      scrollPause: false,
      // "div" renders a real element (styled by .skill-tooltip in globals.css)
      // instead of the browser's native title box.
      tooltip: "div",
      tooltipClass: "skill-tooltip",
      tooltipDelay: 0,
      wheelZoom: false,
    },
  };
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: ICON_SOURCE_SIZE,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<IconData | null>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    let cancelled = false;

    if (!iconSlugs || iconSlugs.length === 0) {
      setData(null);
      return;
    }

    fetchSimpleIcons({ slugs: iconSlugs })
      .then((result) => {
        if (!cancelled) {
          setData(result);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [iconSlugs]);

  // Track the container's real size so the canvas always matches it.
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize(Math.floor(Math.min(width, height)));
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Pin the tooltip just above the hovered icon (the pointer is on it).
  // Variables are set on the tooltip element itself so only it restyles.
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const tooltip = document.querySelector<HTMLElement>(".skill-tooltip");

      tooltip?.style.setProperty("--tt-x", `${event.clientX}px`);
      tooltip?.style.setProperty("--tt-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data?.simpleIcons) {
      return null;
    }

    const icons = Object.values(data.simpleIcons);

    if (icons.length === 0) {
      return null;
    }

    return icons.map((icon) => renderCustomIcon(icon, "dark"));
  }, [data]);

  const cloudProps = useMemo(() => buildCloudProps(size), [size]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {renderedIcons && size > 0 ? (
        // Remount on resize: TagCanvas reads the canvas size only at start.
        <Cloud key={size} {...cloudProps}>
          {renderedIcons}
        </Cloud>
      ) : (
        <span
          style={{
            color: "var(--color-text-muted)",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>
          Loading skills...
        </span>
      )}
    </div>
  );
}
