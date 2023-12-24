function getCredits() {
  const credits = document.createElement("p");
  credits.classList.add("credits");
  credits.innerHTML =
    'Photo by <a href="https://unsplash.com/@von_co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivana Cajina</a> on <a href="https://unsplash.com/photos/mountains-under-white-mist-at-daytime-HDd-NQ_AMNQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

  return credits;
}

export { getCredits };
