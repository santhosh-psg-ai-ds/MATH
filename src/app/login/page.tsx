import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthIllustration } from "@/components/auth-illustration";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Logo className="h-12 w-12 mx-auto text-primary" />
            <h1 className="text-3xl font-bold font-headline">Welcome Back!</h1>
            <p className="text-balance text-muted-foreground">
              Enter your mobile number to log in to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="+1 234 567 890"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Link href="/" className="w-full">
                Login with SMS
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-primary font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex items-center justify-center p-8">
        <AuthIllustration className="h-auto w-full max-w-md" />
      </div>
    </div>
  );
}
