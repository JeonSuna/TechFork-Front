import { TAG_MAP } from "../constants/tag";

export const getFormattedInterests = (selectedTags: string[]) => {
  return Object.entries(TAG_MAP)
    .map(([category, keywords]) => {
      const matchingKeywords = keywords.filter(keyword =>
        selectedTags.includes(keyword.code),
      );

      return {
        category,
        keywords: matchingKeywords,
      };
    })
    .filter(item => item.keywords.length > 0);
};
