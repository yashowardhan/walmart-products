import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ProductPagination() {
  const [pageNumber, setpageNumber] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value, "bullshit");
    setpageNumber(value);
  };

  return (
    <div>
      <Pagination count={10} page={pageNumber} onChange={handleChange} />
    </div>
  );
}
