import { SafeUrl } from "@angular/platform-browser";

export interface Category {
  categoryID: number;
  categoryName: string;
  description: string;
  picture: [];
  pictureUrl: SafeUrl;
}
