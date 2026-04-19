import { useState, useEffect, useCallback } from "react";
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

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    fetcher()
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : String(e));
        setLoading(false);
      });
  }, [fetcher]);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refetch: load };
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
