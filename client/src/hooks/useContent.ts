import { useState, useEffect, useCallback, useRef } from "react";
import {
  fetchProducts,
  fetchServices,
  fetchHome,
  fetchAbout,
  fetchWellness,
  fetchContact,
  fetchSite,
  fetchSubmissions,
} from "@/lib/api";
import type {
  Product,
  ServicesData,
  HomeContent,
  AboutContent,
  WellnessContent,
  ContactContent,
  SiteContent,
  ContactSubmission,
} from "@/types/content";

interface UseContentResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useContent<T>(fetcher: () => Promise<T>): UseContentResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  // Store fetcher in a ref to prevent it from causing re-renders
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetcherRef.current()
      .then((d) => {
        if (!cancelled) {
          setData(d);
          setLoading(false);
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [tick]);

  const refetch = useCallback(() => setTick((t) => t + 1), []);

  return { data, loading, error, refetch };
}

export function useProducts(): UseContentResult<Product[]> {
  return useContent(fetchProducts);
}

export function useServices(): UseContentResult<ServicesData> {
  return useContent(fetchServices);
}

export function useHomeContent(): UseContentResult<HomeContent> {
  return useContent(fetchHome);
}

export function useAboutContent(): UseContentResult<AboutContent> {
  return useContent(fetchAbout);
}

export function useWellnessContent(): UseContentResult<WellnessContent> {
  return useContent(fetchWellness);
}

export function useContactContent(): UseContentResult<ContactContent> {
  return useContent(fetchContact);
}

export function useSiteContent(): UseContentResult<SiteContent> {
  return useContent(fetchSite);
}

export function useSubmissions(): UseContentResult<ContactSubmission[]> {
  return useContent(fetchSubmissions);
}
