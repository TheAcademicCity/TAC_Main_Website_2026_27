/** Read UTM / ad tracking params from the current page URL. */
export function getTrackingParams(searchParams: URLSearchParams) {
  return {
    utm_source: searchParams.get("utm_source") ?? "",
    utm_medium: searchParams.get("utm_medium") ?? "",
    utm_campaign: searchParams.get("utm_campaign") ?? "",
    utm_device: searchParams.get("utm_device") ?? searchParams.get("device") ?? "",
    utm_term: searchParams.get("utm_term") ?? "",
    utm_content: searchParams.get("utm_content") ?? "",
    utm_age: searchParams.get("utm_age") ?? "",
    utm_gender: searchParams.get("utm_gender") ?? "",
  };
}
