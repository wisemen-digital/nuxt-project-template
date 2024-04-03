export default function getLocalePath(routeName: CustomRoute, slugName?: string | number) {
  const localePath = useLocalePath()
  if (routeName && !slugName) {
    return localePath(
      { name: routeName },
    )
  }
  else if (routeName && slugName) {
    return localePath(
      {
        name: routeName,
        params: {
          slug: slugName,
        },
      },
    )
  }
  else { return '' }
}
