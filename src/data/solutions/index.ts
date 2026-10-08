import type { Lang } from '../site';
import type { SolutionPage } from './types';
import { tenderAnalysisDe, tenderAnalysisEn } from './tender-analysis';
import { tenderAutofillDe, tenderAutofillEn } from './tender-autofill';

export type { SolutionPage } from './types';

export const solutionPages: SolutionPage[] = [tenderAnalysisDe, tenderAnalysisEn, tenderAutofillDe, tenderAutofillEn];

export const getSolutionPage = (lang: Lang, slug?: string) =>
  solutionPages.find((p) => p.language === lang && p.slug === slug);
