import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppShell } from "@/components/app-shell";
import {
  Rocket,
  ClipboardCheck,
  FileText,
  Gamepad2,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const hubItems = [
  {
    title: "Quizzes",
    description: "Challenge your mind",
    href: "/quizzes",
    icon: <Rocket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Daily Tasks",
    description: "Complete your tasks",
    href: "/tasks",
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Assignments",
    description: "Submit your homework",
    href: "/assignments",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    title: "Fun Games",
    description: "Learn while you play",
    href: "/games",
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">
              Welcome, Alex!
            </h1>
            <p className="text-muted-foreground">
              Ready to become a Math Whiz? Let's get started!
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hubItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <Card className="hover:border-primary/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-medium font-headline">
                    {item.title}
                  </CardTitle>
                  {item.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Your Progress
              </CardTitle>
              <CardDescription>
                You're doing great! Keep up the good work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Quizzes Completed</span>
                  <span className="font-bold">5 / 10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tasks Done</span>
                  <span className="font-bold">12 / 20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Games Played</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Today's Topic
              </CardTitle>
              <CardDescription>
                Let's learn about Fractions!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                A fraction represents a part of a whole. When you slice a
                pizza, each slice is a fraction of the whole pizza!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
