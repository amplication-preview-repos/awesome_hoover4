import { SocialLink as TSocialLink } from "../api/socialLink/SocialLink";

export const SOCIALLINK_TITLE_FIELD = "platform";

export const SocialLinkTitle = (record: TSocialLink): string => {
  return record.platform?.toString() || String(record.id);
};
