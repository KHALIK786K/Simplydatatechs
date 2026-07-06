import { useEffect, useState } from "react";
import type { Course } from "@/types";
import { fetchCourses } from "@/api/courses";

interface State {
  data: Course[];
  loading: boolean;
  error: string | null;
}

/** Loads the full course catalogue with loading/error states. */
export function useCourses(): State {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;
    fetchCourses()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch(() =>
        active &&
        setState({ data: [], loading: false, error: "Failed to load courses." })
      );
    return () => {
      active = false;
    };
  }, []);

  return state;
}
