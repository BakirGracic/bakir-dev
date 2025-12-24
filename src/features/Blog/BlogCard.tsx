import Link from "next/link";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

interface BlogCardProps {
  title: string;
  description: string;
  published: string;
  slug: string;
}

export function BlogCard({
  title,
  description,
  published,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="flex text-pretty flex-col h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="text-sm text-muted-foreground mb-2">{published}</div>
          <CardTitle className="line-clamp-2 leading-tight text-xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grow">
          <CardDescription className="line-clamp-4 text-base">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-3 mt-auto">
          <Button className="w-full cursor-pointer" size="lg">
            Read Article
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
