import Image from "next/image";
import type { HTMLAttributes } from "react";

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="https://i.ibb.co/s9qB1p6/image.png"
        alt="Math Whiz Kids Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    </div>
  );
}
