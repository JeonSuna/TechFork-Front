export type OnboardingRequestType = {
  nickname: string;
  email: string;
  description: string;
  interests: InterestType[];
};

type InterestType = {
  category: string;
  keywords: string[];
};
