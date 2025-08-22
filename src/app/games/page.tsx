import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Gamepad, Puzzle, Trophy } from "lucide-react";

const games = [
  {
    title: "Fraction Flipper",
    description: "Master fractions by flipping delicious pancakes!",
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    tags: ["Fractions", "Visual"],
  },
  {
    title: "Geometry Genius",
    description: "Build amazing shapes and become a true geometry expert.",
    icon: <Gamepad className="h-10 w-10 text-primary" />,
    tags: ["Shapes", "Logic"],
  },
  {
    title: "Time Teller",
    description: "Race against the clock to learn telling time.",
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    tags: ["Time", "Speed"],
  },
  {
    title: "Multiplication Master",
    description: "Blast asteroids with your multiplication skills.",
    icon: <Gamepad className="h-10 w-10 text-primary" />,
    tags: ["Multiplication", "Arcade"],
  },
];

const achievements = [
  {
    title: "First Steps",
    description: "Completed your first quiz!",
    unlocked: true,
    icon: <Award className="h-8 w-8 text-accent" />,
  },
  {
    title: "Math Explorer",
    description: "Played every game at least once.",
    unlocked: true,
    icon: <Trophy className="h-8 w-8 text-accent" />,
  },
  {
    title: "Quiz Whiz",
    description: "Scored 100% on a quiz.",
    unlocked: false,
    icon: <Award className="h-8 w-8 text-muted-foreground" />,
  },
  {
    title: "Perfect Week",
    description: "Completed all tasks for 7 days in a row.",
    unlocked: false,
    icon: <Trophy className="h-8 w-8 text-muted-foreground" />,
  },
];

export default function GamesPage() {
  return (
    <AppShell>
      <div className="flex-1 space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Play & Learn
        </h1>
        <Tabs defaultValue="games">
          <TabsList>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="games">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <Card key={game.title} className="flex flex-col">
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    {game.icon}
                    <div className="space-y-1">
                      <CardTitle>{game.title}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button className="w-full">Play Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className={`transition-all ${
                    !achievement.unlocked ? "bg-muted/50" : ""
                  }`}
                >
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div
                      className={`p-4 rounded-full mb-4 ${
                        achievement.unlocked ? "bg-accent/20" : "bg-muted"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <p className="font-semibold">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
