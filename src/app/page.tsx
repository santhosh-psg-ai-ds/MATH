
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthIllustration } from "@/components/auth-illustration";
import { Logo } from "@/components/logo";
import { Rocket, BookOpen, TrendingUp, Gamepad2 } from "lucide-react";

const features = [
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "Engaging Quizzes",
        description: "Interactive quizzes that make learning and practicing math a fun challenge.",
    },
    {
        icon: <Gamepad2 className="h-10 w-10 text-primary" />,
        title: "Fun & Games",
        description: "Learn while you play with a variety of math-based games for all skill levels.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "Track Progress",
        description: "Monitor your progress with detailed reports and personalized feedback.",
    },
    {
        icon: <BookOpen className="h-10 w-10 text-primary" />,
        title: "Daily Topics",
        description: "Explore new math concepts every day with our curated lessons.",
    },
];


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Logo className="h-8 w-8 mr-2 text-primary" />
            <span className="font-bold text-lg">Math Whiz Kids</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Unlock Your Child's Inner Math Genius
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                    Math Whiz Kids is a fun and interactive platform designed to help 4th graders master math concepts with engaging games and quizzes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Why Kids Love Math Whiz Kids</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our platform is built to make learning math enjoyable and effective.
                    </p>
                </div>
                <div className="mx-auto grid max-w-sm gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center justify-center space-y-2 rounded-lg p-4 transition-all hover:bg-background/50 hover:scale-105">
                            {feature.icon}
                            <h3 className="text-lg font-bold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <footer className="flex items-center justify-center py-6 md:py-8 border-t">
          <div className="container flex flex-col items-center justify-center gap-1 text-center">
              <p className="text-sm text-muted-foreground">© 2024 Math Whiz Kids. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}
