"use client";
import { supabase } from "@/lib/superbaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/home");
      } else if (error) {
        alert(`Authentication failed: ${error.message}`);
        router.replace("/sign-in");
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      ) : (
        <span>Redirecting...</span>
      )}
    </div>
  );
}