import { useState, useEffect } from 'react';
import { HardSkill } from '@/app/types/components/index';

export const useHardSkills = () => {
  const [hardSkills, setHardSkills] = useState<HardSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHardSkills = async () => {
      try {
        const response = await fetch('/api/hard-skills');
        if (!response.ok) {
          throw new Error('Failed to fetch hard skills');
        }
        const data = await response.json();
        setHardSkills(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchHardSkills();
  }, []);

  return { hardSkills, isLoading, error };
};