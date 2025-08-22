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

export default function SignupPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:flex items-center justify-center p-8">
        <AuthIllustration className="h-auto w-full max-w-md" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Logo className="h-12 w-12 mx-auto text-primary" />
            <CardTitle className="text-3xl font-bold font-headline">Create an account</CardTitle>
            <CardDescription>
              Let's get you started on your math adventure!
            </CardDescription>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full name</Label>
              <Input id="full-name" placeholder="Alex Doe" required />
            </div>
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
                Create Account
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline text-primary font-semibold">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
