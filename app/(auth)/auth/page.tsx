"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen mt-7">
      <div className="w-full max-w-3xl mx-auto flex flex-col lg:flex-row p-2">
        <div>
          <div
            className="mb-8 lg:mb-12 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <ChevronLeft className=" text-gray-500 h-6 w-6 sm:h-8 sm:w-8 border-2 rounded-full p-1 " />
          </div>
          {/* Form header */}

          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-stone-700 to-orange-100
 bg-clip-text text-transparent pb-3"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8">
              {isSignUp
                ? "Join TeeStores today and discover exclusive deals on your favorite products!"
                : "Welcome back to TeeStores! Log in to continue your shopping journey."}
            </p>
          </div>
          {/* Toggle form */}

          <div className="mt-4 sm:mt-5 flex items-center justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              {isSignUp ? "Already a member?" : "Don't have an account?"}
            </p>

            <Button
              variant="link"
              className="text-lg sm:text-xl lg:text-2xl text-stone-700 cursor-pointer"
              onClick={toggleForm}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
