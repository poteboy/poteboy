import type React from "react";

/**
 * @see {@link https://reactsvgicons.com/systemuicons}
 */
export function IconDisplay(
  props: React.SVGProps<SVGSVGElement> & { title?: string }
) {
  const { title } = props;
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3.5h11a2 2 0 012 2v6.049a2 2 0 01-1.85 1.994l-.158.006-11-.042a2 2 0 01-1.992-2V5.5a2 2 0 012-2zM5.464 15.5H15.5M7.5 17.5h6" />
      </g>
    </svg>
  );
}

/**
 * @see {@link https://reactsvgicons.com/systemuicons}
 */
export function IconUser(
  props: React.SVGProps<SVGSVGElement> & { title?: string }
) {
  const { title } = props;
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <title>{title}</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z"
      />
    </svg>
  );
}

/**
 * @see {@link https://reactsvgicons.com/systemuicons}
 */
export function IconNotebook(
  props: React.SVGProps<SVGSVGElement> & { title?: string }
) {
  const { title } = props;
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 3.5h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-10a2 2 0 012-2zM7.5 17.5v-14" />
      </g>
    </svg>
  );
}
