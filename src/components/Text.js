import React from "react";
import { Typography } from "@mui/material";

export function T1(props) {
    return <Typography variant="h3" component="h1" sx={{ pb: 5 }}
        {...props} />
}

export function T2(props) {
    return <Typography variant="h4" component="h2" sx={{ pb: 2 }}
        {...props} />
}

export function T3(props) {
    return <Typography variant="h5" component="h3" sx={{ pb: 1 }}
        {...props} />
}

export function Pa(props) {
    return <Typography paragraph
        {...props} />
}
