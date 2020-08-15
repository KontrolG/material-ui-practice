import examples from "../data/examples";
const toNavigationLink = ({ title }) => ({ text: title, to: "#" });

const getMainNavigationLinks = () => {
  const examplesLinks = examples.map(toNavigationLink);
  const homeLink = { text: "Home", to: "/" };
  return [homeLink, ...examplesLinks];
};

export default getMainNavigationLinks;
