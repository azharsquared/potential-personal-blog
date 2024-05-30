import { ROUTES } from '@/constants/routes';

export interface NavItemArgs {
  routePathname: string;
  navItemHref: string;
}

export const isActiveNavItem = ({ routePathname, navItemHref }: NavItemArgs): boolean => {
  let isActive: boolean;

  switch (true) {
    // navItemHref identifies button, routePathname is route
    case navItemHref === ROUTES.BLOG && routePathname === ROUTES.BLOG:
    case navItemHref === ROUTES.ABOUT && routePathname === ROUTES.ABOUT:
    // don't highlight home route
    // case navItemHref === ROUTES.HOME && routePathname === ROUTES.HOME:
    case navItemHref === ROUTES.RESUME && routePathname === ROUTES.RESUME:
    case navItemHref === ROUTES.PROJECTS && routePathname.startsWith(ROUTES.PROJECTS):
    case navItemHref === ROUTES.CATEGORIES_AND_TAGS && routePathname.startsWith(ROUTES.TAGS):
    case navItemHref === ROUTES.CATEGORIES_AND_TAGS && routePathname.startsWith(ROUTES.CATEGORIES):
    case navItemHref === ROUTES.CATEGORIES_AND_TAGS &&
      routePathname.startsWith(ROUTES.CATEGORIES_AND_TAGS):
    case navItemHref === ROUTES.BLOG &&
      !routePathname.startsWith(ROUTES.TAGS) &&
      !routePathname.startsWith(ROUTES.CATEGORIES) &&
      !routePathname.startsWith(ROUTES.CATEGORIES_AND_TAGS) &&
      routePathname.startsWith(ROUTES.BLOG):
      isActive = true;
      break;

    default:
      isActive = false;
      break;
  }

  return isActive;
};
