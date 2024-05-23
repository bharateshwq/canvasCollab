"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/Loading";
import { ReactNode } from "react";

interface ConvexClientProviderProps {
  children: ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthenticatedComponent>{children}</AuthenticatedComponent>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

const AuthenticatedComponent = ({ children }: { children: ReactNode }) => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <Loading />;
  }

  return userId ? <>{children}</> : <Loading />;
};
