import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Supabase from "@/components/icons/supabase";
import Vercel from "@/components/icons/vercel";
import GitHub from "@/components/icons/github";
import Nextjs from "@/components/icons/next";
import Cursor from "@/components/icons/cursor";
import Notion from "@/components/icons/notion";

const reviews = [
  {
    icon : <Supabase />,
    name: "Supabase",
  },
  {
    icon : <Vercel />,
    name: "Vercel",
  },
  {
    icon : <GitHub />,
    name: "GitHub",
  },
  {
    icon : <Nextjs />,
    name: "Next.js",
  },
  {
    icon : <Cursor />,
    name: "Cursor",
  },
  {
    icon : <Notion />,
    name: "Notion",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 px-10",
        // light styles
        " bg-gradient-to-br from-[#F0FFFF]  to-[#007FFF] border-white hover:bg-gray-950/[.2]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <div className="flex flex-col">
          <figcaption className="text-md font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function CompaniesMarquee() {
  return (
    <div className="relative flex w-full flex-col space-y-6 items-center justify-center overflow-hidden">
      <div className="flex flex-col space-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">
            Backed by the best in the business
          </h1>
          <p className="text-sm text-gray-500">
            We are proud to be backed by the best in the business
          </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
