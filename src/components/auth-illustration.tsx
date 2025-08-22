import type { SVGProps } from 'react';

export function AuthIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <g fill="none">
        <path fill="#FFB300" d="M128 128h256v256H128z" />
        <path fill="#64B5F6" d="M192 192h128v128H192z" />
        <path
          fill="#FFFFFF"
          d="M256 256m-32 0a32 32 0 1 0 64 0a32 32 0 1 0-64 0"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M256 224v64m-32-32h64"
        />
        <path
          fill="#37474F"
          d="M128 112a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16v16H128z"
        />
        <circle cx="152" cy="112" r="8" fill="#FFFFFF" />
        <circle cx="176" cy="112" r="8" fill="#FFFFFF" />
      </g>
      <g>
        <path
          fill="#FFB300"
          d="M400 400l-48-48h-192l-48 48z"
          transform="translate(0 32)"
        />
        <path
          fill="#E3F2FD"
          d="M112 128l-32-32v256l32-32z"
          transform="translate(-32 0)"
        />
        <path
          fill="#E3F2FD"
          d="M400 128l32-32v256l-32-32z"
          transform="translate(32 0)"
        />
      </g>
      <path
        fill="#FFB300"
        opacity="0.5"
        d="M256 128l64 64-64 64-64-64z"
        transform="rotate(45 256 256)"
      />
    </svg>
  );
}
