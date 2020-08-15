import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useMatchesBreakpoint = (matchDirection, size) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints[matchDirection](size));
};

export default useMatchesBreakpoint;
